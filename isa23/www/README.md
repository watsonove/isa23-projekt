
---
## 📝 1. Escape Room Webapp - Gruppe ISA23

---
## 📝 2. Projektbeschreibung

Deine Webanwendung war ein digitales Escape Room Spiel, das Spielern interaktive Rätsel und Herausforderungen bot, die sie lösen mussten, um zu "entkommen". Das Frontend wurde mit **HTML, CSS und JavaScript** entwickelt, um eine ansprechende und benutzerfreundliche Oberfläche zu schaffen, während **Flask** als Backend-Framework die Serverlogik und API-Endpunkte bereitstellte. Die **MariaDB-Datenbank** speicherte wichtige Spielinformationen wie Spielerfortschritte, Highscores, Rätselzustände und möglicherweise Benutzerkonten für ein personalisiertes Spielerlebnis.

---
### 📂 Ordnerstruktur des www-Verzeichnisses

**Befehl:**```bash
tree /home/isa23 -L 3```

/home/isa23
├── flask_app
│   ├── app.py
│   ├── assets
│   │   ├── img
│   │   └── script.js
│   ├── templates
│   │   ├── index.html
│   │   └── raetsel.html
│   └── venv
│       ├── bin
│       ├── include
│       ├── lib
│       ├── lib64 -> lib
│       └── pyvenv.cfg
├── index.html.save
└── www
    ├── assets
    │   └── projektinfo.pdf
    ├── css
    │   └── style.css
    ├── eis_projekt.html
    ├── img
    │   ├── gruppenbild.jpg
    │   └── logo.svg
    ├── impressum.html
    ├── index.html
    ├── js
    │   └── script.js
    ├── kontakt.html
    ├── script.html
    └── ueber_uns.html

---
## 🛠️ 3. Verwendete Technologien und Versionen

### 🔢 Python Version

**Befehl:```python3 --version```

Python 3.10.12

---
### 🔢 Flask Version

**Befehl:**```source venv/bin/activate
pip show flask | grep Version```

Flask Version: 3.1.1

---
### 🔢 MariaDB Version

**Befehl:**```
mysql --version```

Ver 15.1 Distrib 10.6.22-MariaDB

---
### 🔢 Git Version

**Befehl:**```
git --version```

Git 2.34.1

---
### 🔢 Frontend Technologien

HTML, CSS, JavaScript (verwenden Standardbrowser wie Chrome oder Firefox)

---
## 📝 4. Tutorials & Inhalte

- **U1:** SSH Schlüssel erstellen und Verbindung zum Server ✅
	- Ich habe die Risiken der Passwort-Authentifizierung bei SSH recherchiert und die Funktionsweise sowie Vorteile der schlüsselbasierten Authentifizierung erklärt.
	- Ich habe ein SSH-Schlüsselpaar mit dem Befehl `ssh-keygen -t rsa -b 2048` erstellt und den Unterschied zwischen privatem und öffentlichem Schlüssel verstanden.
	- Ich habe meinen öffentlichen SSH-Schlüssel zusammen mit meinem Gruppennamen via Slack oder Mail an Herrn Franke zur Hinterlegung auf dem Server übermittelt.
	
- **U2:** Erste Landingpage mit HTML/CSS ✅
	- Ich habe eine SSH-Verbindung zum Server über Port 2222 hergestellt und dabei die verschiedenen Verbindungsmöglichkeiten (PowerShell, PuTTY, Terminal) je nach Betriebssystem genutzt.
	- Ich habe eine eigene Landing Page erstellt, indem ich eine `index.html` Datei im Webverzeichnis `/home/isa##/www` angelegt und diese mit CSS- und JavaScript-Dateien erweitert habe.
	- Ich habe die technischen Grundlagen des Hosting-Systems recherchiert und die Funktionsweise von Ubuntu Server, NGINX als Webserver und SSL-Verschlüsselung für HTTPS-Verbindungen verstanden.
	
- **U3:** Mehrere Seiten & responsives Design ✅
	- Ich habe ein SSH-Schlüsselpaar mit dem Befehl `ssh-keygen -t rsa -b 4096` erstellt und den öffentlichen Schlüssel mit TextEdit geöffnet und in die Zwischenablage kopiert.
	- Ich habe eine SSH-Verbindung zum Server 89.58.62.146 mit dem Befehl `ssh benutzername@89.58.62.146` hergestellt und dabei meinen privaten Schlüssel zur Authentifizierung verwendet.
	- Ich habe beim ersten Verbindungsaufbau die Authentizität des Hosts bestätigt, indem ich "yes" eingegeben habe, um die Verbindung zu etablieren.
	
- **U4:** Flask Hello World ✅
	- Ich habe eine SSH-Verbindung zum Server hergestellt und eine virtuelle Python-Umgebung mit `python3 -m venv meinprojekt-venv` erstellt und mit `source meinprojekt-venv/bin/activate` aktiviert.
	- Ich habe Flask in der virtuellen Umgebung installiert und eine einfache "Hallo Welt!"-Webanwendung entwickelt, die auf Port 5001 läuft und HTTP-Anfragen verarbeitet.
	- Ich habe die Flask-Anwendung gestartet und sie über ein iframe in meine bestehende Homepage integriert, um die neue Funktionalität nahtlos in die vorhandene Webseite einzubetten.
	
- **U5:** Escape Room Projekt starten ✅
	- Ich habe mir ein eigenes Rätsel überlegt und eine kreative Rätselidee entwickelt, die mathematisch, logisch oder wortbasiert sein kann.
	- Ich habe mich mit meinen Kommilitonen abgestimmt, um Doppelungen bei den Rätseln zu vermeiden, und die Machbarkeit sowie den Schwierigkeitsgrad meines Rätsels überprüft.
	- Ich habe meine Rätselidee stichwortartig zusammengefasst und sie mit Herrn Franke oder Herrn Müller abgeklärt, um sicherzustellen, dass sie passt und wertvolles Feedback zu erhalten.
	
- **U6:** Datenbank (MariaDB) einbinden ❌
- **U7:** Git Grundlagen & Versionierung ❌

---
## ⚙️ 5. Installationsanleitung

1. Virtuelle Umgebung erstellen:
		python3 -m venv venv
		source venv/bin/activate
		
2. Flask installieren:
		pip install flask
		
3. Anwendung starten:
		python app.py
		
4. Im Browser aufrufen
		Öffne deinen Browser und gehe zu: http://isa23.edumake.de:8023
		
---
## 💡 6. Nutzung & Bedienung

### Funktionen:

Die Escape Room App bietet verschiedene Rätsel, die nacheinander gelöst werden müssen.
Jede Gruppe (z.B. isa16) hat eigene Rätsel, die miteinander verknüpft sind. Nach der Lösung eines Rätsels wird man automatisch
zum nächsten weitergeleitet, bis alle Rätsel abgeschlossen sind.

### Benutzung:

Nutzer melden sich auf der Webanwendung an und sehen das aktuelle Rätsel. Sie geben ihre Antwort im Textfeld ein und senden diese ab.
Bei richtiger Lösung öffnet sich das nächste Rätsel. Die App speichert den Fortschritt und stellt sicher, dass alle Rätsel in der
richtigen Reihenfolge gelöst werden.

---
## 🐞 7. Bekannte Probleme & Bugs

- Die Benutzeroberfläche ist auf kleinen Bildschirmen (z. B. Handy) noch nicht vollständig responsiv.
- Manchmal gibt es Verzögerungen oder Fehler bei der Datenbankabfrage der Rätsel, was den Spielfluss stören kann.
- Fehlermeldungen bei falschen Eingaben sind nicht immer klar oder ausführlich genug.
- Fortschrittsanzeige könnte noch besser visualisiert werden.
- Keine Möglichkeit, den Spielfortschritt zu speichern und später fortzusetzen (kein Login-System).

---
## ✨ 8. Reflexion

Reflektieren Sie Ihre Lernerfahrungen ehrlich.

### ✅ Was lief gut?

- Die grundlegende Entwicklung der Escape Room App mit HTML, CSS, JavaScript und Flask hat gut funktioniert.
- Besonders zufrieden war ich mit der Integration der Datenbank (MariaDB), sodass die Rätsel dynamisch verwaltet werden können.
- Das Verknüpfen der einzelnen Rätsel und die Weiterleitung nach erfolgreicher Lösung lief stabil.
- Die Zusammenarbeit im Team und der Austausch mit Kommiliton:innen haben die Lösungsfindung unterstützt.

---
### ⚠️ Wo gab es Schwierigkeiten?

- Die Gestaltung eines responsiven Designs
- Komplexere Datenbankabfragen und das Handling von Sessions bzw. Nutzerfortschritt
- Fehlerbehandlung und aussagekräftige Fehlermeldungen im Frontend umzusetzen, hat mehr Zeit benötigt als geplant.
- Zeitmanagement, um alle Funktionen rechtzeitig fertigzustellen, war manchmal knapp.
- Außerdem musste ich immer wieder daran denken, den Server zu aktivieren, bevor ich die Anwendung testen konnte,  das hat teilweise zu Verzögerungen geführt.

---
### 🎯 Was möchten Sie im M2-Softwareprojekt vertiefen?

- Verknüpfung Front- und Backend
- Robotics

---
## 📋 9. To-Do-Liste

✏️ **Aufgabe:** Markieren Sie, was bereits erledigt ist, und ergänzen Sie offene Punkte.

- [x] SSH-Verbindung hergestellt
- [x] HTML Landing Page erstellt
- [x] CSS gestaltet
- [x] Flask installiert & gestartet
- [x] Escape Room Rätsellogik programmiert
- [ ] MariaDB eingebunden
- [x] Responsives Design finalisiert
- [ ] Dokumentation abgeschlossen

---
Ende der README.md

