# WDP Projekt Zespołowy

## Opis projektu

#### Strona sklepu online połączona z blogiem.

Oparta na Bootstrap a więc łatwa w rozbudowie, elastyczna. Lekka, bez obciążających pluginów. Zgodna z RWD.

#### Menu

1. Dwie wersje językowe do wyboru - polska i angielska.
2. Możliwość utworzenia konta lub zakupu bez rejestracji.

#### Strona główna

1. Możliwość porównania i kupna produktu ze strony głównej. Dla zainteresowanych szczegółowa karta produktu.
2. Szybka zmiana ilości wyświetlanych produktów.
3. Intuicyjny system oceny produktów.
4. Możliwość szybkiej aktualizacji cen z pozostawieniem starej ceny.
5. Przyjazy i prosty sytem zakupu produktu

#### Blog

1. Aktualne wpisy w blogu zawsze na wierzchu
2. Możliwość edycji i dodawania nowych wpisów
3. Możliwość komentowania wpisów

## Demo

[Link do podglądu strony live](https://cocky-jepsen-075be7.netlify.com/)

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

### Struktura projektu

1. **images** - tutaj trzymamy wszystkie zdjęcia z poszególnych sekcji,
2. **partials** - tutaj znajdują się wszystkie sekcje ze stron projektu, każdy plik hmtl to osobna sekcja,
3. **sass** - tutaj znajdują się wszystkie pliki stylów jak i plik główny style.scss. W folderze components znajdują sie pliki stylów poszególnych sekcji. Każdy plik .scss to osoba sekcja,
4. **scripts** - tutaj znajdują się wszystkie pliki Java Script. Jest tutaj główny plik app.js jak i pliki .js użytych bibliotek, frameworków oraz pluginów,
5. **webfonts** - tutaj znajdują się wszystkie pliki czcionek używanych w projekcie

### Praktyki przyjęte w projekcie

1. Wszystkie pliki niezbędne do poprawnego działania projektu znajdują się lokalnie w katalogu projektu i nie są hostowane z serwerów CDN,
2. Każda sekcja zakodowana w pliku .html jest osobnym plikiem .html który podpinamy do pliku index.html,
3. Każda plik stylu sekcji jest osobnym plikiem .scss który importujemy do głównego pliku stylów,
4. Każda sekcja (plik .hmtl i .scss) posiadają swoje nazwy w zależności od położenia na stronie. Header zaczyna się od 10... kończąc na 90 - footer,
5. W pliku variables.scss definiujemy wszystkie kolory używane w projekcie i trzymamy się używania zmiennych przypisanych do tych kolorów,
6. Nazwy zmiennych w variables.scss powinny mówić nam jasno o tym do jakiej sekcji należą, czy jest to styl czy kolor, co dokładnie stylujemy,
7. Commity powinny być w miarę krótkie i zwięzłe, określające do zrobiliśmy lub jaki problem rozwiązaliśmy,
8. Przy zakładaniu PR trzymajmy się nazewnictwa tasku z którego tworzymy PR oraz starajmy opisać się problem i rozwiązanie problemu,
9. W projekcie korzystamy z pakietu icon Font Awesome - w pliku icons.scss tego pakietu mamy wszystkie przydatne prefixy
