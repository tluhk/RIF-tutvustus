# Ostunimekirja rakendus

Lihtne ja moodne veebirakendus ostunimekirja haldamiseks. Rakendus on kirjutatud puhtas HTML-is, CSS-is ja JavaScriptis.

## Funktsioonid

### Põhifunktsioonid
- ✅ Toodete lisamine nimekiri
- ✅ Toodete märkimine ostetuteks/ostmatuteks
- ✅ Toodete muutmine
- ✅ Toodete kustutamine
- ✅ Koguse määramine igale tootele

### Filtreerimine ja organiseerimine
- 🔍 Filtreerimine (kõik, ostmata, ostetud)
- 📊 Reaalajas statistika
- 🗑️ Ostetud toodete masseemaldamine

### Kasutajamugavus
- 📱 Mobiilisõbralik disain
- 💾 Automaatne andmete salvestamine brauserisse
- 🔔 Kasutajasõbralikud teatised
- ⌨️ Klaviatuuri otseteed
- 🎨 Moodne ja intuitiivne liides

### Täiendavad võimalused
- 📤 Andmete eksportimine JSON formaadis
- 📥 Andmete importimine (drag & drop)
- 🌐 Töötab offline'is (kui on installitud Service Worker)

## Kasutamine

### Toodete lisamine
1. Sisesta toote nimi teksti väljale
2. Määra kogus (vaikimisi 1)
3. Vajuta "Lisa" nuppu või klõpsa Enter

### Toodete haldamine
- **Märkimine ostetuteks**: Klõpsa toote kõrval olevale linnukesele
- **Muutmine**: Klõpsa kollasele muutmise nupule
- **Kustutamine**: Klõpsa punasele kustutamise nupule

### Filtreerimine
Kasuta filtreid ülaosas:
- **Kõik**: Näitab kõiki tooteid
- **Ostmata**: Näitab ainult ostmata tooteid
- **Ostetud**: Näitab ainult ostetud tooteid

### Klaviatuuri otseteed
- `Ctrl/Cmd + N`: Uue toote lisamine (fokuseerib sisestusvälja)
- `Ctrl/Cmd + E`: Andmete eksportimine
- `Esc`: Muutmise modali sulgemine

### Andmete varundamine
- **Eksportimine**: Kasuta `Ctrl/Cmd + E` või lisa see funktsioon nupuga
- **Importimine**: Lohista JSON fail brauseri aknasse

## Tehnilised detailid

### Kasutatud tehnoloogiad
- **HTML5**: Semantiline märgistus
- **CSS3**: 
  - Flexbox ja Grid layout
  - CSS gradientid ja animatsioonid
  - Mobiilisõbralik responsiivsus
  - CSS muutujad
- **Vanilla JavaScript (ES6+)**:
  - Klasside süntaks
  - Local Storage API
  - Drag & Drop API
  - Event handling

### Välised ressursid
- **Google Fonts**: Inter font
- **Font Awesome**: Ikoonid

### Brauseri tugi
- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Mobiilsed brauserid

## Struktuuri ülevaade

```
ostunimekiri/
├── index.html          # Peamine HTML fail
├── styles.css          # Kõik stiilid
├── script.js           # Rakenduse loogika
└── README.md           # See fail
```

## Paigaldamine ja käivitamine

1. Laadi alla kõik failid
2. Ava `index.html` oma brauseris
3. Või kasuta kohalikku serverit:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

## Funktsionaalsuse laiendamine

Rakendust saab kergesti laiendada:

### Uute funktsioonide lisamine
- Kategooriate süsteem
- Tähtajad toodetele
- Hinnakalkulaator
- Nimekirjade jagamine
- Pildiüleslaadimine

### Andmebaasi integratsioon
- SQLite kohalikuks kasutamiseks
- Firebase reaalajas sünkroniseerimiseks
- REST API backend

### PWA funktsioonid
- Service Worker offline töötamiseks
- Web App Manifest
- Push notifikatsioonid

## Turvalisus

- XSS kaitse (HTML escaping)
- Andmete valideerimine
- Turvaline Local Storage kasutamine

## Ligipääsetavus

- ARIA labelid
- Klaviatuuri navigatsioon
- Kontrastsed värvid
- Ekraanilugeja tugi

## Autor

Rakendus on loodud hariduslikel eesmärkidel näitamaks kaasaegseid veebirakenduse arendamise praktikaid.
