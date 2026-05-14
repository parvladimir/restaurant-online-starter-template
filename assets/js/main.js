(function () {
  "use strict";

  const config = window.SITE_CONFIG || {};
  const root = document.documentElement;
  const storageKey = "restaurant-template-language";
  const themeStorageKey = "restaurant-template-preview-theme";
  const availableThemes = [
    "premium-dark",
    "cocktail-neon",
    "imbiss-pro",
    "cafe-minimal",
    "german-gasthaus"
  ];
  const supportedLanguages = config.supportedLanguages || ["de", "en"];
  let currentLanguage = localStorage.getItem(storageKey) || config.defaultLanguage || "de";
  let activeTheme = resolveInitialTheme();

  if (!supportedLanguages.includes(currentLanguage)) {
    currentLanguage = config.defaultLanguage || "de";
  }

  const translations = {
    de: {
      navHome: "Start",
      navMenu: "Speisekarte",
      navGallery: "Galerie",
      navContact: "Kontakt",
      navImpressum: "Impressum",
      navPrivacy: "Datenschutz",
      callNow: "Jetzt anrufen",
      viewMenu: "Speisekarte ansehen",
      planRoute: "Route planen",
      orderWhatsApp: "Per WhatsApp bestellen",
      openQrMenu: "QR-Speisekarte öffnen",
      specialIntro: "Heute empfohlen",
      menuPreviewTitle: "Beliebte Gerichte",
      menuPreviewText: "Ein schneller Einblick in die digitale Speisekarte.",
      digitalMenuTitle: "Digitale Speisekarte",
      digitalMenuText: "Der QR-Code führt direkt zur mobilen Speisekarte und kann auf Tischen, Flyern oder Schaufenstern verwendet werden.",
      openingHoursTitle: "Öffnungszeiten",
      contactTitle: "Kontakt",
      addressTitle: "Adresse",
      routeTitle: "Anfahrt",
      reviewsTitle: "Stimmen unserer Gäste",
      businessInfoTitle: "Restaurant-Informationen",
      cuisine: "Küche",
      delivery: "Lieferung",
      pickup: "Abholung",
      reservation: "Reservierung",
      available: "verfügbar",
      unavailable: "nicht verfügbar",
      phone: "Telefon",
      email: "E-Mail",
      closed: "Ruhetag",
      allCategories: "Alle",
      searchPlaceholder: "Gerichte suchen...",
      noResults: "Keine passenden Gerichte gefunden.",
      allergens: "Allergene",
      unavailableItem: "Aktuell nicht verfügbar",
      popular: "Beliebt",
      vegetarian: "Vegetarisch",
      vegan: "Vegan",
      spicy: "Scharf",
      send: "Anfrage senden",
      formHint: "Wir melden uns schnellstmöglich zurück.",
      legalNotice: "Vorlage: Bitte rechtlich prüfen lassen.",
      footerText: "Restaurant Website, digitale Speisekarte und lokale Sichtbarkeit.",
      skipToContent: "Zum Inhalt springen",
      languageLabel: "Sprache wählen",
      heroEyebrow: "Heute frisch in Dorsten",
      heroLead: "Saftige Grillgerichte, Pizza und frische Klassiker direkt ansehen, anrufen oder per WhatsApp bestellen.",
      specialTitle: "Tagesangebot",
      whyTitle: "Schnell wählen, einfach bestellen",
      whyText: "Adresse, Öffnungszeiten, Speisekarte und Kontakt sind mobil sofort erreichbar.",
      orderBadgeFresh: "Frisch zubereitet",
      orderBadgePickup: "Abholung möglich",
      orderBadgeDelivery: "Lieferung möglich",
      trustGoogle: "Google Bewertung",
      trustFast: "Schnell abholbereit",
      trustFreshTitle: "Frisch",
      trustFreshText: "Täglich zubereitet",
      trustLocalTitle: "Lokal",
      bestsellerEyebrow: "Am meisten bestellt",
      bestsellerTitle: "Bestseller, die sofort Hunger machen",
      bestsellerText: "Große Food-Cards, klare Preise und direkte Wege zur Bestellung.",
      chooseDish: "Auswählen",
      mobileOrderCall: "Anrufen",
      mobileOrderMenu: "Menü",
      mobileOrderWhatsApp: "WhatsApp",
      menuPageTitle: "Digitale Speisekarte",
      menuPageText: "Alle Gerichte sind nach Kategorien sortiert und können schnell durchsucht werden.",
      galleryPageTitle: "Galerie",
      galleryPageText: "Einblicke in Küche, Gastraum und ausgewählte Spezialitäten.",
      contactPageTitle: "Kontakt & Reservierung",
      contactPageText: "Für Reservierungen, Bestellungen oder Fragen erreichen Sie uns telefonisch, per WhatsApp oder über das Formular.",
      nameLabel: "Name",
      messageLabel: "Nachricht",
      dateLabel: "Datum",
      personsLabel: "Personen",
      consentLabel: "Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden.",
      qrHint: "QR-Code scannen oder Button öffnen.",
      backHome: "Zur Startseite",
      pageNotFoundTitle: "Seite nicht gefunden",
      pageNotFoundText: "Die gewünschte Seite existiert nicht oder wurde verschoben.",
      legalTemplateTitle: "Wichtiger Hinweis",
      impressumTitle: "Impressum",
      privacyTitle: "Datenschutzerklärung"
    },
    en: {
      navHome: "Home",
      navMenu: "Menu",
      navGallery: "Gallery",
      navContact: "Contact",
      navImpressum: "Legal notice",
      navPrivacy: "Privacy",
      callNow: "Call now",
      viewMenu: "View menu",
      planRoute: "Get directions",
      orderWhatsApp: "Order via WhatsApp",
      openQrMenu: "Open QR menu",
      specialIntro: "Recommended today",
      menuPreviewTitle: "Popular dishes",
      menuPreviewText: "A quick look at the digital menu.",
      digitalMenuTitle: "Digital menu",
      digitalMenuText: "The QR code links directly to the mobile menu and can be used on tables, flyers or windows.",
      openingHoursTitle: "Opening hours",
      contactTitle: "Contact",
      addressTitle: "Address",
      routeTitle: "Directions",
      reviewsTitle: "Guest reviews",
      businessInfoTitle: "Restaurant information",
      cuisine: "Cuisine",
      delivery: "Delivery",
      pickup: "Pickup",
      reservation: "Reservation",
      available: "available",
      unavailable: "not available",
      phone: "Phone",
      email: "Email",
      closed: "Closed",
      allCategories: "All",
      searchPlaceholder: "Search dishes...",
      noResults: "No matching dishes found.",
      allergens: "Allergens",
      unavailableItem: "Currently unavailable",
      popular: "Popular",
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      spicy: "Spicy",
      send: "Send request",
      formHint: "We will get back to you as soon as possible.",
      legalNotice: "Template: Please have it legally reviewed.",
      footerText: "Restaurant website, digital menu and local visibility.",
      skipToContent: "Skip to content",
      languageLabel: "Choose language",
      heroEyebrow: "Fresh today in Dorsten",
      heroLead: "Juicy grill dishes, pizza and fresh classics ready to view, call or order via WhatsApp.",
      specialTitle: "Today's special",
      whyTitle: "Choose quickly, order easily",
      whyText: "Address, opening hours, menu and contact details are instantly available on mobile.",
      orderBadgeFresh: "Freshly prepared",
      orderBadgePickup: "Pickup available",
      orderBadgeDelivery: "Delivery available",
      trustGoogle: "Google rating",
      trustFast: "Fast pickup",
      trustFreshTitle: "Fresh",
      trustFreshText: "Prepared daily",
      trustLocalTitle: "Local",
      bestsellerEyebrow: "Most ordered",
      bestsellerTitle: "Bestsellers that make guests hungry",
      bestsellerText: "Large food cards, clear prices and direct paths to order.",
      chooseDish: "Choose",
      mobileOrderCall: "Call",
      mobileOrderMenu: "Menu",
      mobileOrderWhatsApp: "WhatsApp",
      menuPageTitle: "Digital menu",
      menuPageText: "All dishes are grouped by category and can be searched quickly.",
      galleryPageTitle: "Gallery",
      galleryPageText: "A look at the kitchen, dining room and selected specialties.",
      contactPageTitle: "Contact & reservation",
      contactPageText: "For reservations, orders or questions, reach us by phone, WhatsApp or the form.",
      nameLabel: "Name",
      messageLabel: "Message",
      dateLabel: "Date",
      personsLabel: "Guests",
      consentLabel: "I agree that my details may be processed to handle the request.",
      qrHint: "Scan the QR code or open the button.",
      backHome: "Back home",
      pageNotFoundTitle: "Page not found",
      pageNotFoundText: "The requested page does not exist or has moved.",
      legalTemplateTitle: "Important note",
      impressumTitle: "Legal notice",
      privacyTitle: "Privacy policy"
    }
  };

  window.RestaurantTemplate = {
    get language() {
      return currentLanguage;
    },
    t,
    text,
    formatAddress,
    getConfig: () => config,
    getThemes: () => [...availableThemes],
    getActiveTheme: () => activeTheme,
    setTheme,
    setLanguage
  };

  applySelectedTheme();

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    renderConfigText();
    renderOpeningHours();
    renderContactLinks();
    renderReviews();
    renderGallery();
    renderSpecialOffer();
    renderBusinessInfo();
    renderSocialLinks();
    setupNavigation();
    setupLanguageSwitcher();
    setupThemeSwitcher();
    setupForms();
    setCurrentYear();
    setActiveNavLink();
    setupSmoothScroll();
    updateSeo();
    renderSchema();
    document.documentElement.lang = currentLanguage;
  });

  function resolveInitialTheme() {
    const queryTheme = new URLSearchParams(window.location.search).get("theme");
    if (availableThemes.includes(queryTheme)) {
      if (config.showThemeSwitcher) {
        localStorage.setItem(themeStorageKey, queryTheme);
      }
      return queryTheme;
    }

    const storedTheme = localStorage.getItem(themeStorageKey);
    if (config.showThemeSwitcher && availableThemes.includes(storedTheme)) {
      return storedTheme;
    }

    return availableThemes.includes(config.theme) ? config.theme : "premium-dark";
  }

  function setTheme(theme, options = {}) {
    if (!availableThemes.includes(theme)) return;
    activeTheme = theme;
    if (options.persist !== false && config.showThemeSwitcher) {
      localStorage.setItem(themeStorageKey, theme);
    }
    applySelectedTheme();
    updateHeroImages();
    renderSchema();
  }

  function applySelectedTheme() {
    if (!document.body) return;
    availableThemes.forEach((theme) => document.body.classList.remove(`theme-${theme}`));
    document.body.classList.add(`theme-${activeTheme}`);
    document.body.dataset.theme = activeTheme;
  }

  function text(value, fallback = "") {
    if (value === null || value === undefined) return fallback;
    if (typeof value === "object" && !Array.isArray(value)) {
      return value[currentLanguage] || value.de || value.en || fallback;
    }
    return String(value);
  }

  function t(key) {
    return translations[currentLanguage]?.[key] || translations.de[key] || key;
  }

  function setLanguage(language) {
    if (!supportedLanguages.includes(language)) return;
    currentLanguage = language;
    localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    renderConfigText();
    renderOpeningHours();
    renderReviews();
    renderGallery();
    renderSpecialOffer();
    renderBusinessInfo();
    renderContactLinks();
    renderSocialLinks();
    updateStaticTranslations();
    updateSeo();
    renderSchema();
    document.dispatchEvent(new CustomEvent("restaurant:language-change", { detail: { language } }));
  }

  function applyTheme() {
    const colorMap = {
      "--color-primary": config.primaryColor,
      "--color-secondary": config.secondaryColor,
      "--color-accent": config.accentColor,
      "--color-text": config.textColor,
      "--color-bg": config.backgroundColor
    };

    Object.entries(colorMap).forEach(([property, value]) => {
      if (value) root.style.setProperty(property, value);
    });
  }

  function renderConfigText() {
    setText("[data-restaurant-name]", config.restaurantName);
    setText("[data-slogan]", text(config.slogan));
    setText("[data-cuisine]", text(config.cuisineType));
    setText("[data-address]", formatAddress());
    setText("[data-legal-company-name]", config.legalCompanyName || config.restaurantName);
    setText("[data-owner-name]", config.ownerName);
    setText("[data-impressum-address]", config.impressumAddress || formatAddress());
    setText("[data-vat-id]", config.vatId || "bitte eintragen, falls vorhanden");
    setText("[data-privacy-email]", config.privacyEmail || config.email);
    setText("[data-phone]", config.phone);
    setText("[data-email]", config.email);

    document.querySelectorAll("[data-logo]").forEach((img) => {
      img.src = config.logoPath || "assets/img/logo-placeholder.svg";
      img.alt = `${config.restaurantName || "Restaurant"} Logo`;
    });

    updateHeroImages();

    updateStaticTranslations();
  }

  function updateHeroImages() {
    document.querySelectorAll("[data-hero-image]").forEach((img) => {
      const imagePath = getHeroImagePath();
      img.classList.remove("is-broken");
      img.classList.toggle("is-theme-placeholder", isDefaultThemePlaceholder(imagePath));
      img.removeAttribute("aria-hidden");
      img.onerror = () => {
        img.classList.add("is-broken");
        img.setAttribute("aria-hidden", "true");
      };
      img.onload = () => {
        img.classList.remove("is-broken");
        img.removeAttribute("aria-hidden");
      };
      img.alt = text(config.slogan, config.restaurantName);
      img.decoding = "async";
      img.src = imagePath;
    });
  }

  function updateStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-label]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nLabel));
    });

    document.querySelectorAll("[data-status-key]").forEach((element) => {
      element.textContent = config[element.dataset.statusKey] ? t("available") : t("unavailable");
    });
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value || "";
    });
  }

  function renderOpeningHours() {
    document.querySelectorAll("[data-opening-hours]").forEach((container) => {
      container.innerHTML = "";
      (config.openingHours || []).forEach((entry) => {
        const row = document.createElement("div");
        row.className = "hours-row";
        row.innerHTML = `<span>${text(entry.days)}</span><strong>${entry.closed ? t("closed") : entry.time}</strong>`;
        container.appendChild(row);
      });
    });
  }

  function renderContactLinks() {
    const phoneHref = config.phone ? `tel:${config.phone.replace(/[^\d+]/g, "")}` : "#";
    const mailHref = config.email ? `mailto:${config.email}` : "#";
    const privacyMailHref = (config.privacyEmail || config.email) ? `mailto:${config.privacyEmail || config.email}` : "#";
    const whatsAppText = encodeURIComponent(`${config.restaurantName}: Hallo, ich möchte gerne bestellen.`);
    const whatsAppHref = config.whatsappNumber ? `https://wa.me/${config.whatsappNumber.replace(/[^\d]/g, "")}?text=${whatsAppText}` : "#";

    setLink("[data-phone-link]", phoneHref);
    setLink("[data-email-link]", mailHref);
    setLink("[data-privacy-email-link]", privacyMailHref);
    setLink("[data-whatsapp-link]", whatsAppHref);
    setLink("[data-route-link]", config.googleMapsLink || "#");

    document.querySelectorAll("[data-map-embed]").forEach((iframe) => {
      iframe.src = config.googleMapsEmbedUrl || "";
      iframe.title = `${t("routeTitle")} ${config.restaurantName || ""}`.trim();
    });

    document.querySelectorAll("[data-form-endpoint]").forEach((form) => {
      if (config.formEndpoint) {
        form.action = config.formEndpoint;
      }
    });
  }

  function setLink(selector, href) {
    document.querySelectorAll(selector).forEach((link) => {
      link.href = href;
      if (href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noopener";
      }
    });
  }

  function renderReviews() {
    document.querySelectorAll("[data-reviews]").forEach((container) => {
      container.innerHTML = "";
      (config.reviews || []).forEach((review) => {
        const card = document.createElement("article");
        card.className = "review-card testimonial-card";
        card.innerHTML = `
          <div class="stars" aria-label="${review.rating} von 5 Sternen">${"★".repeat(review.rating || 5)}</div>
          <p>${text(review.text)}</p>
          <strong>${review.name}</strong>
        `;
        container.appendChild(card);
      });
    });
  }

  function renderGallery() {
    document.querySelectorAll("[data-gallery]").forEach((container) => {
      container.innerHTML = "";
      (config.galleryImages || []).forEach((image, index) => {
        const loading = index < 6 ? "eager" : "lazy";
        const fetchPriority = index < 3 ? ' fetchpriority="high"' : "";
        const figure = document.createElement("figure");
        figure.className = "gallery-item";
        figure.innerHTML = `
          <img src="${image.src}" alt="${text(image.alt)}" loading="${loading}" decoding="async"${fetchPriority}>
          <figcaption>${text(image.alt)}</figcaption>
        `;
        container.appendChild(figure);
      });
    });
  }

  function renderSpecialOffer() {
    const offer = config.specialOffer || {};
    setText("[data-special-title]", text(offer.title));
    setText("[data-special-text]", text(offer.text));
    setText("[data-special-price]", offer.price || "");
  }

  function renderBusinessInfo() {
    const rows = [
      [t("cuisine"), text(config.cuisineType)],
      [t("addressTitle"), formatAddress()],
      [t("phone"), config.phone],
      [t("delivery"), config.deliveryEnabled ? t("available") : t("unavailable")],
      [t("pickup"), config.pickupEnabled ? t("available") : t("unavailable")],
      [t("reservation"), config.reservationEnabled ? t("available") : t("unavailable")]
    ];

    document.querySelectorAll("[data-business-info]").forEach((container) => {
      container.innerHTML = rows
        .map(([label, value]) => `<div class="info-row"><span>${label}</span><strong>${value}</strong></div>`)
        .join("");
    });
  }

  function renderSocialLinks() {
    document.querySelectorAll("[data-social-links]").forEach((container) => {
      const links = Object.entries(config.socialLinks || {}).filter(([, href]) => href);
      container.innerHTML = links
        .map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`)
        .join("");
    });
  }

  function setupNavigation() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-site-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });
  }

  function setupLanguageSwitcher() {
    document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
      switcher.value = currentLanguage;
      switcher.setAttribute("aria-label", t("languageLabel"));
      switcher.addEventListener("change", (event) => setLanguage(event.target.value));
    });
  }

  function setupThemeSwitcher() {
    if (!config.showThemeSwitcher || document.querySelector("[data-theme-switcher]")) return;

    const switcher = document.createElement("aside");
    switcher.className = "theme-switcher";
    switcher.dataset.themeSwitcher = "";
    switcher.setAttribute("aria-label", "Design-Theme Vorschau");
    switcher.innerHTML = `
      <label>
        <span>Theme Preview</span>
        <select data-theme-select>
          ${availableThemes.map((theme) => `<option value="${theme}">${formatThemeName(theme)}</option>`).join("")}
        </select>
      </label>
      <a href="theme-preview.html">Alle Themes</a>
    `;

    const select = switcher.querySelector("[data-theme-select]");
    select.value = activeTheme;
    select.addEventListener("change", (event) => setTheme(event.target.value));
    document.body.appendChild(switcher);
  }

  function setupForms() {
    document.querySelectorAll("[data-form-endpoint]").forEach((form) => {
      if (!config.formEndpoint) {
        form.action = "php/contact.php";
      }
      form.addEventListener("submit", () => {
        const submit = form.querySelector("[type='submit']");
        if (submit) submit.disabled = true;
      });
    });
  }

  function setCurrentYear() {
    setText("[data-current-year]", new Date().getFullYear());
  }

  function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".site-nav a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function updateSeo() {
    const title = text(config.seo?.title, config.restaurantName);
    const description = text(config.seo?.description, text(config.slogan));
    const canonical = config.seo?.canonicalUrl || window.location.href;

    document.title = document.body.dataset.pageTitle
      ? `${document.body.dataset.pageTitle} | ${config.restaurantName}`
      : title;

    setMeta("description", description);
    setMeta("og:title", document.title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", absoluteUrl(getHeroImagePath()), "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", document.title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", absoluteUrl(getHeroImagePath()));

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  }

  function setMeta(name, content, attr = "name") {
    if (!content) return;
    let meta = document.querySelector(`meta[${attr}="${name}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attr, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  function renderSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: config.restaurantName,
      description: text(config.seo?.description, text(config.slogan)),
      servesCuisine: text(config.cuisineType),
      image: absoluteUrl(getHeroImagePath()),
      telephone: config.phone,
      email: config.email,
      url: config.seo?.canonicalUrl || window.location.href,
      address: {
        "@type": "PostalAddress",
        streetAddress: config.address,
        postalCode: config.postalCode,
        addressLocality: config.city,
        addressCountry: "DE"
      },
      hasMap: config.googleMapsLink,
      openingHoursSpecification: (config.openingHours || [])
        .filter((entry) => !entry.closed)
        .map((entry) => ({
          "@type": "OpeningHoursSpecification",
          name: text(entry.days),
          opens: normalizeOpening(entry.time).opens,
          closes: normalizeOpening(entry.time).closes
        })),
      acceptsReservations: Boolean(config.reservationEnabled)
    };

    let script = document.querySelector("#restaurant-schema");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "restaurant-schema";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  function normalizeOpening(time) {
    const match = String(time || "").match(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/);
    return {
      opens: match ? match[1] : "11:30",
      closes: match ? match[2] : "22:00"
    };
  }

  function absoluteUrl(path) {
    if (!path) return "";
    try {
      return new URL(path, window.location.href).href;
    } catch (error) {
      return path;
    }
  }

  function getHeroImagePath() {
    return config.themeHeroImages?.[activeTheme] || config.heroImagePath || "assets/img/hero-food-order.jpg";
  }

  function isDefaultThemePlaceholder(path) {
    return /^assets\/img\/hero-(premium-dark|cocktail-neon|imbiss-pro|cafe-minimal|german-gasthaus)\.jpg$/.test(String(path || ""));
  }

  function formatThemeName(theme) {
    return theme
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  function formatAddress() {
    return [config.address, `${config.postalCode || ""} ${config.city || ""}`.trim()]
      .filter(Boolean)
      .join(", ");
  }
})();
