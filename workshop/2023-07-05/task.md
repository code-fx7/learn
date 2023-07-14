Schere, Stein, Papier
==========
(Javascript)
Das Spiel Schere, Stein, Papier ist weitläufig bekannt.
Gespielt wird mit zwei Spielern
Jeder Spieler bildet geheim eine Figur (Stein, Schere oder Papier) mit seiner Hand.
Beide Spieler zeigen gleichzeitig ihre Hand vor.
Es kommt zur Auswertung der Runde.
Dabei gelten folgende Regeln:
Die Schere schneidet das Papier, die Schere gewinnt
Das Papier wickelt den Stein ein, das Papier gewinnt
Der Stein macht die Schere stumpf, der Stein gewinnt
Wählen beide Spieler dieselbe Figur aus kommt es zu einem Gleichstand und die Runde wird wiederholt.
Gewonnen hat der Spieler, der zwei aus drei Spielen gewonnen hat.
Aufgaben:
Gefordert ist die Abbildung des Spiels gegen einen Computergegner.
Implementiert eine Funktion, die aus den drei möglichen Figuren eine Figur zufällig auswählt.
Implementiert eine Funktion, die die Auswahl einer Figur durch einen Spieler ermöglicht. Wie der Spieler die Figur auswählt ist euch überlassen. (Denkt bei der Umsetzung an Promises, await und async)
Implementiert eine Funktion, die zwei Figuren miteinander vergleicht und das Ergebnis zurückliefert.
Implementiert eine Funktion, die ein Spiel mit bis zu drei Runden abbildet und am Ende den Gewinner ermittelt. Ein Spieler tritt dabei gegen einen Computergegner an der zufällig eine Figur wählt. Ein etwaiger Gleichstand (beide Spieler wählen dieselbe Figur) wird dabei sofort wiederholt.
(Bonus) Es gibt drei verschiedene Arten von Computergegnern (Siehe unten)
(Bonus) Ermöglicht weitere Figuren im Spiel (Stein, Papier, Schere, Echse, Spock)
Gegner Arten (Aufgabe 5):
Alice wählt immer zufällig irgendeine Figur aus
Bob wählt immer die Figur, welche die zuletzt vom Gegenspieler gezeigte schlagen würde
Charlie wählt immer die Figur aus, welche die Figur schlägt die seine eigene in der Vorangegangenen geschlagen hätte.
  Dabei gilt, dass der Computergegner in der ersten Runde eine zufällige Figur wählt und für die darauffolgenden beiden Runden eine der drei Verhaltensmuster annimmt.
  