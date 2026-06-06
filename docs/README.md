# QR-Speisekarte

Der QR-Code in `assets/img/qr-menu-placeholder.png` ist nur ein Platzhalter.

Für den echten Kunden muss der QR-Code auf diese Seite zeigen:

```text
https://www.kunden-domain.de/menu.html
```

Vorgehen:

1. Website veröffentlichen und echte Domain prüfen.
2. QR-Code mit der finalen URL zu `menu.html` erzeugen.
3. PNG herunterladen.
4. Datei `assets/img/qr-menu-placeholder.png` ersetzen.
5. QR-Code auf Smartphone testen, bevor er gedruckt wird.

Hinweis: Wenn sich die Domain oder URL ändert, muss auch der gedruckte QR-Code neu erzeugt werden.

## Design-Themes Wechseln

Das Standard-Theme wird in `data/site-config.js` gesetzt:

```js
theme: "premium-dark"
```

Verfügbare Theme-Namen:

- `premium-dark`
- `cocktail-neon`
- `imbiss-pro`
- `cafe-minimal`
- `german-gasthaus`

Der Entwickler-Preview-Switcher wird ebenfalls in `data/site-config.js` aktiviert oder deaktiviert:

```js
showThemeSwitcher: true
```

Für die Übergabe an einen echten Kunden sollte der Switcher meistens deaktiviert werden:

```js
showThemeSwitcher: false
```

Alle Themes können über diese Seite verglichen werden:

```text
theme-preview.html
```

Ein einzelnes Theme kann per URL getestet werden:

```text
index.html?theme=premium-dark
index.html?theme=cocktail-neon
index.html?theme=imbiss-pro
index.html?theme=cafe-minimal
index.html?theme=german-gasthaus
```

Empfehlung nach Betriebstyp:

- `premium-dark`: Fine Dining, Steakhouse, Wine Bar, Premium Restaurant.
- `cocktail-neon`: Cocktailbar, Lounge, Night Bar, Shisha Bar, Event Bar.
- `imbiss-pro`: Döner, Burger, Pizza, Grill, Chicken, Snack Bar, Takeaway.
- `cafe-minimal`: Café, Bäckerei, Brunch, Frühstück, Eiscafé.
- `german-gasthaus`: Deutsches Restaurant, Biergarten, Familienrestaurant, traditionelle Küche.

Theme-spezifische Hero-Bilder liegen in `assets/img/`:

- `hero-premium-dark.jpg`
- `hero-cocktail-neon.jpg`
- `hero-imbiss-pro.jpg`
- `hero-cafe-minimal.jpg`
- `hero-german-gasthaus.jpg`

Demo-Fotos fuer Gerichte und Galerie liegen lokal in:

- `assets/img/food/photos/`
- `assets/img/gallery/`

Die Demo-Fotos sind lokale Stockfotos aus Pexels. Pexels erlaubt laut Lizenzseite die Nutzung in Websites und Templates ohne Pflicht zur Namensnennung, trotzdem sollten vor Kundenlieferung echte Restaurantfotos eingesetzt oder die Nutzungsrechte/Lizenzen nochmals geprueft werden: https://www.pexels.com/license/

Gute Food-Fotos sind fuer Restaurant-Websites sehr wichtig.

## Google-Bewertungen

Die Startseite und Kontaktseite zeigen einen Google-Bewertungsblock. Die Werte werden in `data/site-config.js` gepflegt:

```js
googlePlacesApiKey: "",
googlePlaceId: "",
googlePlacesReviewLimit: 3,
googleReviewLink: "https://www.google.com/maps/...",
googleRating: 4.1,
googleReviewCount: 564
```

Fallback ohne API-Key:

- `googleRating` und `googleReviewCount` werden direkt aus der Config angezeigt.
- `googleReviewLink` oeffnet das Google-Profil oder die Google Maps Suche.

Automatisch aus Google Places laden:

1. Google Maps JavaScript API und Places API im Google Cloud Projekt aktivieren.
2. Browser-Key mit HTTP-Referrer-Restriktion erstellen.
3. `googlePlacesApiKey` und `googlePlaceId` eintragen.
4. Optional `googlePlacesReviewLimit` auf 1-5 setzen.

Wenn `googlePlaceId` vorhanden ist, erzeugt das Template automatisch einen direkten Bewertungslink:

```text
https://search.google.com/local/writereview?placeid=PLACE_ID
```

Mit `googlePlacesApiKey` + `googlePlaceId` aktualisiert das Template automatisch:

- Bewertung (`rating`)
- Anzahl Bewertungen (`user_ratings_total`)
- Google Maps URL
- bis zu 5 von Google gelieferten Rezensionen

Wichtig: Eine normale statische Website kann neue Bewertungen nicht selbst in Google Maps veroeffentlichen. Gaeste muessen die Bewertung in Google/Google Maps absenden. Der Button auf der Website fuehrt deshalb zum Google-Profil bzw. zur Google-Bewertungsmaske.

Fuer alle Bewertungen, Antworten auf Rezensionen oder Business-Management ist ein eigener Backend-Service mit Google Business Profile API und OAuth noetig. API-Schluessel im statischen Frontend muessen immer per HTTP-Referrer eingeschraenkt werden.
