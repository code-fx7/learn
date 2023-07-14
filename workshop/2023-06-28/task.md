(Javascript oder Typescript) Prüfziffern und Quersummen
Prüfziffern werden im Alltag in den verschiedensten Situationen genutzt. Zum Beispiel enthalten IBAN, ISBN, Personalausweisnummern und Führerscheinnummern eine Prüfziffer.
Eine Prüfsumme wird dazu verwendet um zum Beispiel falsche Eingaben sowie Übertragungsfehler zu minimieren.
Aufgaben:
Gewünscht ist die Erzeugung und Überprüfung einer Prüfziffer (Eine einstellige Prüfsumme).
Die Prüfziffer die hier verlangt wird, wird nur durch Quersummen gebildet. Es wird also so lange aus der Nummer eine Quersumme gebildet, dass am Ende nur noch eine einzelne Zahl übrig bleibt.
Dies ist die Prüfziffer.
Beispiele:
1234 = 10 = 1
9999 = 36 = 9
4444 = 16 = 8
9876 = 30 = 3
123456789 = 45 = 9
99999999999 = 99 = 18 = 9
Für die Aufgaben dürft ihr euch so viele Hilfsfunktionen schreiben wie ihr möchtet.
Implementiert eine Funktion die aus einem String mit beliebig vielen Ziffern eine Prüfziffer auf Basis der Bildung von Quersummen erzeugt und gebt die Zahl mit angehängter Prüfziffer zurück
Implementiert eine Funktion die einen String der mit der oben genannten Funktion erstellt wurde anhand seiner Prüfziffer überprüft. (Es wäre gut, wenn ihr Teile des Codes aus der vorherigen Aufgabe wiederverwenden könnt)
Bonusaufgabe: Implementiert eine Funktion die einen zufälligen String erzeugt. Der Funktion wird nur mitgeteilt wie lang dieser String sein soll. Dieser String kann im Anschluss an die beiden oben genannten Funktionen zur Bildung und Überprüfung der Prüfziffer verwendet werden.
2. Bonusaufgabe: Ändert die Funktion zur Bildung und die Funktion zur Überprüfung so ab, dass ggf. eine andere Methode zur Verwendung einer Prüfziffer verwendet werden kann.
