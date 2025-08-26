# Installation (Raspberry Pi 4, Raspberry Pi OS)

## 1) System vorbereiten
```bash
sudo apt update
sudo apt install -y git nodejs npm mariadb-server mpg123 alsa-utils
```

## 2) Projekt installieren
```bash
# Projektordner auf den Pi kopieren (oder Repo klonen)
cd led-sound-bachlauf
npm install
npm run initdb
```

## 3) MariaDB einrichten
```bash
sudo service mariadb start
sudo mysql -u root -e "CREATE DATABASE IF NOT EXISTS nativity;"
sudo mysql -u root -e "CREATE USER IF NOT EXISTS 'pi'@'localhost' IDENTIFIED BY '';"
sudo mysql -u root -e "GRANT ALL PRIVILEGES ON nativity.* TO 'pi'@'localhost'; FLUSH PRIVILEGES;"
```

## 4) Autostart per systemd
```bash
sudo cp systemd/nativity.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable nativity
sudo systemctl start nativity
```

## 5) WLAN-Access-Point (optional)
Skript `scripts/setup_wifi_ap.sh` richtet `hostapd` + `dnsmasq` ein (SSID **NativityAP**).
```bash
sudo bash scripts/setup_wifi_ap.sh
```

## 6) Audio-Dateien
MP3-Dateien in den Ordner `audio/` legen:
- Tag.mp3
- Tag-Nacht.mp3
- Nacht.mp3
- Nacht-Tag.mp3

Sprachdateien werden auf der Audio-Seite registriert und während Kalender-Zeiträumen von **Modul 2** automatisch abgespielt. Während einer Sprachdatei wird die Musik-Lautstärke reduziert.

## 7) Start
Server unter `http://<Pi-IP>:8080`. Navigation im Kopfbereich aller Seiten.
