# Diagnostyka

## Diagnostyka – RTIL Trace Viewer

`diagnostyka` `logi` `trace` `rtil`

RTIL Trace Viewer to narzędzie diagnostyczne na PC (instalowane wraz z TIA Portal i Unified PC Runtime). Pozwala na obserwację logów generowanych w toku działania symulacji, wizualizacji uruchomionej lokalnie oraz wizualizacji na urządzeniach w tej samej sieci (panele, PC). Wszystkie scenariusze omówiono w [przykładzie aplikacyjnym](https://support.industry.siemens.com/cs/ww/en/view/109777593). Najczęstsze zastosowania narzędzia to:

- uproszczona analiza wykonywania skryptów bądź funkcji systemowych (prosta w obsłudze alternatywa dla debuggera Chrome dla wizualizacji lokalnych);
- odczyt informacji systemowych (syslog) związanych m.in. z systemem operacyjnym, pamięcią urządzenia, podłączanymi urządzeniami zewnętrznymi;
- weryfikacja poprawności działania usług (np. Audit, UMC, OPC Server, połączenia z PLC).

Standardowa ścieżka, pod którą można znaleźć aplikację to „C:\\Program Files\\Siemens\\Automation\\WinCCUnified\\bin”.

![ <alt-text> ]( images/diagnostyka/diagnostyka1.png )

Program „RTILtraceViewer.exe” umożliwia przeglądanie i analizę logów. Zwykle niezbędne okazuje się nałożenie odpowiedniego filtru oraz zatrzymanie odświeżania listy. Błędy (Error) sygnalizowane są kolorem pomarańczowym, zdarzenia wymagające uwagi (Warning) zakreślone są na żółto, a wszelkie informacje (Info) wyświetlane są na białym tle.

![ <alt-text> ]( images/diagnostyka/diagnostyka2.png )

Aplikacja „RTILtraceTool.exe” służy do nawiązywania połączenia z urządzeniem zdalnym. W tym celu na urządzeniu docelowym powinna być aktywowana opcja wysyłania danych diagnostycznych („trace forwarder”).

![ <alt-text> ]( images/diagnostyka/diagnostyka3.png )

Istnieje również możliwość analizy w trybie offline zgromadzonych wcześniej logów („trace logging”). W przypadku wizualizacji komputerowych funkcjonalność aktywowana jest lokalnie, w oknie „RTILtraceViewer.exe”. Dla paneli operatorskich należy uruchomić opcję „Enable Trace logger” / „Enable Event logger” bezpośrednio na urządzeniu.

![ <alt-text> ]( images/diagnostyka/diagnostyka4.png )

Począwszy od TIA Portal V21 Update 1, część diagnostyki można przeprowadzić nie opuszczając wizualizacji, z użyciem nowego trybu obiektu „System diagnostics control”. Po ustawieniu widoku kontrolki na „General > View type = Script diagnostics” oraz aktywacji odpowiedniego profilu diagnostyki (dla panelu w „Runtime settings”, a dla PC w SIMATIC Runtime Manager), w tabeli wyświetlane będą informacje o błędach w skryptach, ich czasie trwania i treść strumienia „Trace”.

![ <alt-text> ]( images/diagnostyka/diagnostyka5.png )
