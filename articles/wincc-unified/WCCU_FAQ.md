# WinCC Unified FAQ V1.1 (07/2026) – robocza 89%

![Grafika 1](images/WinCC_Unified_FAQ_V11_072026_robocza_89/WinCC_Unified_FAQ_V11_072026_robocza_89_1.png)

## UI/UX – hotkey

#hotkey #skrót #klawisz

Naciśnięcie kombinacji klawiszy podpiętej pod właściwość „Miscellaneous > Hotkey” zawsze wywołuje akcję przypisaną do eventu „Click left mouse button”.

![Obraz zawierający tekst, oprogramowanie, Ikona komputerowa, Oprogramowanie multimedialne

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/UIUX_hotkey/UIUX_hotkey_2.png)

## UI/UX – ścieżki ekranów i obiektów

#path #ekran #screen #./ #../ #/ #~

W niektórych przypadkach odwołanie do ekranów bądź obiektów jest możliwe jedynie za pomocą ścieżki. Pomocna w budowaniu ścieżek może być oczywiście dokumentacja. Przy testowaniu różnych scenariuszy pracę ułatwi projekt przykładowy.

![Obraz zawierający zrzut ekranu, tekst, oprogramowanie, Oprogramowanie multimedialne

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/UIUX_ścieżki_ekranów_i_obiektów/UIUX_ścieżki_ekranów_i_obiektów_3.png)

## UI/UX – własne klawiatury (z limitami)

#klawiatura #keyboard #limit #min #max

Jeżeli systemowa klawiatura ekranowa nie spełnia oczekiwań aplikacji, możliwe jest zastosowanie własnych klawiatur w formie faceplate wyświetlanych w ramach okienek pop-up. Przykładowy projekt zawiera trzy warianty klawiatur – dwie numeryczne do liczb typu Int bądź Real oraz klawiaturę tekstową. Są to zmodyfikowane klawiatury pochodzące z biblioteki WinCC Unified Toolbox. Oczywiście, jako że są to obiekty faceplate, wygląd można dowolnie modyfikować.

![Obraz zawierający elektronika, zrzut ekranu, tekst, Sprzęt biurowy

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/UIUX_własne_klawiatury_z_limitami/UIUX_własne_klawiatury_z_limitami_4.png)

Okienko pop-up z klawiaturą można dowolnie pozycjonować (np. ustawiać w pewnej relacji do modyfikowanego obiektu). Jest to przydatne dla wizualizacji w starszych odsłonach, gdzie domyślna klawiatura ekranowa może działać jedynie w trybie zadokowania na dole ekranu. Począwszy od TIA V21 Update 1, klawiatura ekranowa może działać także w trybie dynamicznego pozycjonowania, gdzie automatycznie ustawia się tak, aby zapewnić jak największą wygodę wpisywania wartości do pola. Uwaga – dostępna funkcjonalność różni się zależnie od rozmiaru ekranu urządzenia (dla 4” tylko klawiatura statyczna, dla 7” wymagane ręczne wyłączenie trybu dokowania).

Aby zastosować funkcjonalność w swoim projekcie, najlepiej skopiować obiekt IOField odpowiedniego rodzaju i przepiąć tag w „Properties > General > Process value” oraz w skrypcie przypiętym pod „Events > Click left mouse button”, w linijce 3. Jeżeli tag ma mieć ustawione limity i mają być one widoczne na klawiaturze, limity powinny być skonfigurowane jako zmienne. Zmienne odpowiedzialne za ograniczenie zakresu tagu trzeba wskazać w wyżej wspomnianym skrypcie, linijki 4-5.

![Grafika 5](images/UIUX_własne_klawiatury_z_limitami/UIUX_własne_klawiatury_z_limitami_5.png)

Kwestia wyświetlania limitów zmiennych przy wpisywaniu wartości do obiektów IOField została zaimplementowana w TIA V21 Update 1. Po aktywacji właściwości „Miscellaneous > Show Input Hint” widoczna będzie podpowiedź z wartością minimalną i maksymalną.

![Grafika 6](images/UIUX_własne_klawiatury_z_limitami/UIUX_własne_klawiatury_z_limitami_6.png)

Widoczność podpowiedzi można włączyć / wyłączyć globalnie, w „Runtime settings > General > Screen > Central input hint”. Lokalne ustawienia przy konkretnych elementach są wtedy ignorowane.

![Grafika 7](images/UIUX_własne_klawiatury_z_limitami/UIUX_własne_klawiatury_z_limitami_7.png)

## UI/UX – zoom

#zoom #zoom-allow #gesty

Domyślnie dla wizualizacji aktywna jest opcja przybliżania i oddalania głównego screen window. Na panelach operatorskich może być to problematyczne – wizualizację można oddalić, a po ponownym przybliżeniu zwykle na stałe widoczne będą scrollbary.

Zoom można wyłączyć na dwa sposoby. Rekomendowane podejście to wypełnienie sekcji „Screen management > Main screen windows” zgodnie z poniższym zrzutem ekranu:

![Grafika 8](images/UIUX_zoom/UIUX_zoom_8.png)

Alternatywne rozwiązanie to przypięcie krótkiego skryptu pod „Event > Loaded” ekranu startowego (było to jedyne działające podejście dla paneli ze starszym oprogramowaniem; zalecana aktualizacja OS do min. V20.0.0.x):

![Grafika 9](images/UIUX_zoom/UIUX_zoom_9.png)

Rzecz jasna zoom nadal pozostaje aktywny dla innych obiektów screen window.

## UI/UX – czcionki dla różnych języków

#text #font #język #language

Konfiguracja różnych czcionek dla różnych języków możliwa jest po odznaczeniu opcji  „Use same font for all languages” w „Options > Settings > Visualization”. W edytorze ekranów język edycji projektu zmieniany jest w zakładce „Tasks” po prawej stronie.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, numer

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/UIUX_czcionki_dla_różnych_języków/UIUX_czcionki_dla_różnych_języków_10.png)

Począwszy od TIA V20 Update 2 każdemu językowi można nadać domyślny (zastępczy) font („Fallback font” w „Runtime settings > Language & font”) – konieczna jest aktywacja opcji „Enable language-compatible font families”. W poprzednich wersjach domyślna czcionka dla każdego z języków to Siemens Sans, bez możliwości modyfikacji.

![Grafika 11](images/UIUX_czcionki_dla_różnych_języków/UIUX_czcionki_dla_różnych_języków_11.png)

## UI/UX – style i palety kolorów

#style #kolor #color #palette #paleta #corporate

Możliwość definicji własnego stylu wizualizacji pojawiła się w WinCC Unified wraz z wersją 19. Do tworzenia stylów służy darmowy program WinCC Unified Corporate Designer. Plik stylu należy umieścić w odpowiedniej lokalizacji w projekcie, a następnie wybrać go w „Runtime settings > General > Screen”.

![Grafika 12](images/UIUX_style_i_palety_kolorów/UIUX_style_i_palety_kolorów_12.png)

Styl wizualizacji można przełączać w trakcie działania aplikacji – przykładowo, wystarczy podpiąć pod przycisk w „Event > Click left mouse button” jedną z linijek skryptu jak poniżej. W ten sposób można skonfigurować np. tryb nocny/ciemny wizualizacji.

![Grafika 13](images/UIUX_style_i_palety_kolorów/UIUX_style_i_palety_kolorów_13.png)

Style pozwalają na utworzenie kilku wariantów obiektu. Przykładowo, można utworzyć różne rodzaje przycisków.

![Grafika 14](images/UIUX_style_i_palety_kolorów/UIUX_style_i_palety_kolorów_14.png)

Własne palety kolorów to funkcjonalność wprowadzona w V20. Konfiguracja zachodzi w bibliotece TIA Portal. Póki co (V21.0.2.0) nie jest możliwe przełączanie palety w trakcie działania aplikacji. Jest to właściwość jedynie do odczytu.

![Grafika 15](images/UIUX_style_i_palety_kolorów/UIUX_style_i_palety_kolorów_15.png)

Razem z premierą WinCC Unified Corporate Designer V21 udostępniono nowy styl bazowy – „Compatibility Style”, który ma za zadanie pomóc wiernie odwzorować wygląd wizualizacji do jakiego przywykli użytkownicy paneli starszej generacji.

![Grafika 16](images/UIUX_style_i_palety_kolorów/UIUX_style_i_palety_kolorów_16.png)

## Obiekty – kontrolka 3D

#cwc #3d #custom #control #kontrolki

Jak dotąd w WinCC Unified brak kontrolki systemowej pozwalającej wyświetlać i wchodzić w interakcję z trójwymiarowymi modelami obiektów (stan dla V21.0.2.0). Nie mniej, funkcjonalność można wprowadzić do wizualizacji poprzez stworzenie własnej kontrolki (Custom Web Control) lub skorzystanie z gotowych rozwiązań znalezionych w Internecie (przykład 1, przykład 2).

## UI/UX – własne (dynamiczne) grafiki SVG

#custom #svg #inkscape #graphics #grafiki #vector #wektorowe

W Toolboxie WinCC Unified dostępny jest bogaty zbiór grafik wektorowych. W sekcji „Graphics” znajdują się te statyczne (nieruchome). Grafiki z dynamicznymi atrybutami (ruchome, parametryzowalne) można znaleźć w sekcji „Dynamic widgets”.

Korzystając z odpowiedniego programu (np. Inkscape) można tworzyć własne grafiki – od podstaw lub poprzez modyfikację dostępnych zasobów. Poniżej widoczne są ścieżki, pod którymi można odszukać SVG z Toolboxa.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, numer

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/UIUX_własne_dynamiczne_grafiki_SVG/UIUX_własne_dynamiczne_grafiki_SVG_17.png)

„Programowanie” dynamicznych grafik SVG to zagadnienie zaawansowane wymagające biegłości w języku XML. Aby ułatwić ten proces, Siemens przygotował materiały pomocnicze i rozszerzenie dla Visual Studio Code.

## Obiekty – kontrolka PLC Trace

#cwc #custom #control #kontrolki #trace

Funkcjonalność podglądu wykresów Trace generowanych przez PLC można wdrożyć w WinCC Unified dzięki własnej kontrolce. Obiekt realizujący tego typu funkcjonalność jest używany w ramach przykładowego projektu automatyzacji wtryskarek – IMM 1500.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, numer

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Obiekty_kontrolka_PLC_Trace/Obiekty_kontrolka_PLC_Trace_18.png)

## UI/UX – wyświetlanie plików pdf

#browser #pdf #file

Wyświetlanie plików .pdf zapisanych lokalnie na urządzeniu umożliwia standardowa kontrolka przeglądarki (Web control). Zagadnienie omówiono w dokumentacji. Uwaga na wersję OS panelu – w starszych odsłonach (<V18) mogło to nie działać.

## UI/UX – wyświetlanie grafik z dysku

#browser #png #jpg #graphic #grafika #photo #file

Grafikę można zapisać w formacie pdf i postępować jak w FAQ nr 10. Drugim sposobem jest osadzenie obrazu w statycznym dokumencie .html zapisanym na dysku panelu i wyświetlenie go w kontrolce przeglądarki.

## UI/UX – uruchamianie panelu z językiem, który był wybrany jako ostatni

#text #font #język #language

Dla Unified Basic Panel funkcjonalność nie jest dostępna w standardzie. Domyślnie panel za każdym razem uruchamia się z językiem, który ma przypisany najwyższy priorytet w „Runtime settings > Language & font”. Aby ostatnio wybrany język był podtrzymywany przy wyłączeniu panelu, należy zapisywać jego ID do pliku w pamięci wewnętrznej panelu.

Przyciski zmiany języka, w sekcji „Events > Click left mouse button”, powinny mieć podpięty krótki skrypt realizujący zmianę języka oraz zapis LCID języka do pliku. Za zapis odpowiada funkcja „SaveNewLanguage()”, której składnia zadeklarowana jest w „Global definitions” (przycisk ponad edytorem JS).

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/UIUX_uruchamianie_panelu_z_językiem_który_był_wybrany_jako_ostatni/UIUX_uruchamianie_panelu_z_językiem_który_był_wybrany_jako_ostatni_19.png)

Za odczyt ostatnio aktywnego języka po uruchomieniu panelu odpowiada skrypt podpięty pod „Event > Loaded” ekranu startowego wizualizacji. Skrypt wykonywany jest jednokrotnie, tylko po starcie HMI, z małą zwłoką o 50 ms.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Strona internetowa

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/UIUX_uruchamianie_panelu_z_językiem_który_był_wybrany_jako_ostatni/UIUX_uruchamianie_panelu_z_językiem_który_był_wybrany_jako_ostatni_20.png)

Zestawienie skryptów:

![Grafika 21](images/UIUX_uruchamianie_panelu_z_językiem_który_był_wybrany_jako_ostatni/UIUX_uruchamianie_panelu_z_językiem_który_był_wybrany_jako_ostatni_21.png)

## UI/UX – wywołanie własnej funkcji na przycisk kontrolki

#command #fire #control #button

W przypadku kilku kontrolek (alarmy, trendy, przeglądarka, receptury, diagnostyka) dostępny jest specjalny event „Command fired”, który wywoływany jest każdorazowo po naciśnięciu dowolnego przycisku z paska funkcyjnego kontrolki.

![Grafika 22](images/UIUX_wywołanie_własnej_funkcji_na_przycisk_kontrolki/UIUX_wywołanie_własnej_funkcji_na_przycisk_kontrolki_22.png)

Jednym z argumentów prototypu funkcji jest „commandId”, czyli zmienna, która niesie informację o ID (numerze) naciśniętego przycisku. Lista ID jest słabo udokumentowana, zatem najlepiej zrobić prosty test, który pozwala poznać numer przypisany do konkretnego przycisku – wywołać w „Events > Command fired” krótki skrypt:

![Grafika 23](images/UIUX_wywołanie_własnej_funkcji_na_przycisk_kontrolki/UIUX_wywołanie_własnej_funkcji_na_przycisk_kontrolki_23.png)

Zmienną wyjściową CommandID można wyświetlić w IOField. Naciskaniu przycisków kontrolki będzie towarzyszyć zmiana jej wartości. Na przykład eksport receptur ma ID = 37.

![Obraz zawierający zrzut ekranu, tekst, oprogramowanie

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/UIUX_wywołanie_własnej_funkcji_na_przycisk_kontrolki/UIUX_wywołanie_własnej_funkcji_na_przycisk_kontrolki_24.png)

Gdy już znamy ID przycisku, do którego chcemy dodać jakąś funkcjonalność, wystarczy zastąpić skrypt w „Events > Command fired” przez warunek logiczny.

![Grafika 25](images/UIUX_wywołanie_własnej_funkcji_na_przycisk_kontrolki/UIUX_wywołanie_własnej_funkcji_na_przycisk_kontrolki_25.png)

## UI/IX – data i godzina z uwzględnieniem strefy czasowej

#time #czas #date #timezone #strefa

Do właściwości „General > Process value” obiektu IOField, który ma służyć do wyświetlania daty i czasu, należy podpiąć poniższy skrypt z wywołaniem co sekundę. Proponowany „Output format” to {D, @dd.MM.yyyy HH:mm}

![Grafika 26](images/UIIX_data_i_godzina_z_uwzględnieniem_strefy_czasowej/UIIX_data_i_godzina_z_uwzględnieniem_strefy_czasowej_26.png)

## ES – edytor skryptów

#js #skrypt #script #vs #debugger

Edytor JavaScript zintegrowany z TIA Portal ma kilka przydatnych funkcjonalności:

- kolorowanie tekstu,

- podstawowe sprawdzanie poprawności składni,

- szablony (prawy przycisk myszy),

- obszar definicji zmiennych globalnych w zakresie dynamizacji i eventów,

- podręczną dokumentację w ramach tooltip (najechanie na odpowiedni fragment kodu),

- uzupełnianie kodu (skrót <Ctrl + Space>),

- wskazówki dla kodu (kropka po obiekcie),

- selektor obiektów (skrót <Ctrl + J> przy uzupełnianiu funkcji wymagającej obiektu),

- kreator wstawiania funkcji systemowych (od V21).

![Obraz zawierający tekst, oprogramowanie, Ikona komputerowa, Strona internetowa

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/ES_edytor_skryptów/ES_edytor_skryptów_27.png)

![Grafika 28](images/ES_edytor_skryptów/ES_edytor_skryptów_28.png)

Alternatywą dla wbudowanego edytora jest zastosowanie Visual Studio Code. Dodatek JS Connector pozwala na edytowanie modułów globalnych i skryptów bibliotecznych za pomocą VS Code. Rozszerzenie RT Debugger umożliwia wprowadzanie i testowanie zmian w skryptach z poziomu VS Code, podczas działania aplikacji, bez potrzeby wgrywania projektu z TIA Portal.

## ES – aktywacja pakietów opcjonalnych w TIA

#prodiag #reporting #raporty #audit #gmp

Czasami niektóre funkcjonalności nie działają zgodnie z oczekiwaniami, ponieważ nie zostały aktywowane w „Runtime settings” (na przykład ProDiag, system raportowania). Informacja o niepełnej konfiguracji może nie być zauważona przez kompilator lub odnotowana w formie alarmu systemowego.

![Obraz zawierający tekst, zrzut ekranu, Czcionka, numer

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/ES_aktywacja_pakietów_opcjonalnych_w_TIA/ES_aktywacja_pakietów_opcjonalnych_w_TIA_29.png)

## ES – eventy dla zmiennych i alarmów

#events #scheduled #task #@ #@username #username

W WinCC Comfort/Advanced, bezpośrednio przy tagach bądź alarmach możliwa była konfiguracja akcji w zakładce „Events”. W Unified akcje wywoływane na zmianę wartości zmiennej bądź zmianę stanu alarmu można skonfigurować w sekcji „Scheduled tasks”.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/ES_eventy_dla_zmiennych_i_alarmów/ES_eventy_dla_zmiennych_i_alarmów_30.png)

Od wersji 21 Update 1 możliwe jest zaprogramowanie reakcji na przekroczenie minimalnej i maksymalnej wartości zmiennej oraz przejście alarmu w konkretny stan:

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, numer

Zawartość wygenerowana przez AI może być niepoprawna.](images/ES_eventy_dla_zmiennych_i_alarmów/ES_eventy_dla_zmiennych_i_alarmów_31.png)

Istnieją pewien wyjątek – scheduler nie reaguje prawidłowo na zmianę wartości zmiennych systemowych (np. „@Username”). Obejściem tego problemu jest podpięcie skryptu pod dowolną (nieużywaną) właściwość dowolnego (opcjonalnie niewidocznego) obiektu na ekranie, który jest stale widoczny (np. nagłówek, layout). Taki skrypt wywoływany jest każdorazowo po zmianie wartości wskazanej zmiennej systemowej i zakładając, że nie ingerujemy w argument „value”, nie modyfikuje on obiektu, do którego jest zakotwiczony.

![Grafika 32](images/ES_eventy_dla_zmiennych_i_alarmów/ES_eventy_dla_zmiennych_i_alarmów_32.png)

## Użytkownicy – role systemowe

#role #security #użytkownicy #administracja #rbac

Przypisując użytkownikom role systemowe z grupy HMI, najlepiej ograniczyć się do wyboru tylko jednej z nich. W starszych wersjach WinCC Unified użytkownik, któremu przypisano kilka ról z grupy HMI, otrzymywał jedynie prawa odpowiadające roli o najniższych uprawnieniach. Obecnie (V21) jest to trochę mniej problematyczne, ale jeżeli mamy jakieś kłopoty z uprawnieniami, warto zwrócić na to uwagę.

Poniżej przykład – użytkownik „User” mimo przypisania wszystkich ról tak naprawdę identyfikuje się jako „HMI Monitor Client”. Świadczy o tym wyświetlanie wizualizacji w pomarańczowej ramce oraz brak dostępu do niektórych funkcji (tu – brak możliwości potwierdzenia alarmu).

![Obraz zawierający zrzut ekranu, tekst, Czcionka

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Użytkownicy_role_systemowe/Użytkownicy_role_systemowe_33.png)

## Użytkownicy – UMC

#security #użytkownicy #administracja #umc #centralized #grupy #groups #ad

## Komunikacja – REST API

#rest #cwc #control #api

Wiele systemów informatycznych udostępnia zasoby w ramach interfejsu REST API. Standardowo system Unified nie posiada mechanizmu wysyłania zapytań HTTP i przetwarzania odpowiedzi – we wbudowanym JS brak m.in. funkcji „XMLHttpRequest()” i metody „fetch()”. Nie mniej, w przypadku Unified PC RT lub panelu Unified Comfort tego typu komunikacja może być realizowana z zastosowaniem CWC (własnej kontrolki). Podstawą tworzenia własnej funkcjonalności może być projekt przykładowy. Poniżej znajduje się widok głównego ekranu wraz z opisem najważniejszych elementów. Krótki film demonstruje sposób działania aplikacji.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, wyświetlacz

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_REST_API/Komunikacja_REST_API_34.png)

- Listy rozwijalne 1.1 i 1.2 służą do definicji adresu URL, na który będzie wysłane zapytanie HTTP.

- Adres jest zwracany przez pole 1.3.

- Do przycisku 2.1 podpięty jest skrypt wysyłający zapytanie z użyciem metody GET.

- Kod statusowy informujący o stanie zapytania zwracany jest w polu 2.2.

- Odpowiedź serwera (po obróbce) trafia do obiektów w obszarze 2.3.

- Odpowiedź serwera w formie surowej widoczna jest w kontrolce przeglądarki 3.

- Obiekt 4 to CWC będące centrum aplikacji. W trakcie działania wizualizacji element jest niewidoczny, jednak jego obecność jest kluczowa, ponieważ z jego metod korzysta przycisk 2.1.

- Klikając w prawym dolnym rogu (5) można zmienić ekran na demonstrację połączenia z MS SQL.

## Komunikacja – połączenie z bazą MS SQL

#sql #odbc #driver #connection #ms #db #baza #log

Zarówno panele operatorskie Unified Comfort jak i Unified PC RT obsługują drivery ODBC, które służą do komunikacji z bazami danych MS SQL. Dostęp do zewnętrznej bazy danych realizowany jest w ramach skryptu JS. Połączenie nawiązywane jest za pomocą tzw. connection stringa, który należy wypełnić parametrami klienta i serwera. Dwie rzeczy, na które należy zwrócić szczególną uwagę, to wersja drivera (jest ściśle powiązana z wersją systemu operacyjnego panelu lub programu Unified PC) oraz kwestie bezpieczeństwa połączenia (parametry „trusted_connection” i „TrustServerCertificate”). Zalecana jest analiza zagadnienia w oparciu o dokumentację bądź wspomaganie się przykładem aplikacyjnym.

Punktem wyjścia przy tworzeniu własnej aplikacji może być projekt przykładowy uzupełniony o film demonstracyjny. Poniżej znajduje się widok głównego ekranu wraz z opisem najważniejszych elementów.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, wyświetlacz

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_połączenie_z_bazą_MS_SQL/Komunikacja_połączenie_z_bazą_MS_SQL_35.png)

- Sekcję 1 należy wypełnić danymi serwera MS SQL. Parametry te zostaną wpisane w connection string.

- Przykład demonstruje zastosowanie dwóch kwerend. Pierwsza to tworzenie tabeli – w polach 2.1 należy wpisać nazwy kolumn oraz typy zmiennych. Skrypt realizujący zadanie podpięto pod przycisk 2.2.

- Druga kwerenda służy do wyświetlania danych z istniejącej tabeli. W polach 3.1 należy podać nazwę tabeli oraz interesujące nas kolumny. Po uruchomieniu zapytania (3.2) w polu 3.3 widnieje przetworzony rezultat zapytania.

## Komunikacja – zmiana parametrów połączenia z PLC

#connection #ip #address #adres #change

Funkcja systemowa „ChangeConnection()” służy do modyfikacji parametrów połączenia panelu Unified ze sterownikiem SIMATIC S7-1200/1200G2/1500 bez ingerencji w projekt HMI. Najczęściej zmiana dotyczy adresu IP sterownika i jej celem jest przełączanie między partnerami komunikacyjnymi.

![Grafika 36](images/Komunikacja_zmiana_parametrów_połączenia_z_PLC/Komunikacja_zmiana_parametrów_połączenia_z_PLC_36.png)

Połączenia HMI z wyżej wymienionymi PLC począwszy od wersji firmware’ów odpowiadających TIA Portal V17 są zabezpieczone certyfikatami cyfrowymi. Zakładając, że używamy panelu Unified, nie da się tych zabezpieczeń dezaktywować. Ważne jest zatem odpowiednie skonfigurowanie relacji zaufania – w tym przypadku jednostronnej, ponieważ to panel musi uznawać certyfikat PLC za zaufany.

W sytuacji domyślnej, gdzie połączenie jest zintegrowane (PLC i HMI znajdują się w tym samym projekcie, a powiązanie tworzone jest w edytorze "Devices & networks") oraz użytkownik korzysta z automatycznie generowanych certyfikatów self-signed, relacja zaufania jest zapewniona bez dodatkowej konfiguracji.

Zmiana adresu IP w ustawieniach połączenia z poziomu aplikacji HMI wiąże się z koniecznością ręcznego potwierdzenia certyfikatu nowego PLC bądź jego wcześniejszego importu.

Dla platformy Unified PC RT, po wywołaniu funkcji „ChangeConnection()”, certyfikat nowego partnera powinien być widoczny w SIMATIC Runtime Manager:

![Obraz zawierający tekst, zrzut ekranu, numer, oprogramowanie

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_zmiana_parametrów_połączenia_z_PLC/Komunikacja_zmiana_parametrów_połączenia_z_PLC_37.png)

Certyfikaty PLC niekonfigurowanych w projekcie można zaimportować do SIMATIC Runtime Manager z wyprzedzeniem, a następnie uznać za zaufane jeszcze przed zmianą parametrów połączenia:

![Obraz zawierający tekst, zrzut ekranu, numer, oprogramowanie

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_zmiana_parametrów_połączenia_z_PLC/Komunikacja_zmiana_parametrów_połączenia_z_PLC_38.png)

W przypadku panelu operatorskiego Unified, import certyfikatu nie jest możliwy (format nieakceptowany przez menedżer certyfikatów. Konieczne jest ręczne potwierdzenie:

![Grafika 39](images/Komunikacja_zmiana_parametrów_połączenia_z_PLC/Komunikacja_zmiana_parametrów_połączenia_z_PLC_39.png)

Dla obu rodzajów urządzeń alternatywne podejście zakłada dezaktywowanie bezwarunkowego zabezpieczenia komunikacji po stronie PLC („Protection & security > Connection mechanisms > Only allow secure PG/PC and HMI communication”) i utworzenie połączenia niezintegrowanego (ręcznie, w edytorze „Connections” urządzenia HMI), do którego będzie się odwoływać funkcja „ChangeConnection()”.

## Komunikacja – dostępne drivery i tzw. CSP

#communication #komunikacja #driver #channel #csp

Najbardziej przystępną informację na temat dostępnych driverów komunikacyjnych znajdziemy w sekcji „Connections”. Niektóre kanały dają możliwość wyboru typu/modelu CPU.

![Obraz zawierający tekst, numer, Czcionka, oprogramowanie

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_dostępne_drivery_i_tzw_CSP/Komunikacja_dostępne_drivery_i_tzw_CSP_40.png)

Ogólne informacje można znaleźć w dokumentacji WinCC Unified Engineering. Niestety szczegóły na temat driverów (np. wspierane linie PLC) znajdują się w osobnych poradnikach (przykład dla A-B).

Wszystkie kanały komunikacyjne są dostępne dla standardowej instalacji WinCC Unified począwszy od wersji 17. Dla niektórych kanałów, w V16, konieczna była instalacja dodatkowych Communication Support Packages (CSP).

W TIA Portal V21 wprowadzono nowe kanały komunikacyjne: SIMATIC S7-200 i SIMATIC S7-200 Smart. Dodatkowo, rozszerzono funkcjonalność kanału Standard Modbus RTU o możliwość utrzymywania 4 równoległych połączeń z urządzeniami Modbus RTU slave.

## Komunikacja – cykl akwizycji danych

#acquisition #cycle #cykl

Odświeżanie wartości zmiennych pochodzących z PLC po stronie HMI może zachodzić:

- cyklicznie (jeśli zmienna jest zastosowana na aktywnym ekranie bądź archiwizowana), gdy "Acquisition mode = Cyclic in operation", zgodnie z częstotliwością zdefiniowaną w polu "Acquisition cycle";

- na żądanie, gdy "Acquisition mode = On demand".

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_cykl_akwizycji_danych/Komunikacja_cykl_akwizycji_danych_41.png)

W przypadku wybrania „Acquisition mode = On demand", należy zdefiniować unikatowe ID zmiennej w polu „Update ID”. Aktualizacja wartości zmiennej zachodzi w wyniku wywołania funkcji systemowej „UpdateTag()”, gdzie jako argument należy podać wspomniane wcześniej ID zmiennej.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_cykl_akwizycji_danych/Komunikacja_cykl_akwizycji_danych_42.png)

Przy aktualizacji cyklicznej domyślny interwał to 1 sekunda. Dla niektórych aplikacji (np. sterowanie napędami, procesy szybkozmienne, monitorowanie bitów zegarowych, detekcja heartbitu, zmienne czasowe) konieczne może być zwiększenie częstotliwości odczytu do 500 / 200 / 100 ms. Z drugiej strony, cykl można oczywiście wydłużyć.

## Komunikacja – dostęp do witryny bez zabezpieczeń (http)

#http #https #browser #certificate #certyfikat #iis #url

Standardowo kontrolka przeglądarki internetowej w WinCC Unified służy do wyświetlania witryn zabezpieczonych, czyli korzystających z protokołu https. W przypadku paneli operatorskich, aby dostać się do witryny niezabezpieczonej (http), należy przekazać URL za pomocą zmiennej typu WString. Inaczej sprawa wygląda dla PC Runtime – tutaj taki zabieg nie jest możliwy – każdorazowo następuje automatyczna modyfikacja URL do wersji z https. Aby osiągnąć cel, konieczne jest wprowadzenie pewnych modyfikacji w ustawieniach IIS. Przez procedurę poprowadzi film instruktażowy.

Niestety, często zdarza się, że odpowiedź zwracana przez witrynę jest skompresowana, w wyniku czego wyświetlany jest błąd jak niżej:

![Obraz zawierający tekst, zrzut ekranu, Czcionka, numer

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_dostęp_do_witryny_bez_zabezpieczeń_http/Komunikacja_dostęp_do_witryny_bez_zabezpieczeń_http_43.png)

Jeżeli nie ma możliwości wyłączenia kompresji odpowiedzi serwera, konieczne jest dodanie po stronie klienta kolejnych reguł w module URL Rewrite (które informują, że klient nie akceptuje kompresji). Przykładów konfiguracji reguł można poszukiwać m.in. na stronie internetowej Microsoftu – w kilku przypadkach osiągnięto sukces dzięki podążaniu według tego poradnika.

## Komunikacja – dostęp zdalny Sm@rtServer

#smart #sm@rt #server #vnc #remote #zdaln

Sm@rtServer to sposób zdalnego dostępu synchronicznego na zasadzie VNC (wspólna sesja), przez aplikację Sm@rtClient (na PC, urządzenia mobilne Android/iOS oraz od V21 również na panelu Unified Comfort). Brak kontrolki ekranowej (znanej ze starszych systemów), która pozwalałaby na wzajemne łączenie się między urządzeniami.

Pozwala na korzystanie z wizualizacji oraz panelu sterowania urządzenia HMI. Zależnie od uprawnień, możliwy jest tylko podgląd lub sterowanie. Nie jest wymagana licencja. Dostępny jedynie dla paneli Unified Comfort.

Sm@rtServer można aktywować bezpośrednio na urządzeniu lub skonfigurować w TIA Portal, w „Runtime settings > Remote Access > Smart Server”. Ustawienia wprowadzone na HMI, w „Network and Internet > Remote Connection” obowiązują natychmiast, bez potrzeby resetu urządzenia.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Komunikacja_dostęp_zdalny_SmrtServer/Komunikacja_dostęp_zdalny_SmrtServer_44.png)

W przypadku modyfikacji ustawień w TIA Portal, konieczne jest oczywiście wgranie projektu do HMI.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, wyświetlacz

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Komunikacja_dostęp_zdalny_SmrtServer/Komunikacja_dostęp_zdalny_SmrtServer_45.png)

Aplikację kliencką dla PC można pobrać z serwisu SiePortal bądź uzyskać przy okazji instalacji innych pakietów związanych z WinCC.

![Obraz zawierający tekst, zrzut ekranu, Czcionka, oprogramowanie

Zawartość wygenerowana przez AI może być niepoprawna.](images/Komunikacja_dostęp_zdalny_SmrtServer/Komunikacja_dostęp_zdalny_SmrtServer_46.png)

Aplikacje dla urządzeń mobilnych dystrybuowane są za pośrednictwem Google Play (Android) lub App Store (iOS). Poniżej przykład konfiguracji połączenia z panelem z aplikacji na systemie iOS:

![Grafika 47](images/Komunikacja_dostęp_zdalny_SmrtServer/Komunikacja_dostęp_zdalny_SmrtServer_47.png)

Rezultat jest następujący:

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Komunikacja_dostęp_zdalny_SmrtServer/Komunikacja_dostęp_zdalny_SmrtServer_48.png)

Program Sm@rtClient preinstalowany jest na panelach Unified Comfort z systemem operacyjnym w wersji >= 21. Oferuje odświeżony interfejs i zapewnia kilka przydatnych funkcjonalności jak zapamiętywanie adresów serwerów i skojarzonych haseł. Aplikację można uruchomić ręcznie, z panelu sterowania, ale także w ramach wizualizacji. W tym celu należy użyć funkcji systemowej „StartProgram()” z odpowiednim argumentem. Obowiązują ograniczenia odnośnie do urządzenia pełniącego rolę serwera – lista wspieranych typów i wersji znajduje się w poradniku dla paneli Unified Comfort.

![Grafika 49](images/Komunikacja_dostęp_zdalny_SmrtServer/Komunikacja_dostęp_zdalny_SmrtServer_49.png)

## Komunikacja – dostęp Sm@rtServer z UXP do HMI poprzedniej generacji

#smart #sm@rt #server #vnc #remote #zdalny

???

## Komunikacja – dostęp zdalny Web Client

#webclient #web #client #remote #zdalny #operate #monitor

Web Client to sposób zdalnego dostępu asynchronicznego do Runtime Unified przez przeglądarkę internetową (odrębna sesja). Pozwala na niezależne korzystanie z wizualizacji, z prawem podglądu (Monitor) lub sterowania (Operate), według przyznanych użytkownikowi uprawnień.

Panele operatorskie z serii Unified Basic umożliwiają połączenie jednego klienta typu Operate, bez opcji rozszerzenia za pomocą dodatkowej licencji. Panele Unified Comfort oraz Unified PC RT dają w standardzie, bez dodatkowej licencji, możliwość dostępu dla jednego klienta typu Monitor i jednego klienta typu Operate. W przypadku UCP można rozszerzyć tę liczbę do maksymalnie 3 klientów (dowolnego typu), a dla PC RT – ograniczeniem jest w zasadzie tylko wydajność stacji, gdzie bezpiecznie przyjąć max. ok. 100 klientów (powyżej 5 sesji wymagany jest system operacyjny klasy Windows Server).

Dla klienta zdalnego można utworzyć odrębne ekrany o dopasowanej rozdzielczości i proporcjach, otwierane na podstawie rozpoznania zalogowanego użytkownika lub urządzenia – w oparciu o własne mechanizmy (np. skrypty) lub opcję My WinCC Unified (tylko dla Unified PC RT).

Dostęp zdalny może być aktywowany w każdym przypadku w TIA Portal („Runtime settings > Remote Access > Web client”), a dla paneli również bezpośrednio na urządzeniu.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Strona internetowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Komunikacja_dostęp_zdalny_Web_Client/Komunikacja_dostęp_zdalny_Web_Client_50.png)

Aby dostać się do wizualizacji na serwerze, wystarczy otworzyć w przeglądarce internetowej (koniecznie HTML5) dowolnego urządzenia (w tej samej sieci) witrynę o adresie „https://<adres_ip_serwera>”. Jeżeli zadbaliśmy o utworzenie odpowiednich certyfikatów, komunikacja będzie zabezpieczona i wyświetli się menu pozwalające na dostęp (po zalogowaniu) do ekranów procesowych (kafelka „WinCC Unified RT”), administracji użytkownikami („User Management”) lub komponentem Industrial Edge („SIMATIC Edge Management”, tylko UCP). Jeśli natomiast klient zdalny nie uznaje certyfikatu serwera za zaufany, pojawi się stosowny komunikat, gdzie należy określić, czy akceptujemy ryzyko. Pobranie i instalacja certyfikatu („Certificate Authority”) zapobiegnie ponownemu wyświetlaniu komunikatu.

![Obraz zawierający tekst, zrzut ekranu, woda, oprogramowanie

Zawartość wygenerowana przez AI może być niepoprawna.](images/Komunikacja_dostęp_zdalny_Web_Client/Komunikacja_dostęp_zdalny_Web_Client_51.png)

## Komunikacja – zmienne czasowe

#time #ltime #czas #date

???

## Diagnostyka – RTIL Trace Viewer

#diagnostyka #logi #trace #rtil

RTIL Trace Viewer to narzędzie diagnostyczne na PC (instalowane wraz z TIA Portal i Unified PC Runtime). Pozwala na obserwację logów generowanych w toku działania symulacji, wizualizacji uruchomionej lokalnie oraz wizualizacji na urządzeniach w tej samej sieci (panele, PC). Wszystkie scenariusze omówiono w przykładzie aplikacyjnym. Najczęstsze zastosowania narzędzia to:

- uproszczona analiza wykonywania skryptów bądź funkcji systemowych (prosta w obsłudze alternatywa dla debuggera Chrome dla wizualizacji lokalnych);

- odczyt informacji systemowych (syslog) związanych m.in. z systemem operacyjnym, pamięcią urządzenia, podłączanymi urządzeniami zewnętrznymi;

- weryfikacja poprawności działania usług (np. Audit, UMC, OPC Server, połączenia z PLC).

Standardowa ścieżka, pod którą można znaleźć aplikację to „C:\Program Files\Siemens\Automation\WinCCUnified\bin”.

- ![Obraz zawierający tekst, Czcionka, numer, linia

Zawartość wygenerowana przez AI może być niepoprawna.](images/Diagnostyka_RTIL_Trace_Viewer/Diagnostyka_RTIL_Trace_Viewer_52.png)

Program „RTILtraceViewer.exe” umożliwia przeglądanie i analizę logów. Zwykle niezbędne okazuje się nałożenie odpowiedniego filtru oraz zatrzymanie odświeżania listy. Błędy (Error) sygnalizowane są kolorem pomarańczowym, zdarzenia wymagające uwagi (Warning) zakreślone są na żółto, a wszelkie informacje (Info) wyświetlane są na białym tle.

- ![Obraz zawierający tekst, zrzut ekranu, numer, Czcionka

Zawartość wygenerowana przez AI może być niepoprawna.](images/Diagnostyka_RTIL_Trace_Viewer/Diagnostyka_RTIL_Trace_Viewer_53.png)

Aplikacja „RTILtraceTool.exe” służy do nawiązywania połączenia z urządzeniem zdalnym. W tym celu na urządzeniu docelowym powinna być aktywowana opcja wysyłania danych diagnostycznych („trace forwarder”).

- ![Obraz zawierający tekst, zrzut ekranu, Czcionka

Zawartość wygenerowana przez AI może być niepoprawna.](images/Diagnostyka_RTIL_Trace_Viewer/Diagnostyka_RTIL_Trace_Viewer_54.png)

Istnieje również możliwość analizy w trybie offline zgromadzonych wcześniej logów („trace logging”). W przypadku wizualizacji komputerowych funkcjonalność aktywowana jest lokalnie, w oknie „RTILtraceViewer.exe”. Dla paneli operatorskich należy uruchomić opcję „Enable Trace logger” / „Enable Event logger” bezpośrednio na urządzeniu.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Strona internetowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Diagnostyka_RTIL_Trace_Viewer/Diagnostyka_RTIL_Trace_Viewer_55.png)

Począwszy od TIA Portal V21 Update 1, część diagnostyki można przeprowadzić nie opuszczając wizualizacji, z użyciem nowego trybu obiektu „System diagnostics control”. Po ustawieniu widoku kontrolki na „General > View type = Script diagnostics” oraz aktywacji odpowiedniego profilu diagnostyki (dla panelu w „Runtime settings”, a dla PC w SIMATIC Runtime Manager), w tabeli wyświetlane będą informacje o błędach w skryptach, ich czasie trwania i treść strumienia „Trace”.

![Grafika 56](images/Diagnostyka_RTIL_Trace_Viewer/Diagnostyka_RTIL_Trace_Viewer_56.png)

## Archiwizacja – eksport do pliku csv

#export #eksport #csv #log #logging #tags #alarms #tagi #alarmy

W systemie Unified archiwalne wartości zmiennych domyślnie zapisywane są w bazie danych SQLite, do plików o formacie .db3. W ramach wizualizacji odczyt informacji zawartych w plikach realizowany jest przez kontrolkę trendów. Poza WinCC Unified dostęp do danych w surowej formie jest możliwy przy użyciu specjalnych narzędzi (np. DB Browser for SQLite). Dane są przechowywane w schemacie relacyjnej bazy danych, zatem przedstawienie ich w formie czytelnej dla człowieka (na przykład w celu wykonania raportu) wymaga odpowiedniej obróbki.

Jak wiadomo, o wiele łatwiej pracuje się z danymi zapisanymi w pliku tekstowym, np .csv. Mechanizm bezpośredniego logowania wartości zmiennych do pliku .csv należy stworzyć ręcznie, za pomocą skryptu obsługującego pliki w pamięci panelu. Problematyczne staje się wtedy wyświetlenie danych na ekranie wizualizacji, ponieważ nie przetworzy ich kontrolka trendów – konieczne będzie ręczne zaimplementowanie takiej funkcjonalności (np. w postaci CWC na bazie chart.js).

Rozwiązaniem łączącym zalety obu podejść jest archiwizacja zmiennych w oparciu o mechanizmy systemowe i cykliczny bądź zdarzeniowy eksport fragmentu bazy danych do pliku w formacie .csv. Począwszy od TIA Portal V21 realizację tego zadania umożliwia funkcja systemowa „ExportTagLog()”. W poprzednich odsłonach wdrożenie funkcjonalności ułatwiał szablon kodu, który można znaleźć w ścieżce „Snippets > HMI Runtime > Tag Logging > Export tag log as CSV”:

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, wyświetlacz

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Archiwizacja_eksport_do_pliku_csv/Archiwizacja_eksport_do_pliku_csv_57.png)

Szablon trzeba, rzecz jasna, dostosować do wymagań aplikacji. Poniżej objaśnienie struktury skryptu oraz propozycje konfiguracji.

![Obraz zawierający tekst, elektronika, zrzut ekranu, Równolegle

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Archiwizacja_eksport_do_pliku_csv/Archiwizacja_eksport_do_pliku_csv_58.png)

Sekcja 1 zawiera definicję ścieżki zapisu pliku, jego nazwy i formatu. Struktura tego łańcucha znaków powinna odpowiadać zastosowanej platformie sprzętowej. Niezależnie od urządzenia, należy zadbać o to, żeby była to ścieżka istniejąca, dla której użytkownik uruchamiający wizualizację ma prawa zapisu plików. Dla Unified PC może to być np. podfolder lokalizacji archiwów wskazanej w Unified Configurator.

![Grafika 59](images/Archiwizacja_eksport_do_pliku_csv/Archiwizacja_eksport_do_pliku_csv_59.png)

W drugim bloku skryptu należy zdefiniować zakres czasowy eksportowanych danych. Domyślnie są to wartości statyczne. Można jednak zapewnić większą elastyczność korzystając ze zmiennych (wskazanie początkowego i końcowego stempla czasowego na ekranie, przez użytkownika) bądź definiując zakres jako np. ostatnia godzina, ostatni dzień itp. Poniżej przykład definicji zakresu czasu jako „ostatnie 24 godziny”.

![Grafika 60](images/Archiwizacja_eksport_do_pliku_csv/Archiwizacja_eksport_do_pliku_csv_60.png)

Sekcja 3 służy definicji nagłówka pliku tekstowego oraz separatora danych. W większości przypadków wystarczą wartości domyślne.

Blok 4 ma na celu realizację odczytu informacji na temat zmiennych z bazy danych i przepisanie ich do łańcucha znaków. W szablonie zaimplementowano mechanizm pobierania wartości i stempla czasowego tylko jednej zmiennej, o nazwie podanej w pierwszej linijce sekcji. Nazwę należy podać w formacie „<nazwa_taga>:<nazwa_logging_taga>” – najlepiej odczytać w edytorze HMI Tags. Struktura zmiennej przetwarzanej w pętli for powinna odpowiadać tej zadeklarowanej dla nagłówka w sekcji 3. Jeżeli raport powinien obejmować kilka zmiennych, konieczna będzie przebudowa tego fragmentu kodu.

W ostatnim, piątym akapicie skryptu wykonywana jest obsługa pliku tekstowego.

Dobierając zakres czasowy eksportu i liczbę zmiennych objętych raportem, należy mieć na uwadze fakt, że tworzenie pliku .csv wykonywane jest linijka po linijce. W związku z tym, przy archiwizacji z dużą częstotliwością, czas wykonywania skryptu może znacząco wzrastać, ostatecznie blokując wykonywanie innych akcji, a nawet prowadzić do tymczasowego zamrożenia wizualizacji.

Eksport bazy danych do pliku w formacie .csv możliwy jest również dla archiwum alarmów. W TIA Portal >= V21 służy do tego funkcja systemowa „ExportAlarmLog()”. Jeżeli dysponuje się starszą wersją, szablon kodu można znaleźć pod ścieżką „Snippets > HMI Runtime > Alarm Logging > Export alarm log as CSV”:

![Obraz zawierający tekst, elektronika, zrzut ekranu, oprogramowanie

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Archiwizacja_eksport_do_pliku_csv/Archiwizacja_eksport_do_pliku_csv_61.png)

Struktura skryptu jest bardzo podobna jak dla eksportu archiwum wartości zmiennych. Dodatkowe kwestie, na które należy zwrócić uwagę, to wybór języka, w jakim będą przedstawione dane (sekcja 1) oraz interesujących nas atrybutów alarmów, czyli nagłówków kolumn (sekcja 2). W przypadku alarmów zbiór atrybutów jest szeroki. W przykładowym skrypcie każdy z nich jest podany w formie „loggadAlarmState.<nazwa_atrybutu>”. Lista dostępnych opcji znajduje się w dokumentacji.

![Obraz zawierający tekst, zrzut ekranu, numer, oprogramowanie

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Archiwizacja_eksport_do_pliku_csv/Archiwizacja_eksport_do_pliku_csv_62.png)

## Archiwizacja – konfiguracja bazy danych

#sqlite #log #archiwa #segment

W przypadku Unified PC Runtime, niezależnie od docelowego sposobu archiwizacji wartości zmiennych i alarmów (SQLite lub MS SQL), przy przejściu przez WinCC Unified Configuration należy wskazać domyślną lokalizację, w której będą zapisywane bazy danych. Tutaj trafiają także dane zebrane w efekcie uruchomienia symulacji.

Jeżeli na komputerze zainstalowany jest pakiet dodatkowy Unified Database Storage, w tym miejscu podać należy również rozmiar pamięci RAM przydzielonej instancji MS SQL.

![Obraz zawierający tekst, elektronika, zrzut ekranu, oprogramowanie

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Archiwizacja_konfiguracja_bazy_danych/Archiwizacja_konfiguracja_bazy_danych_63.png)

Kolejne ustawienia systemu archiwizacji znajdziemy już w projekcie wizualizacji, w TIA Portal, w „Runtime settings > Storage system”. W tym miejscu zarządza się typem bazy danych oraz lokalizacją, do której trafiają zapisywane wartości zmiennych archiwalnych („tag logging”), alarmy („alarm logging”) oraz zmienne podtrzymywane („tag persistency”).

Jeżeli mamy do dyspozycji panel operatorski, dane są logowane zawsze w formacie SQLite, koniecznie na zewnętrzny nośnik pamięci (USB-X61 / X62 lub karta SD na dane).

Dla wizualizacji komputerowych, zależnie od zainstalowanego oprogramowania, można wybrać typ SQLite lub MS SQL. Dla każdego z trzech obszarów archiwum można wskazać następujące lokalizacje docelowe:

- „Default” – folder wpisany w Unified Configuration,

- „Local” – dowolna ścieżka podana ręcznie,

- „Project folder” – folder skompilowanego projektu wizualizacji, zwykle lokalizacja „C:\ProgramData\SCADAProjects”.

![Obraz zawierający tekst, zrzut ekranu, numer, Czcionka

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Archiwizacja_konfiguracja_bazy_danych/Archiwizacja_konfiguracja_bazy_danych_64.png)

Dalsza konfiguracja baz danych zachodzi z poziomu edytora „Logs”. Tutaj należy utworzyć logi, które pozwalają na organizację bazy danych – pojedynczy log może zawierać np. zmienne o tym samym cyklu akwizycji bądź powiązane z konkretnym obiektem procesu.

![Obraz zawierający tekst, oprogramowanie, Czcionka, numer

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Archiwizacja_konfiguracja_bazy_danych/Archiwizacja_konfiguracja_bazy_danych_65.png)

Każdy log składa się z konfigurowalnej liczby segmentów. Segmenty są wypełniane danymi jeden po drugim. Po osiągnięciu maksymalnego rozmiaru lub czasu archiwizacji, najstarszy segment jest usuwany. Tworzony jest wtedy nowy segment. Dla zmiennych archiwalnych domyślne ustawienia zakładają rozpiętość całej bazy danych na 7 dni (zakładając, że nie przekroczymy limitów pamięci), gdzie co dzień usuwany jest najstarszy log.

Na zakres czasowy archiwizacji, a zatem i częstotliwość usuwania segmentów, możemy wpływać na wiele sposobów, przykładowo:

- Zwiększyć liczbę segmentów logu, zwiększyć rozpiętość czasową pojedynczego segmentu i zwiększyć rozpiętość czasową całej bazy danych;

- Zwiększyć rozmiar segmentów/logu, jeżeli będzie archiwizowana duża liczba zmiennych;

- Ustawić „0” w kolumnach „Segment time period"  i „Log time period", aby brane pod uwagę były tylko ograniczenia związane z rozmiarem segmentu/logu;

- Ustawić „0” w kolumnach „Maximum log size (MB)” i „Maximum log size (MB)”, aby brane pod uwagę były tylko ograniczenia związane z czasem trwania segmentu/logu.

Więcej informacji na temat systemu archiwizacji można znaleźć w dokumentacji WinCC Unified.

## Archiwizacja – struktura bazy SQLite

#sqlite #log #pk #id #db3

???

## Alarmy – bufor alarmów

#bufor #buffer #alarm #persistency

Bufor alarmowy w przypadku paneli Unified działa na innych zasadach niż dla HMI starszej generacji. Służy on podtrzymywaniu informacji o stanie aktywnych alarmów (a w zasadzie o fakcie ich potwierdzenia) na wypadek zaniku zasilania / wyłączenia HMI.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Strona internetowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Alarmy_bufor_alarmów/Alarmy_bufor_alarmów_66.png)

Sposób działania bufora ilustruje przykład w poniższej tabeli:

| **Zdarzenie** | **Bufor nieaktywny** | **Bufor aktywny** |
| --- | --- | --- |
| Zaistnienie przyczyny alarmu | Stan „Incoming” | Stan „Incoming” |
| Potwierdzenie alarmu przez operatora | Stan „Incoming / acknowledged” | Stan „Incoming / acknowledged” |
| Restart runtime lub HMI przy aktywnej przyczynie alarmu | Stan „Incoming” | Stan „Incoming / acknowledged” |

Jeżeli istnieje potrzeba konfiguracji bufora o funkcjonalności takiej jak dla starszych paneli, konieczne będzie uruchomienie logowania zmiennych do bazy danych SQLite.

## Alarmy – loop in alarm

#loop #loop-in #alarm

W WinCC Unified nie przewidziano funkcjonalności „loop in alarm” znanej z WinCC V7/8. Nie mniej, możliwe jest wdrożenie podobnego mechanizmu w oparciu o skrypt. Sposób działania jest następujący:

- Pojawia się alarm, który jest widoczny w kontrolce;

- ![Obraz zawierający symbol, tekst, logo

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Alarmy_loop_in_alarm/Alarmy_loop_in_alarm_67.png)W Alarm Control należy wybrać wiersz tego alarmu (aby nawigować po wierszach musi być aktywny przycisk );

- ![Obraz zawierający tekst, symbol

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Alarmy_loop_in_alarm/Alarmy_loop_in_alarm_68.png)Akcja przypisana do alarmu (np. zmiana ekranu, zmiana wartości zmiennej) wykonywana jest po kliknięcie przycisku );

- Informacja o skonfigurowanej akcji niesiona jest w „Info text” alarmu.

Podczas otwierania projektu przykładowego w docelowej wersji TIA Portal, pojawi się okno migracji. Po udanym podniesieniu wersji projektu, należy podmienić wersję WinCC Unified PC za pomocą funkcji „Change device / version”.

Alternatywne podejście do wdrożenia tego mechanizmu omówiono w poradniku migracyjnym.

## Alarmy – baner alarmowy

#alarm #baner #banner

W WinCC Unified sugerowanym sposobem prezentacji alarmów i ostrzeżeń jest obiekt „Alarm control” wyświetlany w formie tabeli bądź pojedynczej linii, która zawiera tekst najnowszego aktywnego alarmu. Niekiedy wymagane jest rozszerzenie funkcjonalności linii alarmów, tak aby zachowywała się jak baner, który rotuje pomiędzy aktywnymi alarmami (opcjonalnie ze wskazaniem klasy alarmów). W tym przypadku trzeba zrezygnować z mechanizmów systemowych, i wdrożyć obiekt samodzielnie, stosując obiekty z przybornika i odpowiednie dynamizacje.

Szablon baneru udostępniono w formie przykładowego projektu. Jest to wersja robocza, która wymaga dostosowania do wymagań aplikacji. Sposób działania baneru przedstawiono na filmie demonstracyjnym. Jest to pole tekstowe

## Raporty – prezentacja danych w formie wykresów

#reporting #raporty #excel #wykresy #dane

Systemowe mechanizmy wspomagające tworzenie raportów dostępne są dla urządzeń Unified Comfort Panel oraz Unified PC Runtime. Raporty drukowane są w oparciu o szablon wykonany w programie Microsoft Excel, za pomocą specjalnego narzędzia WinCC Unified Reporting.

Począwszy od wersji V17.0.0.5 (środowisko inżynierskie i firmware paneli/wersja RT) w szablonach, do prezentacji danych, można używać wykresów programu Excel.

![Obraz zawierający tekst, oprogramowanie, Wykres, linia

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Raporty_prezentacja_danych_w_formie_wykresów/Raporty_prezentacja_danych_w_formie_wykresów_69.png)

## PaCo – zmiana nazwy receptury we wszystkich językach

#recipe #receptury #parameter #paco #język #language

Nazwa typu receptury (Parameter set type) może być zdefiniowana jeszcze w środowisku inżynierskim. Po przełączeniu na zakładkę „Texts”, istnieje możliwość przetłumaczenia nazwy na inne języki wizualizacji.

![Grafika 70](images/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach_70.png)

W starszych wersjach TIA Portal, przy dodawaniu nowej instancji receptury (Parameter set) z poziomu kontrolki (Parameter set control) nazwa receptury, wpisywana w oknie dialogowym, zapisywana jest tylko w aktualnie wybranym języku wizualizacji. W pozostałych językach rekord przechowywany jest z domyślną nazwą systemową „ParameterSet…”. Zachowanie to zostało naprawione w V18 Update 4, V19 Update 3 i od V20 wzwyż.

Nazwy receptur można przepisać ręcznie, zmieniając język wizualizacji i wybierając przycisk „Rename” z paska kontrolki. Proponowane, bardziej zautomatyzowane rozwiązanie zakłada skopiowanie nazwy wprowadzonej przez użytkownika na inne języki wizualizacji.

Należy utworzyć zmienne wewnętrzne, które będą potrzebne do pracy z funkcjami systemowymi odnoszącymi się do modułu receptur:

| **Nazwa** | **Typ danych** | **Opis** |
| --- | --- | --- |
| PST_ID | Int | ID typu receptury wybranego w kontrolce |
| PS_ID | Int | ID receptury wybranej w kontrolce |
| PS_Name | WString | Nazwa receptury wybranej w kontrolce |
| Language_ID | UInt | LCID języka wizualizacji, do obsługi nazw |
| Status | Int | Kod statusowy wykonania funkcji systemowych |
| Command_ID | Int | ID przycisku naciśniętego w kontrolce |

Pobieranie informacji o PS_ID oraz odczyt nazwy receptury najlepiej zrealizować za pomocą skryptu asynchronicznego przypiętego do właściwości „Miscellaneous > Current parameter set ID > Change”. Funkcja „GetParameterSetName()” dostępna jest począwszy od TIA V18 – w starszych wersjach pobranie nazwy realizuje się poprzez odczyt danych z pliku zawierającego informacje o recepturach zapisanych w pamięci panelu – przykład.

![Obraz zawierający zrzut ekranu, tekst, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach_71.png)

![Grafika 72](images/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach_72.png)

Aby powyższa funkcjonalność działała prawidłowo, należy użyć drugiego skryptu, zakotwiczonego w „Miscellaneous > Current parameter set type ID > Change”.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach_73.png)

![Grafika 74](images/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach_74.png)

Ostatni i najważniejszy fragment kodu (asynchroniczny) należy umieścić w odpowiedzi na event „Command fired” obiektu Parameter set control, który wywoływany jest każdorazowo po aktywacji dowolnego przycisku kontrolki. Za pomocą odpowiedniego warunku logicznego można zaprogramować reakcję na przycisk o konkretnym identyfikatorze (atrybut „commandId”), w tym przypadku „Save”, służący do zapisania instancji receptury w pamięci HMI i wyjścia z trybu edycji. Poniżej przykład zastosowania funkcji „RenameParameterSet()” dla wizualizacji z aktywnymi dwoma językami. Pomiędzy przełączaniem języków zaleca się wprowadzenie drobnego opóźnienia (ok. 100 ms, linijki kodu nr 8 oraz 20).

![Grafika 75](images/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach_75.png)

![Grafika 76](images/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach/PaCo_zmiana_nazwy_receptury_we_wszystkich_językach_76.png)

## PaCo – obsługa receptur bez kontrolki (recipe screen)

#receptury #recipe #parameter #paco

???

## PaCo – ID receptury załadowanej do PLC

#recipe #receptury #parameter #paco #id #loaded

W wielu rozwiązaniach systemu receptur konieczne jest monitorowanie ID receptury (Parameter set) wybranej w kontrolce (Parameter set control) oraz załadowanej do PLC.

Proponowane rozwiązanie zakłada utworzenie dedykowanych tagów, które będą nośnikiem tych informacji:

| **Nazwa** | **Typ danych** | **Opis** |
| --- | --- | --- |
| PST_ID | Int | ID typu receptury wybranego w kontrolce |
| PS_ID | Int | ID receptury wybranej w kontrolce |
| PS_Name | WString | Nazwa receptury wybranej w kontrolce |
| Loaded_PST_ID | Int | ID typu receptury załadowanego do PLC |
| Loaded_PS_ID | Int | ID receptury załadowanej do PLC |
| Loaded_PS_Name | WString | Nazwa receptury załadowanej do PLC |
| Language_ID | UInt | LCID języka wizualizacji, do obsługi nazw |
| Status | Int | Kod statusowy wykonania funkcji systemowych |
| Command_ID | Int | ID przycisku naciśniętego w kontrolce |

Sposób działania mechanizmów przedstawiam na filmie demonstracyjnym.

Pobieranie informacji o PS_ID oraz odczyt nazwy receptury najlepiej zrealizować za pomocą skryptu asynchronicznego przypiętego do właściwości „Miscellaneous > Current parameter set ID > Change”. Funkcja „GetParameterSetName()” dostępna jest począwszy od TIA V18 – w starszych wersjach pobranie nazwy realizuje się poprzez odczyt danych z pliku zawierającego informacje o recepturach zapisanych w pamięci panelu – przykład.

![Grafika 77](images/PaCo_ID_receptury_załadowanej_do_PLC/PaCo_ID_receptury_załadowanej_do_PLC_77.png)

![Grafika 78](images/PaCo_ID_receptury_załadowanej_do_PLC/PaCo_ID_receptury_załadowanej_do_PLC_78.png)

Aby powyższa funkcjonalność działała prawidłowo, należy użyć drugiego skryptu, zakotwiczonego w „Miscellaneous > Current parameter set type ID > Change”.

![Grafika 79](images/PaCo_ID_receptury_załadowanej_do_PLC/PaCo_ID_receptury_załadowanej_do_PLC_79.png)

![Grafika 80](images/PaCo_ID_receptury_załadowanej_do_PLC/PaCo_ID_receptury_załadowanej_do_PLC_80.png)

Dane na temat receptury wgranej do PLC naturalnie najwygodniej odczytywać podczas naciśnięcia przycisku kontrolki odpowiedzialnego za transfer danych do sterownika („Write to PLC”). Idealnie nadaje się do tego event „Command fired”, który wywoływany jest każdorazowo po aktywacji dowolnego przycisku kontrolki. Za pomocą odpowiedniego warunku logicznego można zaprogramować reakcję na przycisk o konkretnym identyfikatorze (atrybut „commandId”). Skrypt powinien być wykonywany asynchronicznie.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/PaCo_ID_receptury_załadowanej_do_PLC/PaCo_ID_receptury_załadowanej_do_PLC_81.png)

![Grafika 82](images/PaCo_ID_receptury_załadowanej_do_PLC/PaCo_ID_receptury_załadowanej_do_PLC_82.png)

## Runtime PC – status „Partly running”

#configurator #iis #user #grup #runtime

Jeżeli wizualizacja / symulacja nie uruchamia się bądź nie jest w pełni funkcjonalna, 
a w SIMATIC Runtime Manager jej status to „Partly running”, rekomenduje się podjęcie następujących działań:

- weryfikacja poprawności nazwy komputera;

- sprawdzenie przynależności użytkownika do odpowiednich grup systemu Windows (PlcSimUsers, RTIL Tracing Users, Siemens TIA Engineer, SIMATIC HMI, SIMATIC HMI VIEWER);

- przebudowa projektu przez wywołanie na HMI funkcji „Compile > Software (rebuild all)”;

- usunięcie plików tymczasowych składowanych w podfolderze projektu „IM” przy wyłączonym TIA Portal;

- wystawienie odpowiednich certyfikatów, jeżeli uruchomiono usługi Collaboration lub OPC UA Server.

![Obraz zawierający tekst, zrzut ekranu, numer, Czcionka

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Runtime_PC_status_Partly_running/Runtime_PC_status_Partly_running_83.png)

Szerszy opis problemu oraz dalsze zalecenia można znaleźć we wpisie w serwisie wsparcia technicznego.

## Runtime PC – wizualizacja wielomonitorowa

#runtime #monitor #browser

WinCC Unified PC RT od wersji 21 przewiduje systemowy mechanizm służący do konfiguracji aplikacji wielomonitorowych – zarówno dla stacji lokalnej jak i klientów webowych opartych na PC. Ustawienia wprowadza się wyłącznie w witrynie MyWinCCUnified.

Projekt wizualizacji w TIA Portal powinien zawierać ekrany przeznaczone dla każdego monitora i mieć odpowiednio przemyślaną nawigację. Należy utworzyć konto użytkownika z uprawnieniami do obsługi MyWinCCUnified – najprościej z systemową rolą HMI Administrator.

![Grafika 84](images/Runtime_PC_wizualizacja_wielomonitorowa/Runtime_PC_wizualizacja_wielomonitorowa_84.png)

Na komputerze docelowym oprócz WinCC Unified PC Runtime powinno być zainstalowane rozszerzenie WinCC Unified Station Configurator w tej samej wersji. Należy uruchomić Runtime i z paska Start systemu Windows przejść do Station Configurator. W oknie dialogowym wpisuje się nazwę lub adresem IP lokalnego komputera – zgodnie z tym jak ustawiony jest dostęp do wizualizacji (WinCC Unified Configuration) i jak wystawione są certyfikaty (Subject Alternative Name).

![Grafika 85](images/Runtime_PC_wizualizacja_wielomonitorowa/Runtime_PC_wizualizacja_wielomonitorowa_85.png)

Jeśli test połączenia przebiegnie pozytywnie, następnym krokiem jest uruchomienie MyWinCCUnified i zalogowanie się poświadczeniami wspomnianego wcześniej użytkownika. Zarządzanie stacjami operatorskimi dostępne jest w po przejściu do sekcji „Client overview”.

![Grafika 86](images/Runtime_PC_wizualizacja_wielomonitorowa/Runtime_PC_wizualizacja_wielomonitorowa_86.png)

W zakładce „Client settings” należy wpisać podstawowe atrybuty, czyli nazwę organizacyjną i adres IP komputera. Możliwa jest aktywacja opcji wyświetlenia ekranu startowego bez zalogowania. Zakładka „Monitor setup” służy do odczytu lokalnej konfiguracji monitorów. Dopuszczalny jest tylko podgląd – jeśli potrzebne są modyfikacje, wprowadza się je w Panelu Sterowania systemu Windows. Przyporządkowanie ekranów do konkretnych monitorów realizowane jest w zakładce „Screen assignment”.

![Grafika 87](images/Runtime_PC_wizualizacja_wielomonitorowa/Runtime_PC_wizualizacja_wielomonitorowa_87.png)

Dodatkowe wypełnienie zakładki „Kiosk” pozwoli ograniczyć dostęp do systemu operacyjnego i wyświetlać wizualizację w trybie pełnoekranowym.

Aplikację wielomonitorową można uruchomić jak standardową, wpisując adres witryny w przeglądarce internetowej lub korzystając ze skrótu „Launch UI Client” na pulpicie bądź w Station Configurator.

![Grafika 88](images/Runtime_PC_wizualizacja_wielomonitorowa/Runtime_PC_wizualizacja_wielomonitorowa_88.png)

Dla wizualizacji w wersjach <= V20 znane są następujące podejścia pozwalające na warunkowe wdrożenie wielomonitorowej stacji operatorskiej:

- Stworzenie ekranów o podwójnej szerokości. Problemem jest konieczność rozciągnięcia przeglądarki internetowej na dwa monitory. Nie jest możliwe przejście do trybu pełnoekranowego ani zastosowanie trybu kiosk. Niektóre okna dialogowe wyświetlane są na środku, co może utrudniać ich obsługę.

- Wyświetlenie dwóch niezależnych ekranów w osobnych instancjach przeglądarki, gdzie każda z nich przyporządkowana jest do jednego monitora. Możliwość przejścia do trybu pełnoekranowego. Problemy: oba okna są niezależne; konieczność zalogowania się dwa razy; zużywana jest dodatkowa licencja klienta webowego.

- Skorzystanie z funkcjonalności karty graficznej – połączenie dwóch monitorów w ten sposób, że PC traktuje je jako jeden obszar. Tryb pełnoekranowy przeglądarki obejmuje oba monitory. W przypadku kart graficznych Intel (na wyposażeniu większości SIMATIC IPC) funkcja nosi nazwę „Collage mode”, a dla NVIDIA – „Set Up Merged Display”.

## Runtime PC – „General error during processing”

#domena #runtime #domain #service #usługi

Jeżeli po uruchomieniu SIMATIC Runtime Manager w lewym dolnym rogu wyświetlany jest status „General error during processing” oraz nie jest możliwe uruchomienie symulacji bądź projektu, zwykle oznacza to problem z działaniem ważnych usług (np. „WCCILScsService” lub „UmclService”.

Nad uruchamianiem potrzebnych usług czuwa wirtualny użytkownik serwisowy systemu Windows o nazwie „UmclService” (członek grup SIMATIC HMI, NT SERVICE, UM Service Accounts), który podczas instalacji powinien uzyskać stosowne prawa do lokalizacji „C:\ProgramData\SCADAProjects". Zdarza się, że prawa te są ograniczone w wyniku instalacji w środowisku domenowym bądź w rezultacie działania programu antywirusowego. Jeśli problem występuje przy instalacji lokalnej, warto zweryfikować czy stan rzeczy ma się jak w rozdziale 3 wpisu w serwisie SiePortal, ewentualnie wykluczyć wyżej wymieniony folder ze skanowania przez program antywirusowy. Przy instalacji w domenie administrator powinien dostosować polityki grup.

## Runtime PC – błędy w narzędziu WinCC Unified Configuration

#freeze #error #configurator #web #reporting #raporty #iis #partly

Program WinCC Unified Configuration służy do tworzenia witryny „WinCC Unified SCADA” w ramach webservera IIS. W niektórych przypadkach konfiguracji nie udaje się doprowadzić do końca – najczęściej przejawia się to zatrzymaniem pracy narzędzia w stanie „In work” bądź zwróceniem błędu (status „Error”). Taki stan rzeczy może wynikać z niedostatecznego przygotowania systemu Windows lub niewłaściwego wypełnienia okna konfiguratora.

W pierwszej kolejności zaleca się zweryfikować podstawowe kwestie takie jak:

- poprawność nazwy komputera;

- instalacja wszystkich funkcji systemu Windows wymaganych przez Unified;

- przynależność użytkownika do odpowiednich grup systemu Windows (PlcSimUsers, RTIL Tracing Users, Siemens TIA Engineer, SIMATIC HMI, SIMATIC HMI VIEWER);

Przyczyny błędów związane z wprowadzaniem ustawień w WinCC Unified Configuration to m.in.:

- pominięcie konfiguracji certyfikatu;

- błędnie podana ścieżka do zapisu archiwów;

- deklaracja zastosowania systemu raportowania, podczas gdy nie jest zainstalowany MS Excel / Libre Office.

Jeżeli problem pojawił się po pewnym czasie, tzn. wcześniej możliwe było bezproblemowe tworzenie witryny „WinCC Unified SCADA”, najczęściej przyczyny upatruje się w aktualizacji systemu Windows. W tym przypadku należy przeprowadzić ponowną instalację kilku komponentów z dysku DVD1 Unified PC RT (lokalizacja „\InstData\Prerequisites”) :

- UrlRewrite2,

- ExternalDiskCache,

- RequestRouter,

- IISNode.

## Runtime PC – nieaktywny przycisk symulacji

#simulation #symulacja #button #greyed-out

Jeżeli w WinCC Unified >= V18 przycisk symulacji urządzenia HMI jest nieaktywny (wyszarzony), to najprawdopodobniej nie zainstalowano komponentu WinCC Unified PC RT. Począwszy od wersji 18, symulator został wydzielony ze środowiska inżynierskiego. Do jego obsługi nie jest potrzebna żadna licencja. Przy instalacji należy zwrócić uwagę na jednolitość wersji i aktualizacji TIA Portal oraz WinCC Unified PC RT.

![Obraz zawierający tekst, oprogramowanie, Ikona komputerowa, Strona internetowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Runtime_PC_nieaktywny_przycisk_symulacji/Runtime_PC_nieaktywny_przycisk_symulacji_89.png)

## UXP – aktualizacja firmware’u

#reset #upgrade #update #aktualizacja #prosave #factory #firmware

W przypadku paneli Unified, zaleca się  aktualizowanie firmware’u do najnowszej dostępnej wersji. Poprawki wprowadzają nowe funkcje, przyczyniają się do zwiększenia wydajności urządzenia oraz służą korekcie zgłaszanych błędów systemu operacyjnego. Nie ma przeciwwskazań, aby wersja firmware’u na fizycznym HMI była nowsza, niż ta skonfigurowana w projekcie TIA Portal.

Aktualizację można przeprowadzić lokalnie, z poziomu panelu sterowania urządzenia HMI. W tym celu wystarczy podłączyć nośnik USB z plikiem firmware’u i uruchomić instalację z menu „System Properties > Update OS”:

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Czcionka

Zawartość wygenerowana przez AI może być niepoprawna.](images/UXP_aktualizacja_firmwareu/UXP_aktualizacja_firmwareu_90.png)

Drugi sposób aktualizacji pozwala na zdalne przeprowadzenie procedury. Wymagane jest nawiązanie połączenia sieciowego z panelem oraz zastosowanie programu ProSave (dostarczany automatycznie z TIA Portal). Instrukcję przeprowadzenia aktualizacji można znaleźć w dokumentacji lub skorzystać z poradnika w formie filmu instruktażowego.

![Obraz zawierający tekst, zrzut ekranu, wyświetlacz, numer

Zawartość wygenerowana przez AI może być niepoprawna.](images/UXP_aktualizacja_firmwareu/UXP_aktualizacja_firmwareu_91.png)

## UXP – adres IP 0.0.0.0 w Maintenance Mode

#reset #upgrade #update #aktualizacja #0.0.0.0 #IP #prosave #factory #firmware

Przy aktualizacji systemu operacyjnego panelu wraz z resetem do ustawień fabrycznych w jednym z kroków HMI przechodzi w tzw. tryb Maintenance Mode – jest to czas, w którym panel oczekuje na transfer plików OS inicjowany przez program ProSave na PC. Sporadycznie, zwłaszcza przy uprzedniej nieudanej bądź przerwanej aktualizacji, pojawia się błąd związany z wyzerowaniem adresów IP. W takim przypadku standardową procedurę należy nieco zmodyfikować, o czym traktuje rozdział 3 wpisu na stronie internetowej wsparcia technicznego.

## UCP – aktualizacja bootloader’a

#bootloader #performance #update #os #ucp

Jednym z usprawnień wprowadzonych wraz z TIA V18 była aktualizacja bootloader’a paneli Unified Comfort, tzn. programu, który służy uruchomienia systemu operacyjnego urządzenia zaraz po jego włączeniu. Nowsza wersja programu przyczynia się do zwiększenia wydajności paneli, wzrostu poziomu bezpieczeństwa oraz zawiera poprawki znanych błędów. Na urządzeniach, które zostały zakupione przed aktualizacją, bootloader można zaktualizować korzystając z plików i instrukcji udostępnionych za pośrednictwem serwisu wsparcia technicznego.

## UCP – karty pamięci

#SMC #memory #card #karta #SD #system #data

Panele Unified Comfort (w tym PRO i Hygienic) umożliwiają podłączenie dwóch kart pamięci. Poniżej podsumowanie informacji z rozdziału 4.7 manuala.

Data memory card (umieszczana w slocie X51-DATA) służy do przechowywania danych użytkownika takich jak:

- archiwa zmiennych procesowych i alarmów,

- kopie zapasowe (do wykonywania backup-restore),

- informacje na temat administracji użytkownikami,

- receptury (zależnie od konfiguracji w TIA Portal),

- dane do obsługi raportów,

- pliki systemu operacyjnego (do aktualizacji za pomocą karty SD),

- projekt (do transferu za pomocą karty SD).

W tym celu można zastosować dowolną kartę typu SD(IO/HC/XC), jednak celem zapewnienia spójności danych zalecana jest karta SIMATIC SD >= 32 GB. Obsługiwane formaty danych to FAT32 lub NTFS. Uwaga – dla starszych wersji systemu operacyjnego HMI (V16-17) w niektórych przypadkach, zwłaszcza dla kart o rozmiarze < 32GB, panel może mieć trudności z wykrywaniem nośnika.

System memory card (slot X50-SYSTEM) przeznaczona jest do wykonywania automatycznej kopii zapasowej danych („Service and Commisioning > Automatic Backup”). Obsługiwane są wyłącznie karty SIMATIC SD >= 32 GB.

## UCP – kopiowanie plików między nośnikami pamięci

#usb #sd #copy #kopiowanie #file #plik

Domyślną lokalizacją zapisu pewnych plików generowanych przez użytkownika – np. w wyniku eksportu danych z kontrolek – jest obszar pamięci wewnętrznej panelu. Z poziomu menedżera plików, folder ten widoczny jest pod nazwą „industrial”.

![Grafika 92](images/UCP_kopiowanie_plików_między_nośnikami_pamięci/UCP_kopiowanie_plików_między_nośnikami_pamięci_92.png)

Najczęściej konieczny jest transfer tych plików celem dalszej analizy. Takie przenoszenie realizowane jest za pośrednictwem zewnętrznych nośników pamięci (USB, SD) lub przy pomocy dysku sieciowego. Skopiowanie zawartości z pamięci wewnętrznej do innej lokalizacji umożliwia skrypt powłoki „copy.sh”.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/UCP_kopiowanie_plików_między_nośnikami_pamięci/UCP_kopiowanie_plików_między_nośnikami_pamięci_93.png)

Skrypt uruchamia się używając funkcji systemowej „StartProgram()”. Poprzez parametr „Program name” należy podać jego ścieżkę, z kolei w „Program parameters” wpisuje się lokalizację pliku do skopiowania i folder docelowy. Przy wdrażaniu tej funkcjonalności we własnym projekcie, można posiłkować się projektem demonstracyjnym.

W celu poprawy wydajności panele Unified z systemem operacyjnym opartym na jądrze Linux domyślnie buforują wszystkie dane przeznaczone do zapisania na zewnętrznych nośnikach pamięci. Co 5 sekund proces działający w tle sprawdza, czy istnieją dane starsze niż 30 sekund i rozpoczyna ich zapisywanie na nośnikach pamięci. Nowsze zmiany są zapisywane tylko wtedy, gdy bufor zajmuje ponad 10% pamięci roboczej. Jeśli zapełnione jest ponad 20%, operacje zapisu są blokowane. W związku z tym po zakończeniu procesu zapisu przez system Unified potrzeba do 40 sekund, zanim dane będą dostępne na nośniku pamięci.

Zamiast czekać 40 sekund, aby wymusić natychmiastowe zapisanie danych z pamięci podręcznej, można użyć polecenia „sync” systemu Linux. Po zakończeniu działania polecenia wszystkie dane zostaną zapisane.

![Grafika 94](images/UCP_kopiowanie_plików_między_nośnikami_pamięci/UCP_kopiowanie_plików_między_nośnikami_pamięci_94.png)

## UCP – uruchamianie zainstalowanych aplikacji z poziomu RT

#runtime #program #start #vlc #libre #run

Na urządzeniach z rodziny Unified Comfort preinstalowanych jest kilka podstawowych programów – najłatwiej uruchomić je z panelu sterowania, przechodząc do zakładki „SIMATIC Apps”. Niektóre zastosowania wymagają integracji tychże aplikacji z wizualizacją. W tym przypadku za ich otwieranie odpowiada funkcja systemowa „StartProgram()”.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/UCP_uruchamianie_zainstalowanych_aplikacji_z_poziomu_RT/UCP_uruchamianie_zainstalowanych_aplikacji_z_poziomu_RT_95.png)

Lokalizację i nazwy skryptów służących do uruchamiania aplikacji (parametr „Program name”) odnotowano w podręczniku paneli Unified Comfort – dokument należy przeszukać pod kątem frazy „Starting pre-installed apps from the project”. Uwaga – mogą występować różnice między wersjami systemu operacyjnego HMI. Treść przekazywana poprzez argument „Program parameters” różni się zależnie od aplikacji – należy w tym zakresie posiłkować się dokumentacją konkretnego programu. Najczęściej jest to ścieżka pliku do otwarcia lub parametry okna (np. rozmiar, pełny ekran, brak GUI).

Najprostsze przypadki współpracy aplikacji z wizualizacją można prześledzić oglądając nagranie z działania przykładowego projektu.

## UCP – czytniki RFID

#rfid #users #administration #login #logon #pmlogon #pm-logon

Czytnik kart RFID podłączony do panelu Unified Comfort może mieć zastosowanie zarówno do obsługi lokalnej bazy użytkowników (UMC-L), jak i w przypadku integracji panelu w systemie scentralizowanej administracji użytkownikami (UMC-S). Kompatybilne z HMI są czytniki SIMATIC z interfejsem USB, mianowicie RF1040R, RF1060R oraz RF1070R.

![Obraz zawierający zrzut ekranu, Prostokąt, design

Zawartość wygenerowana przez AI może być niepoprawna.](images/UCP_czytniki_RFID/UCP_czytniki_RFID_96.png)

Do działania z UMC-L nie jest wymagana żadna dodatkowa licencja. Oprogramowanie służące do obsługi czytnika (PM-LOGON) jest częścią firmware’u rządzenia. Konfigurację omówiono w dokumentacji paneli operatorskich (rozdział „Security”).

Integracja panelu operatorskiego z infrastrukturą UMC-S sprowadza się do nawiązania połączenia sieciowego z serwerem UMC. Więcej informacji na temat tego typu systemów dostarczają przykłady aplikacyjne.

## UCP – webserver

#webserver #web #zdalny #remote

Panele operatorskie z rodziny Unified Comfort nie zapewniają funkcjonalności MiniWeb znanej z serii Comfort.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Strona internetowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/UCP_webserver/UCP_webserver_97.png)

Niektóre z funkcjonalności oferowanych w ramach webserwera paneli Comfort da się wdrożyć za pomocą mechanizmów alternatywnych. Kilka opcji wycofano ze względów bezpieczeństwa.

- Dostęp zdalny do panelu sterowania i wizualizacji – Sm@rtServer (FAQ nr 26) i Web Client (FAQ nr 28).

- Zdalne uruchomienie / zatrzymanie runtime – funkcjonalność wycofana.

- Import / Eksport receptur – realizacja za pomocą programu.

- Import / Eksport danych użytkowników – realizacja za pomocą programu lub przez zakładkę „User Management” klienta webowego (FAQ nr 28).

- Diagnostyka zdalna – alarmy można przeglądać logując się jako klient webowy (FAQ nr 28). Wyświetlanie i analiza logów możliwe przy zastosowaniu narzędzia RTILTraceViewer (FAQ nr 30).

- Dostęp do systemu plików panelu – ze względów bezpieczeństwa, wymiana plików z urządzeniem zewnętrznym może zachodzić tylko za pośrednictwem folderu współdzielonego. Na panelu operatorskim należy przewidzieć funkcjonalność udostępniania lub kopiowania plików do tej lokalizacji.

![Obraz zawierający tekst, zrzut ekranu, woda, oprogramowanie

Zawartość wygenerowana przez AI może być niepoprawna.](images/UCP_webserver/UCP_webserver_98.png)

## Obiekty – wyświetlanie zmiennej typu Int z przecinkiem

#io #ioflied #int #float #display

Dość częstym wymaganiem jest, aby zmienne całkowitoliczbowe (np. Int), na których operuje sterownik, były wyświetlane / interpretowane po stronie HMI jako liczby zmiennoprzecinkowe. Przykładowo, operator wpisuje na HMI wartość „13,05”, a w programie PLC ma być ona traktowana jako „1305”, bez bloków pośredniczących służących do przeliczania.

Do wersji 20 Update 1 podstawową metodą realizacji takiej funkcjonalności było dodanie do każdego obiektu IOField dwóch skryptów modyfikujących wartość wymienianą z PLC. Począwszy od V20 Update 3, dla pól można skonfigurować to zachowanie poprzez właściwość „Shift decimal places”. Szczegóły we wpisie na stronie internetowej wsparcia technicznego.

## Obiekty – dostęp do list tekstowych ze skryptu

#script #skrypt #js #lista #entry

???

## Obiekty – aktywne pozycje w listach

#listbox #lista #krok #step #entry

Informację o tym, czy dany element listy jest aktywny / wybrany, niesie ze sobą właściwość „Select item”. Status pojedynczego elementu można przepisać do zmiennej typu Bool. Dla monitorowania stanu większej ich liczby, sprawdzi się tablica, której obsługę można oprogramować za pomocą skryptu, np.:

![Grafika 99](images/Obiekty_aktywne_pozycje_w_listach/Obiekty_aktywne_pozycje_w_listach_99.png)

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, wyświetlacz

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Obiekty_aktywne_pozycje_w_listach/Obiekty_aktywne_pozycje_w_listach_100.png)

## Obiekty – liczba pozycji Symbolic IOField

#symbolic #io #lista #step #krok #entry

Dla list składających się z co najmniej siedmiu elementów, liczba widocznych pozycji w obiekcie Symbolic IOField jest stała i równa 7. Jak dotąd (V20.0.0.3) nie ma możliwości modyfikacji tej właściwości. Po rozwinięciu, lista ustawia się na pierwszych siedmiu pozycjach.

![Obraz zawierający tekst, oprogramowanie, numer, zrzut ekranu

Zawartość wygenerowana przez sztuczną inteligencję może być niepoprawna.](images/Obiekty_liczba_pozycji_Symbolic_IOField/Obiekty_liczba_pozycji_Symbolic_IOField_101.png)

## Obiekty – funkcjonalność SetWhilePressed

#setwhilepressed #press #release #button

???

## Obiekty – obracanie grupy elementów

#group #rotation #grupa #obrót #pivot

Obracanie kilku elementów jednocześnie najlepiej zrealizować grupując je. Osią obrotu jest środek geometryczny grupy. Należy pamiętać, że po rozgrupowaniu poszczególne elementy wracają do pozycji początkowej – po likwidacji grupy usuwany jest jej obrócony układ współrzędnych. Poszczególne obiekty wchodzące w skład grupy mają swoje własne, nieobrócone układy współrzędnych. Nie następuje przeliczanie pozycji układów współrzędnych.

![Grafika 102](images/Obiekty_obracanie_grupy_elementów/Obiekty_obracanie_grupy_elementów_102.png)

![Obraz zawierający tekst, diagram, oprogramowanie, Oprogramowanie graficzne

Zawartość wygenerowana przez AI może być niepoprawna.](images/Obiekty_obracanie_grupy_elementów/Obiekty_obracanie_grupy_elementów_103.png)

Alternatywnym podejściem, bez wprowadzania dodatkowego obiektu w postaci grupy, jest ustawienie dla każdego obiektu „Rotation – pivot point = Absolute to screen” – pozwala to dowolnie pozycjonować oś obrotu za pomocą współrzędnych „Rotation – pivot point x/y”. Po zaznaczeniu wszystkich elementów i obróceniu ich naraz, utrudniona jest jednak modyfikacja położenia – „hitboxy” mogą być wyświetlane w innym miejscu, niż element znajduje się w rzeczywistości. Więcej informacji w dokumentacji.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, diagram

Zawartość wygenerowana przez AI może być niepoprawna.](images/Obiekty_obracanie_grupy_elementów/Obiekty_obracanie_grupy_elementów_104.png)

## Obiekty – bitwise dynamization

#expressions #bitwise #and #and8 #bit

???

## Ekrany – zmiana ekranu za pomocą zmiennej

#screen #change #ekran #number #numer #tag

Niektóre aplikacje wymagają, aby zmiana wartości określonej zmiennej (np. na drodze realizacji programu PLC) wiązała się z wyświetleniem pewnego ekranu (w screen window* *lub globalnie). W przypadku wizualizacji Comfort/Advanced tego typu funkcjonalność konfigurowana była w edytorze „HMI tags”, na event „Value change” konkretnej zmiennej. W Unified reakcję na zmianę wartości taga definiuje się w sekcji „Scheduled Tasks”. Pojawia się jednak pewne istotne ograniczenie – brak możliwości skorzystania z obiektu „HMIRuntime.UI” reprezentującego interfejs graficzny. Oznacza to, że z tego poziomu nie jest możliwe odwoływanie się do istniejących ekranów oraz zarządzanie ich zawartością.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Strona internetowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Ekrany_zmiana_ekranu_za_pomocą_zmiennej/Ekrany_zmiana_ekranu_za_pomocą_zmiennej_105.png)

Aby dało się zrealizować zagadnienie wizualizacja musi mieć jakiś obszar, który jest stale widoczny – np. nagłówek. Do dowolnej właściwości (najlepiej nieistotnej) dowolnego obiektu w ramach nagłówka (obiekt może być niewidoczny lub używany w innym celu) należy podpiąć skrypt reagujący na zmianę wartości zmiennej.

W zaprezentowanym poniżej przykładzie użyto dwóch zmiennych: „screen_number” do sterowania numerem ekranu wyświetlanego w screen window poniżej nagłówka oraz „show_service_screen”, której stan wysoki powoduje zmianę ekranu na serwisowy.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Strona internetowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Ekrany_zmiana_ekranu_za_pomocą_zmiennej/Ekrany_zmiana_ekranu_za_pomocą_zmiennej_106.png)

Skrypty realizujące powyższe założenia zakotwiczono pod właściwościami z grupy „Alignment” obiektu „Text_1” w nagłówku (napis „Siemens Factory”).

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Ekrany_zmiana_ekranu_za_pomocą_zmiennej/Ekrany_zmiana_ekranu_za_pomocą_zmiennej_107.png)

![Grafika 108](images/Ekrany_zmiana_ekranu_za_pomocą_zmiennej/Ekrany_zmiana_ekranu_za_pomocą_zmiennej_108.png)

![Grafika 109](images/Ekrany_zmiana_ekranu_za_pomocą_zmiennej/Ekrany_zmiana_ekranu_za_pomocą_zmiennej_109.png)

Sposób działania funkcjonalności przedstawiono na filmie demonstracyjnym. Jeżeli wizualizacja nie ma stałego fragmentu (stworzona jest z ekranów podmienianych „w całości”), konieczne będzie skonfigurowanie stosownych skryptów na każdym ekranie z osobna.

## Ekrany – zmiana rozmiaru faceplate

#fpt #faceplate #popup #pop-up #size #rozmiar #js #script #skrypt

???

## Ekrany – automatyczne skalowanie faceplate w oknie pop-up

#faceplate #pft #pop-up #popup #js #script #skrypt #resize #scale

???

## Ekrany – faceplate in faceplate, zmiana interfejsu

#faceplate #fpt #interface #pop-up #popup #js #script #skrypt

???

## Ekrany – okno pop-up otwierane za pomocą zmiennej

#popup #pop-up #screen #ekran #tag

Częstym wymaganiem jest, aby zmiana wartości określonej zmiennej (np. na drodze realizacji programu PLC) wiązała się z wyświetleniem okna dialogowego (pop-up) z ostrzeżeniem, informacją lub działaniem do podjęcia. W przypadku wizualizacji Comfort/Advanced tego typu funkcjonalność konfigurowana była w edytorze „HMI tags”, na event „Value change” konkretnej zmiennej. W Unified reakcję na zmianę wartości taga definiuje się w sekcji „Scheduled Tasks”. Pojawia się jednak pewne istotne ograniczenie – brak możliwości skorzystania z obiektu „HMIRuntime.UI” reprezentującego interfejs graficzny. Oznacza to, że z tego poziomu nie jest możliwe odwoływanie się do istniejących ekranów oraz zarządzanie ich zawartością.

![Obraz zawierający tekst, oprogramowanie, zrzut ekranu, Czcionka

Zawartość wygenerowana przez AI może być niepoprawna.](images/Ekrany_okno_pop_up_otwierane_za_pomocą_zmiennej/Ekrany_okno_pop_up_otwierane_za_pomocą_zmiennej_110.png)

Aby dało się zrealizować zagadnienie wizualizacja musi mieć jakiś obszar, który jest stale widoczny – np. nagłówek. Do dowolnej właściwości (najlepiej nieistotnej) dowolnego obiektu w ramach nagłówka (obiekt może być niewidoczny lub używany w innym celu) należy podpiąć skrypt reagujący na zmianę wartości zmiennej.

W zaprezentowanym poniżej przykładzie użyto zmiennej „show_service_popup”, której stan wysoki powoduje wyświetlenie serwisowego okna dialogowego.

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Ekrany_okno_pop_up_otwierane_za_pomocą_zmiennej/Ekrany_okno_pop_up_otwierane_za_pomocą_zmiennej_111.png)

Skrypt realizujący tę funkcjonalność zakotwiczono pod właściwością „Alignment - horizontal” obiektu „Text_1” w nagłówku (napis „Siemens Factory”).

![Obraz zawierający tekst, zrzut ekranu, oprogramowanie, Ikona komputerowa

Zawartość wygenerowana przez AI może być niepoprawna.](images/Ekrany_okno_pop_up_otwierane_za_pomocą_zmiennej/Ekrany_okno_pop_up_otwierane_za_pomocą_zmiennej_112.png)

![Grafika 113](images/Ekrany_okno_pop_up_otwierane_za_pomocą_zmiennej/Ekrany_okno_pop_up_otwierane_za_pomocą_zmiennej_113.png)

Sposób działania funkcjonalności przedstawiono na filmie demonstracyjnym. Jeżeli wizualizacja nie ma stałego fragmentu (stworzona jest z ekranów podmienianych „w całości”), konieczne będzie skonfigurowanie stosownych skryptów na każdym ekranie z osobna.

## Ekrany – zmiana właściwości obiektu wewnątrz pop-up w trakcie otwierania

#pop-up #popup #js #script #skrypt

???

## Modernizacja do Unified

#d2u #modernizacja #konwersja #migracja #comfort #data2unified #modernization

???
