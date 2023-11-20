Interpreter
(Javascript)
Brainfuck ist eine esoterische Programmiersprache.
Sie eignet sich Aufgrund ihrer Komplexität (daher auch der Name) nicht gut für die Programmierung.
Nichtsdestotrotz ist die Implementierung des Gegenstücks (Compiler oder Interpreter) mit relativ wenig Aufwand möglich, da es in dieser Sprache nur acht verschiedene Instruktionen gibt die abzubilden sind:

+ Byte am Pointer um 1 inkrementieren
- Byte am Pointer um 1 reduzieren
> Pointer um eine Stelle nach rechts verschieben
< Pointer um eine Stelle nach links verschieben
. Ausgabe des Bytes am Pointer als Ascii Zeichen
, Einlesen eines Zeichens und Speicherung am Pointer als Ascii Code
[ Wenn Byte am Pointer gleich 0 ist springe zum nächsten ] und führe den Code nach diesem Zeichen weiter aus
] Wenn Byte am Pointer ungleich 0 ist springe zum vorherigen [ und führe den Code nach diesem Zeichen weiter aus

Die aktuelle Position im Speicher wird als Pointer bezeichnet
Der Speicher (Memory Blocks oder auch Memory Cells) ist in der Regel 30000Byte groß.
Neben dem Speicher und dem Pointer muss auch die aktuelle Position (Cursor) festgehalten werden um die Instruktionen [ und ] zu ermöglichen.
Ein Beispielprogramm welches Hello World ausgibt und danach auf eine beliebige Taste wartet sieht wie folgt aus:
++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.+++.
Aufgaben:
Gefordert ist die Erstellung eines Programms welches ein in Brainfuck geschriebenes Programm ausführen kann.
Achtet dabei bitte darauf, dass die Funktionen pure sind (Gleich Eingabeparameter erzeugen einen gleichen Return Value)
Gegeben ist ein Objekt für den aktuellen State:

let state = {
    cursor: 0,
    memory: {
        blocks: [...Array(30000).keys()].map(() => 0),
        pointer: 0
    }
};



Schreibt Funktionen die die Instruktionen + und - abbilden und den Speicher manipulieren
Schreibt Funktionen die die Instruktionen > und < abbilden um den Pointer zu verschieben
Schreibt Funktionen die die Instruktionen . und , abbilden um eine Eingabe und eine Ausgabe ermöglichen
Bonus: Schreibt Funktionen die die Instruktionen [ und ] abbilden um Schleifen zu ermöglichen.
Das folgende Programm sollte helfen: >++[<+++>-] Es berechnet 2*3 und schreibt das Ergebnis in die erste Speicherzelle.
Ihr benötigt dafür die Funktionen aus den Aufgaben 1 und 2
Bonus: Fügt alles zusammen um das oben genannte Beispielprogramm auszuführen