window.SITE_CONFIG = {
  defaultLanguage: "de",
  supportedLanguages: ["de", "en"],

  restaurantName: "Restaurant Musterküche",
  slogan: {
    de: "Mediterrane Küche & Grill in Dorsten",
    en: "Mediterranean cuisine & grill in Dorsten"
  },
  cuisineType: {
    de: "Mediterrane Küche & Grill",
    en: "Mediterranean cuisine & grill"
  },

  logoPath: "assets/img/logo-placeholder.svg",
  heroImagePath: "assets/img/hero-restaurant.png",
  primaryColor: "#8a2f1c",
  secondaryColor: "#173f35",
  accentColor: "#d6a247",
  textColor: "#231f20",
  backgroundColor: "#fffaf3",

  phone: "+49 000 000000",
  email: "info@musterkueche.de",
  whatsappNumber: "+49000000000",
  address: "Musterstraße 1",
  city: "Dorsten",
  postalCode: "46282",

  googleMapsEmbedUrl: "https://www.google.com/maps?q=Musterstra%C3%9Fe%201%2C%2046282%20Dorsten&output=embed",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Musterstra%C3%9Fe%201%2C%2046282%20Dorsten",

  openingHours: [
    { days: { de: "Montag", en: "Monday" }, time: "Ruhetag", closed: true },
    { days: { de: "Dienstag - Donnerstag", en: "Tuesday - Thursday" }, time: "11:30 - 22:00" },
    { days: { de: "Freitag - Samstag", en: "Friday - Saturday" }, time: "11:30 - 23:00" },
    { days: { de: "Sonntag", en: "Sunday" }, time: "12:00 - 22:00" }
  ],

  socialLinks: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    tiktok: ""
  },

  reservationEnabled: true,
  deliveryEnabled: true,
  pickupEnabled: true,

  formProvider: "formspree",
  formEndpoint: "",

  legalCompanyName: "Restaurant Musterküche",
  ownerName: "Max Mustermann",
  vatId: "",
  impressumAddress: "Musterstraße 1, 46282 Dorsten",
  privacyEmail: "datenschutz@musterkueche.de",

  specialOffer: {
    title: {
      de: "Tagesangebot",
      en: "Today's special"
    },
    text: {
      de: "Gegrillter Hähnchenspieß mit Reis, Salat und hausgemachtem Dip.",
      en: "Grilled chicken skewer with rice, salad and homemade dip."
    },
    price: "12,90 €"
  },

  seo: {
    title: {
      de: "Restaurant Musterküche Dorsten | Mediterrane Küche & Grill",
      en: "Restaurant Musterküche Dorsten | Mediterranean cuisine & grill"
    },
    description: {
      de: "Restaurant Musterküche in Dorsten: mediterrane Küche, Grillgerichte, digitale Speisekarte, Abholung und Lieferung.",
      en: "Restaurant Musterküche in Dorsten: Mediterranean cuisine, grill dishes, digital menu, pickup and delivery."
    },
    canonicalUrl: "https://www.example-restaurant.de/"
  },

  reviews: [
    {
      name: "Anna K.",
      rating: 5,
      text: {
        de: "Sehr freundlich, frische Zutaten und die Grillgerichte schmecken hervorragend.",
        en: "Very friendly, fresh ingredients and excellent grill dishes."
      }
    },
    {
      name: "Mehmet D.",
      rating: 5,
      text: {
        de: "Schnelle Abholung, gute Portionen und eine übersichtliche Speisekarte.",
        en: "Fast pickup, generous portions and a clear menu."
      }
    },
    {
      name: "Laura S.",
      rating: 4,
      text: {
        de: "Gemütlich, sauber und ideal für ein entspanntes Abendessen.",
        en: "Cozy, clean and ideal for a relaxed dinner."
      }
    }
  ],

  galleryImages: [
    {
      src: "assets/img/gallery/interior.png",
      alt: {
        de: "Gemütlicher Restaurantbereich",
        en: "Cozy restaurant interior"
      }
    },
    {
      src: "assets/img/gallery/grill.png",
      alt: {
        de: "Frisch gegrillte Spezialitäten",
        en: "Fresh grilled specialties"
      }
    },
    {
      src: "assets/img/gallery/table.png",
      alt: {
        de: "Gedeckter Tisch im Restaurant",
        en: "Set table in the restaurant"
      }
    },
    {
      src: "assets/img/gallery/dessert.png",
      alt: {
        de: "Dessert aus der Musterküche",
        en: "Dessert from Musterküche"
      }
    },
    {
      src: "assets/img/gallery/drinks.png",
      alt: {
        de: "Erfrischende Getränke",
        en: "Refreshing drinks"
      }
    },
    {
      src: "assets/img/gallery/front.png",
      alt: {
        de: "Restaurant Außenansicht",
        en: "Restaurant exterior"
      }
    }
  ]
};
