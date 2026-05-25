# WinCC v7 – Wysyłanie wiadomości e-mail z poziomu skryptu VB

W dobie dynamicznego rozwoju funkcjonalności IT - systemy automatyki zmieniają się bardzo elastycznie, nowe funkcje pojawiają się zarówno po stronie sprzętowej jak i narzędzi programowych. Trendy wymuszają już wręcz taką funkcjonalność jak możliwość dostępu do sterownika czy wizualizacji przez Internet, sposobność wysłania komunikatu tekstowego w formie `SMS` lub `e-mail` przez system automatyki czy możliwość sterowania zakładem produkcyjnym z poziomu urządzenia mobilnego, np. tabletu czy telefonu komórkowego. Każdy z producentów dąży do tego aby taka funkcjonalność była możliwa i aby konfiguracja była możliwie uproszczona. 

W niniejszym dokumencie skupimy się na funkcjonalności wysyłania wiadomości `e-mail` przez system `SCADA WinCC`. Nasz system wizualizacyjny posiada kilka możliwości na udostępnienie takiej funkcjonalności. Między innymi można wykonać to przez pakiet opcjonalny `WinCC/DataMonitor`, który pozwoli użytkownikowi na wskazanie oraz automatyczne wysłanie sprawozdania produkcyjnego właśnie w postaci wiadomości `e-mail`. Inną opcją jest wykorzystanie stosunkowo nowego narzędzie `WinCC/EvenNotifier`, tutaj również możemy wysłać wiadomość pocztą elektroniczną, np. z informacją o wystąpieniu komunikatu alarmowego czy zmianie statusu urządzenia czy też ogólniej rzecz ujmując zmiennej procesowej. 

Powyższe rozwiązania są bardzo dobrym wyborem gdyż są to rozwiązania systemowe, co w dużym stopniu gwarantuje na poprawną  funkcjonalność, kompatybilność z określonymi systemami operacyjnymi, rozwóz pakietów wraz ze zmianami na rynku oprogramowania oraz co najważniejsze szerokorozumiane wsparcie techniczne ze strony spółki Siemens oraz hotline w Niemczech. Dla większości Klientów jednak jedyną i oczywistą wadą powyższych rozwiązań jest to, iż pakiety opcjonalne są zazwyczaj płatne – i w tym przypadku również tak jest. Cena tych opcji nie jest specjalnie wygórowana aczkolwiek zdarza się, iż zakres funkcjonalności znacznie przewyższa potrzeby odbiorcy systemu lub budżet na aplikację jest już wyczerpany więc warto może się również zastanowić nad rozwiązaniem poza-systemowym, które można przygotować „własnoręcznie”. Rozwiązanie takie przede wszystkim niesie za sobą fakt, iż jesteśmy z nim pozostawieni sami i musimy nad nim panować. W przypadku zmiany wersji systemu operacyjnego, rozbudowie wizualizacji lub jej upgrade-ie może się okazać, iż będą wymagana poprawki lub zmiany w skrypcie, na bazie którego funkcjonalność utworzymy. Niemiej jednak niewątpliwą zaletą jest fakt, iż rozwiązanie jest bezpłatne, gdyż w pełni funkcjonalny edytor ANSI C oraz VBA jest dostępny w podstawowym pakiecie inżynierskim każdej wersji systemu `SCADA WinCC`.

W niniejszym dokumencie przedstawimy właśnie prosty przykład jak wysłać wiadomość e-mail z załącznikiem z poziomu standardowego edytora skryptów VB dostępnego w środowisku inżynierskim WinCC. W tym celu wykorzystana zostanie standardowa biblioteka CDO dostarczana przez Microsoft wraz z każdą wersją systemu operacyjnego Windows.
`CDO  (Collaboration Data Objects)` jest to pakiet zapewniający dostęp do obiektów zgodnych z `MS Outlook` poprzez interfejs programowania aplikacji `(API)` bazujący na modelu COM (Component Object Model). Wykorzystując CDO aplikacja może połączyć się do `MAPI (Messaging Application Program Interface)` czyli interfejsu programistycznego opracowanego przez Microsoft umożliwiającego programom wysyłanie i odbieranie poczty elektronicznej.

W celu zapewnienia maksymalnej uniwersalności skonfigurujemy skrypt, który wykorzystuje skrzynkę mailową Google czyli serwer poczty GMAIL. W celu wykorzystania innego providera poczty elektronicznej trzeba sprawdzić w ustawieniach adres serwera SMTP oraz porty, na których odbywa się komunikacja.  

```vb
'Deklaracje
Dim objMessage 

'definiujemy obiekt typu CDO
Set objMessage = CreateObject("CDO.Message")

'konfiguracja serwisu SMTP (1 – serwer lokalny, 2 – serwer zdalny)
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2

'definicja nazwy serwera SMTP
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "smtp.gmail.com"

'określenie portu dla SMTP (domyślnie 25)
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 465

'wybieramy metodę autentykacji - Basic Authentication 
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1

'określamy konto użytkownika jakie zostanie wykorzystane do wysyłania maili
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusername") = "adres@gmail.com"

'wskazujemy hasło dla powyższego konta
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "<hasło_gmail>"

'określamy czy zabezpieczenie SSL jest użyte w połączeniu do SMTP
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = True

'ustawiamy timeout
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = "5"
objMessage.Configuration.Fields.Update

'parametryzujemy wiadomość e-mail
'temat wiadomości
objMessage.Subject = "Wiadomość wysłana z WinCC" 

'nadawca
objMessage.From = "adres@gmail.com"

'odbiorca
objMessage.To = "<ares@odbiorcy>"

'treść wiadomości
objMessage.TextBody = "Sukces!"

'załącznik
objMessage.AddAttachment "d:\załącznik.txt"

'wyślij wiadomość
objMessage.Send

'wyświetl potwierdzenie wykonania skryptu
Msgbox "Wiadomość wysłana."

```

Przykład został przygotowany oraz przetestowany pod Windows 7 SP1 x64 oraz WinCC v7.2 Update 5.