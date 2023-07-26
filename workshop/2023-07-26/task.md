Substitutionschiffren
==========
(Javascript)
Ein Beispiel für eine Substitutionschiffre ist die Caesar Verschlüsselung. Hierbei werden die Buchstaben des Alphabets um eine gewählte Anzahl an Stellen im Alphabet nach rechts verschoben. Diese Anzahl an Stellen die zur Verschiebung verwendet werden ist der Schlüssel.
Ein geläufiges Beispiel dabei nennt sich ROT-13 bei dem die Buchstaben im Alphabet um genau 13 Zeichen nach rechts verschoben werden. Da das Alphabet 26 Grundbuchstaben enthält kann man denselben Schlüssel für die Ver- und Entschlüsselung verwenden.
Aufgaben:
Gefordert ist die Erstellung eines Programms welches durch das Substitutionsverfahren die Verschlüsselung von Texten ermöglicht.
1. Schreibt eine Funktion die ein Alphabet um eine angegebene Anzahl an Zeichen verschiebt (rotiert). Zum Beispiel: (rot3)A=>D,B=>E,...
2. Schreibt eine Funktion die euch eine Map mit den Buchstaben und den entsprechenden Ersetzungen des rot Mechanismus liefert.
3. Schreibt eine Funktion die diese Übersetzungsmap nutzt um einen String zu verschlüsseln.
4. Schreibt eine Funktion die die Übersetzungsmap umkehrt um damit einen Text zu entschlüsseln.
5. Bonus: Nutzt eine andere Art eine Map zur Substitution zu erstellen anstatt einfach nur die Buchstaben zu verschieben.