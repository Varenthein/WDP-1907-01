# WDP Projekt Zespołowy

## Opis projektu

### Strona sklepu połączona z blogiem. Oparta na Bootsrap a więc łatwa w rozbudowie, elastyczna. Lekka, bez obciążających pluginów. Zgoda z RWD.

#### Menu

1. Dwie wersje językowe do wyboru - polska i angielska.
2. Możliwość utworzenia konta lub zakupu bez rejestracji.

#### Strona główna

1. Możliwość porównania i kupna produktu ze strony głównej. Dla zainteresowanych szczegółowa karta produktu.
1. Szybka zmiana ilości wyświetlanych produktów.
1. Intuicyjny system oceny produktów.
1. Możliwość szybkiej aktualizacji cen z pozostawieniem starej ceny.
1. Przyjazy i prosty sytem zakupu produktu

#### Blog

1. Aktualne wpisy w blogu zawsze na wierzchu
1. Możliwość edycji i dodawania nowych wpisów
1. Możliwość komentowania wpisów

####

## Demo

DO UZUPEŁNIENIA

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

DO UZUPEŁNIENIA
