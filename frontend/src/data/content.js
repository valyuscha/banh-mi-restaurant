// Banh Mi Dzień Dobry — multilingual content (EN / PL / DE)

export const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "pl", label: "PL" },
  { code: "de", label: "DE" },
];

export const content = {
  en: {
    nav: {
      about: "About",
      menu: "Menu",
      gallery: "Gallery",
      offer: "Offer",
      contact: "Contact",
      book: "Order Online",
    },
    scrollHint: "Swipe to explore",
    hero: {
      overline: "Bánh Mì · Phở · Vietnamese Street Food · Kraków",
      title: "Vietnamese Street Food in the Heart of Kraków",
      subtitle:
        "Fresh baguettes. Slow-cooked broths. Authentic Vietnamese flavors. Discover traditional Bánh Mì sandwiches, aromatic pho soups and comforting Asian specialties prepared with fresh ingredients and homemade sauces. Eat in • Take away • Delivery.",
      primary: "Order Online",
      secondary: "View Menu",
    },
    about: {
      overline: "Về Chúng Tôi — About Us",
      title: "Everyday Vietnamese food culture in Kraków",
      body: [
        "At Banh Mi Dzień Dobry, we bring everyday Vietnamese food culture to Kraków.",
        "Our kitchen combines crispy Vietnamese sandwiches, rich broths, fresh herbs and bold sauces inspired by recipes enjoyed across Vietnam. Whether you stop by for a quick lunch, a warm bowl of pho or one of our signature Bánh Mì creations, every dish is prepared to be fast, satisfying and full of character.",
        "From traditional flavors to modern favorites, our menu is designed for people who love casual food done properly.",
      ],
      stats: [
        { value: "Fresh", label: "Ingredients" },
        { value: "Homemade", label: "Sauces" },
        { value: "Authentic", label: "Recipes" },
      ],
    },
    menu: {
      overline: "Thực Đơn — The Menu",
      title: "Bánh Mì · Phở · Rice · Snacks",
      note: "Prices in PLN (zł). Seasonal specials available throughout the year.",
      categories: [
        {
          name: "Bánh Mì",
          items: [
            { name: "Bánh Mì Special", price: "32" },
            { name: "Bánh Mì with Grilled Chicken", price: "29" },
            { name: "Bánh Mì Char Siu", price: "29" },
            { name: "Bánh Mì with Omelette", price: "26" },
            { name: "Bánh Mì Spicy SATẾ", price: "30" },
            { name: "Vegetarian Bánh Mì", price: "26" },
            { name: "Tofu Bánh Mì", price: "26" },
          ],
        },
        {
          name: "Soups",
          items: [
            { name: "Phở with Beef", price: "39" },
            { name: "Phở with Chicken", price: "37" },
            { name: "Phở Bò Viên (Beef Meatballs)", price: "39" },
            { name: "Char Siu Wonton Soup", price: "38" },
          ],
        },
        {
          name: "Rice & Mains",
          items: [
            { name: "Oriental Rice Special", price: "36" },
            { name: "Curry with Beef Meatballs", price: "38" },
            { name: "Curry with Tofu", price: "32" },
            { name: "Grilled Chicken with Rice", price: "34" },
            { name: "Rice Combo with Vegetables", price: "30" },
          ],
        },
        {
          name: "Snacks & Starters",
          items: [
            { name: "Vietnamese Spring Rolls (4 pcs)", price: "18" },
            { name: "Há Cảo Dumplings (5 pcs)", price: "22" },
            { name: "Sủi Cảo Dumplings (6 pcs)", price: "24" },
          ],
        },
        {
          name: "Vegetarian",
          items: [
            { name: "Vegetarian Bánh Mì", price: "26" },
            { name: "Tofu Curry", price: "32" },
            { name: "Vegetarian Dumplings (5 pcs)", price: "22" },
            { name: "Vegetarian Spring Rolls (4 pcs)", price: "18" },
          ],
        },
      ],
    },
    gallery: {
      overline: "Thư Viện — Gallery",
      title: "Taste before you visit",
      body: "Signature Bánh Mì, steaming bowls of phở, fresh herbs and bold sauces. Every photo tells the story of Vietnamese street food in Kraków.",
    },
    offer: {
      overline: "Dịch Vụ — What We Offer",
      title: "Vietnamese street food, your way",
      items: [
        { icon: "Utensils", title: "Eat In", text: "Enjoy fresh Vietnamese street food in a casual atmosphere." },
        { icon: "ShoppingBag", title: "Take Away", text: "Fast pickup for lunch and dinner." },
        { icon: "Bike", title: "Delivery", text: "Order your favorite dishes directly to your home." },
        { icon: "Sun", title: "Fresh Daily", text: "Vegetables, herbs and sauces prepared every morning." },
        { icon: "Leaf", title: "Vegetarian Friendly", text: "A full menu of tofu, vegetables and meat-free favorites." },
        { icon: "Users", title: "Group Friendly", text: "Perfect for lunch breaks, friends and family gatherings." },
      ],
    },
    orderOnline: {
      overline: "Order Online — Zamów Online",
      title: "Order delivery to your door",
      subtitle: "Choose your favorite delivery platform and enjoy authentic Vietnamese street food at home.",
      orderNow: "Fast delivery available",
      visitSite: "Order now",
      note: "🚴 Free delivery on orders over 40 PLN on selected platforms",
    },
    reservation: {
      overline: "Order Delivery — Zamów Dostawę",
      title: "Order Online",
      body: "Choose your favorite delivery platform and enjoy authentic Vietnamese street food at home or pick it up in person.",
      deliveryTitle: "Fast & Easy Ordering",
      deliverySubtitle: "Select your preferred platform for delivery or pickup",
      delivery: "Delivery",
      deliveryTime: "30-45 min",
      pickup: "Pickup",
      pickupTime: "15-20 min",
      orderVia: "Choose Your Platform",
      orderNow: "Order",
      visitUs: "Prefer to visit us in person? See our location and opening hours",
      seeContact: "Contact & Hours",
      fields: {
        name: "Full name",
        phone: "Phone number",
        date: "Date",
        time: "Time",
        guests: "Guests",
        notes: "Notes (optional)",
      },
      guestOptions: ["1 guest", "2 guests", "3 guests", "4 guests", "5 guests", "6+ guests"],
      submit: "Confirm Reservation",
      success: "Cảm ơn! Your reservation request has been received.",
      hoursTitle: "Opening Hours",
      hours: [
        { day: "Monday – Friday", time: "11:00 – 19:00" },
        { day: "Saturday – Sunday", time: "Closed" },
      ],
      contactTitle: "Find Us",
      openMap: "Open in Google Maps",
    },
    contact: {
      overline: "Contact & Location — Kontakt i Lokalizacja",
      title: "Visit Us",
      subtitle: "Find us in Kraków or get in touch for any questions about our Vietnamese street food.",
      hoursTitle: "Opening Hours",
      hours: [
        { day: "Monday – Friday", time: "11:00 – 19:00" },
        { day: "Saturday – Sunday", time: "Closed" },
      ],
      locationTitle: "Location",
      openMap: "Get Directions",
    },
    footer: {
      tagline: "Fresh baguettes. Slow-cooked broths. Authentic Vietnamese flavors.",
      rights: "All rights reserved.",
      addressLabel: "Address",
      phoneLabel: "Phone",
    },
  },

  pl: {
    nav: {
      about: "O nas",
      menu: "Menu",
      gallery: "Galeria",
      offer: "Oferta",
      contact: "Kontakt",
      book: "Zamów Online",
    },
    scrollHint: "Przesuń, aby zobaczyć więcej",
    hero: {
      overline: "Bánh Mì · Phở · Wietnamskie Street Food · Kraków",
      title: "Wietnamskie street food w sercu Krakowa",
      subtitle:
        "Świeże bagietki. Wolno gotowane buliony. Autentyczne wietnamskie smaki. Odkryj tradycyjne kanapki Bánh Mì, aromatyczne zupy phở i azjatyckie specjały przygotowane ze świeżych składników i domowych sosów. Na miejscu • Na wynos • Dostawa.",
      primary: "Zamów Online",
      secondary: "Zobacz menu",
    },
    about: {
      overline: "O Nas",
      title: "Codzienna kultura wietnamskiego jedzenia w Krakowie",
      body: [
        "W Banh Mi Dzień Dobry przenosimy codzienną kulturę wietnamskiego jedzenia do Krakowa.",
        "Nasza kuchnia łączy chrupiące wietnamskie kanapki, esencjonalne buliony, świeże zioła i wyraziste sosy inspirowane przepisami z całego Wietnamu. Niezależnie czy wpadasz na szybki lunch, ciepłą miskę phở czy autorskie Bánh Mì — każde danie jest szybkie, sycące i pełne charakteru.",
        "Od tradycyjnych smaków po nowoczesne ulubieńce — nasze menu jest stworzone dla ludzi, którzy kochają jedzenie casual zrobione porządnie.",
      ],
      stats: [
        { value: "Świeże", label: "Składniki" },
        { value: "Domowe", label: "Sosy" },
        { value: "Autentyczne", label: "Przepisy" },
      ],
    },
    menu: {
      overline: "Karta Dań",
      title: "Bánh Mì · Phở · Ryż · Przekąski",
      note: "Ceny w PLN (zł). Sezonowe specjały dostępne przez cały rok.",
      categories: [
        {
          name: "Bánh Mì",
          items: [
            { name: "Bánh Mì Special", price: "32" },
            { name: "Bánh Mì z kurczakiem z grilla", price: "29" },
            { name: "Bánh Mì Char Siu", price: "29" },
            { name: "Bánh Mì z omletem", price: "26" },
            { name: "Bánh Mì pikantne SATẾ", price: "30" },
            { name: "Bánh Mì wegetariańskie", price: "26" },
            { name: "Bánh Mì z tofu", price: "26" },
          ],
        },
        {
          name: "Zupy",
          items: [
            { name: "Phở z wołowiną", price: "39" },
            { name: "Phở z kurczakiem", price: "37" },
            { name: "Phở Bò Viên (klopsiki wołowe)", price: "39" },
            { name: "Zupa wonton Char Siu", price: "38" },
          ],
        },
        {
          name: "Ryż i dania główne",
          items: [
            { name: "Ryż Oriental Special", price: "36" },
            { name: "Curry z klopsikami wołowymi", price: "38" },
            { name: "Curry z tofu", price: "32" },
            { name: "Kurczak z grilla z ryżem", price: "34" },
            { name: "Ryż z warzywami", price: "30" },
          ],
        },
        {
          name: "Przekąski",
          items: [
            { name: "Wietnamskie sajgonki (4 szt.)", price: "18" },
            { name: "Pierożki Há Cảo (5 szt.)", price: "22" },
            { name: "Pierożki Sủi Cảo (6 szt.)", price: "24" },
          ],
        },
        {
          name: "Wegetariańskie",
          items: [
            { name: "Bánh Mì wegetariańskie", price: "26" },
            { name: "Curry z tofu", price: "32" },
            { name: "Pierożki wegetariańskie (5 szt.)", price: "22" },
            { name: "Sajgonki wegetariańskie (4 szt.)", price: "18" },
          ],
        },
      ],
    },
    gallery: {
      overline: "Galeria",
      title: "Posmakuj zanim odwiedzisz",
      body: "Autorskie Bánh Mì, parujące miski phở, świeże zioła i wyraziste sosy. Każde zdjęcie opowiada historię wietnamskiego street foodu w Krakowie.",
    },
    offer: {
      overline: "Oferta",
      title: "Wietnamskie street food po Twojemu",
      items: [
        { icon: "Utensils", title: "Na miejscu", text: "Ciesz się świeżym wietnamskim street foodem w swobodnej atmosferze." },
        { icon: "ShoppingBag", title: "Na wynos", text: "Szybki odbiór na lunch i kolację." },
        { icon: "Bike", title: "Dostawa", text: "Zamów ulubione dania prosto do domu." },
        { icon: "Sun", title: "Świeże każdego dnia", text: "Warzywa, zioła i sosy przygotowywane codziennie rano." },
        { icon: "Leaf", title: "Przyjazne wege", text: "Pełne menu z tofu, warzywami i daniami bezmięsnymi." },
        { icon: "Users", title: "Dla większych grup", text: "Idealne na lunch w pracy, spotkania z przyjaciółmi i rodziną." },
      ],
    },
    orderOnline: {
      overline: "Zamów Online",
      title: "Zamów dostawę pod swoje drzwi",
      subtitle: "Wybierz swoją ulubioną platformę dostaw i ciesz się autentycznym wietnamskim street foodem w domu.",
      orderNow: "Szybka dostawa dostępna",
      visitSite: "Zamów teraz",
      note: "🚴 Darmowa dostawa przy zamówieniach powyżej 40 zł na wybranych platformach",
    },
    reservation: {
      overline: "Zamów Dostawę",
      title: "Zamów Online",
      body: "Wybierz swoją ulubioną platformę dostaw i ciesz się autentycznym wietnamskim street foodem w domu lub odbierz osobiście.",
      deliveryTitle: "Szybkie i Łatwe Zamawianie",
      deliverySubtitle: "Wybierz preferowaną platformę do dostawy lub odbioru",
      delivery: "Dostawa",
      deliveryTime: "30-45 min",
      pickup: "Odbiór",
      pickupTime: "15-20 min",
      orderVia: "Wybierz Platformę",
      orderNow: "Zamów",
      visitUs: "Wolisz odwiedzić nas osobiście? Zobacz naszą lokalizację i godziny otwarcia",
      seeContact: "Kontakt i Godziny",
      fields: {
        name: "Imię i nazwisko",
        phone: "Numer telefonu",
        date: "Data",
        time: "Godzina",
        guests: "Goście",
        notes: "Uwagi (opcjonalnie)",
      },
      guestOptions: ["1 osoba", "2 osoby", "3 osoby", "4 osoby", "5 osób", "6+ osób"],
      submit: "Potwierdź rezerwację",
      success: "Cảm ơn! Twoja prośba o rezerwację została przyjęta.",
      hoursTitle: "Godziny otwarcia",
      hours: [
        { day: "Poniedziałek – Piątek", time: "11:00 – 19:00" },
        { day: "Sobota – Niedziela", time: "Zamknięte" },
      ],
      contactTitle: "Znajdź nas",
      openMap: "Otwórz w Google Maps",
    },
    contact: {
      overline: "Kontakt i Lokalizacja",
      title: "Odwiedź Nas",
      subtitle: "Znajdź nas w Krakowie lub skontaktuj się z nami w sprawie naszego wietnamskiego street foodu.",
      hoursTitle: "Godziny otwarcia",
      hours: [
        { day: "Poniedziałek – Piątek", time: "11:00 – 19:00" },
        { day: "Sobota – Niedziela", time: "Zamknięte" },
      ],
      locationTitle: "Lokalizacja",
      openMap: "Uzyskaj Wskazówki",
    },
    footer: {
      tagline: "Świeże bagietki. Wolno gotowane buliony. Autentyczne wietnamskie smaki.",
      rights: "Wszelkie prawa zastrzeżone.",
      addressLabel: "Adres",
      phoneLabel: "Telefon",
    },
  },

  de: {
    nav: {
      about: "Über uns",
      menu: "Speisekarte",
      gallery: "Galerie",
      offer: "Angebot",
      contact: "Kontakt",
      book: "Online Bestellen",
    },
    scrollHint: "Wischen, um mehr zu sehen",
    hero: {
      overline: "Bánh Mì · Phở · Vietnamesisches Streetfood · Krakau",
      title: "Vietnamesisches Streetfood im Herzen von Krakau",
      subtitle:
        "Frische Baguettes. Langsam gekochte Brühen. Authentische vietnamesische Aromen. Entdecke traditionelle Bánh-Mì-Sandwiches, aromatische Pho-Suppen und asiatische Spezialitäten aus frischen Zutaten und hausgemachten Saucen. Vor Ort • Zum Mitnehmen • Lieferung.",
      primary: "Online Bestellen",
      secondary: "Zur Speisekarte",
    },
    about: {
      overline: "Über Uns",
      title: "Vietnamesische Alltagsküche in Krakau",
      body: [
        "Bei Banh Mi Dzień Dobry bringen wir die vietnamesische Alltagsküche nach Krakau.",
        "Unsere Küche verbindet knusprige vietnamesische Sandwiches, kräftige Brühen, frische Kräuter und kräftige Saucen, inspiriert von Rezepten aus ganz Vietnam. Ob für einen schnellen Lunch, eine warme Schale Phở oder eines unserer Bánh-Mì-Highlights — jedes Gericht ist schnell, sättigend und voller Charakter.",
        "Von traditionellen Aromen bis zu modernen Favoriten — unsere Karte ist für Menschen gemacht, die unkompliziertes Essen lieben, das richtig gemacht ist.",
      ],
      stats: [
        { value: "Frische", label: "Zutaten" },
        { value: "Hausgemachte", label: "Saucen" },
        { value: "Authentische", label: "Rezepte" },
      ],
    },
    menu: {
      overline: "Speisekarte",
      title: "Bánh Mì · Phở · Reis · Snacks",
      note: "Preise in PLN. Saisonale Spezialitäten das ganze Jahr über.",
      categories: [
        {
          name: "Bánh Mì",
          items: [
            { name: "Bánh Mì Special", price: "32" },
            { name: "Bánh Mì mit gegrilltem Hähnchen", price: "29" },
            { name: "Bánh Mì Char Siu", price: "29" },
            { name: "Bánh Mì mit Omelett", price: "26" },
            { name: "Bánh Mì scharf SATẾ", price: "30" },
            { name: "Vegetarisches Bánh Mì", price: "26" },
            { name: "Bánh Mì mit Tofu", price: "26" },
          ],
        },
        {
          name: "Suppen",
          items: [
            { name: "Phở mit Rindfleisch", price: "39" },
            { name: "Phở mit Hähnchen", price: "37" },
            { name: "Phở Bò Viên (Rindfleischbällchen)", price: "39" },
            { name: "Char-Siu-Wonton-Suppe", price: "38" },
          ],
        },
        {
          name: "Reis & Hauptgerichte",
          items: [
            { name: "Oriental Rice Special", price: "36" },
            { name: "Curry mit Rindfleischbällchen", price: "38" },
            { name: "Curry mit Tofu", price: "32" },
            { name: "Gegrilltes Hähnchen mit Reis", price: "34" },
            { name: "Reis mit Gemüse", price: "30" },
          ],
        },
        {
          name: "Snacks & Vorspeisen",
          items: [
            { name: "Vietnamesische Frühlingsrollen (4 St.)", price: "18" },
            { name: "Há Cảo Teigtaschen (5 St.)", price: "22" },
            { name: "Sủi Cảo Teigtaschen (6 St.)", price: "24" },
          ],
        },
        {
          name: "Vegetarisch",
          items: [
            { name: "Vegetarisches Bánh Mì", price: "26" },
            { name: "Curry mit Tofu", price: "32" },
            { name: "Vegetarische Teigtaschen (5 St.)", price: "22" },
            { name: "Vegetarische Frühlingsrollen (4 St.)", price: "18" },
          ],
        },
      ],
    },
    gallery: {
      overline: "Galerie",
      title: "Probieren, bevor du kommst",
      body: "Signature-Bánh-Mì, dampfende Phở-Schalen, frische Kräuter und kräftige Saucen. Jedes Foto erzählt von vietnamesischem Streetfood in Krakau.",
    },
    offer: {
      overline: "Angebot",
      title: "Vietnamesisches Streetfood, wie du willst",
      items: [
        { icon: "Utensils", title: "Vor Ort", text: "Genieße frisches vietnamesisches Streetfood in lockerer Atmosphäre." },
        { icon: "ShoppingBag", title: "Zum Mitnehmen", text: "Schnelle Abholung für Lunch und Abendessen." },
        { icon: "Bike", title: "Lieferung", text: "Bestelle deine Lieblingsgerichte direkt nach Hause." },
        { icon: "Sun", title: "Täglich Frisch", text: "Gemüse, Kräuter und Saucen jeden Morgen frisch zubereitet." },
        { icon: "Leaf", title: "Vegetarisch", text: "Eine ganze Karte mit Tofu, Gemüse und fleischlosen Favoriten." },
        { icon: "Users", title: "Für Gruppen", text: "Ideal für Mittagspausen, Freunde und Familientreffen." },
      ],
    },
    orderOnline: {
      overline: "Online Bestellen",
      title: "Lieferung direkt zu dir nach Hause",
      subtitle: "Wähle deine bevorzugte Lieferplattform und genieße authentisches vietnamesisches Streetfood zu Hause.",
      orderNow: "Schnelle Lieferung verfügbar",
      visitSite: "Jetzt bestellen",
      note: "🚴 Kostenlose Lieferung bei Bestellungen über 40 PLN auf ausgewählten Plattformen",
    },
    reservation: {
      overline: "Lieferung Bestellen",
      title: "Online Bestellen",
      body: "Wähle deine bevorzugte Lieferplattform und genieße authentisches vietnamesisches Streetfood zu Hause oder hole es persönlich ab.",
      deliveryTitle: "Schnell & Einfach Bestellen",
      deliverySubtitle: "Wähle deine bevorzugte Plattform für Lieferung oder Abholung",
      delivery: "Lieferung",
      deliveryTime: "30-45 Min",
      pickup: "Abholung",
      pickupTime: "15-20 Min",
      orderVia: "Wähle Deine Plattform",
      orderNow: "Bestellen",
      visitUs: "Möchtest du uns persönlich besuchen? Siehe unseren Standort und Öffnungszeiten",
      seeContact: "Kontakt & Zeiten",
      fields: {
        name: "Vollständiger Name",
        phone: "Telefonnummer",
        date: "Datum",
        time: "Uhrzeit",
        guests: "Gäste",
        notes: "Anmerkungen (optional)",
      },
      guestOptions: ["1 Gast", "2 Gäste", "3 Gäste", "4 Gäste", "5 Gäste", "6+ Gäste"],
      submit: "Reservierung bestätigen",
      success: "Cảm ơn! Deine Reservierungsanfrage ist eingegangen.",
      hoursTitle: "Öffnungszeiten",
      hours: [
        { day: "Montag – Freitag", time: "11:00 – 19:00" },
        { day: "Samstag – Sonntag", time: "Geschlossen" },
      ],
      contactTitle: "Finde uns",
      openMap: "In Google Maps öffnen",
    },
    contact: {
      overline: "Kontakt & Standort",
      title: "Besuche Uns",
      subtitle: "Finde uns in Krakau oder kontaktiere uns bei Fragen zu unserem vietnamesischen Streetfood.",
      hoursTitle: "Öffnungszeiten",
      hours: [
        { day: "Montag – Freitag", time: "11:00 – 19:00" },
        { day: "Samstag – Sonntag", time: "Geschlossen" },
      ],
      locationTitle: "Standort",
      openMap: "Route Anzeigen",
    },
    footer: {
      tagline: "Frische Baguettes. Langsam gekochte Brühen. Authentische vietnamesische Aromen.",
      rights: "Alle Rechte vorbehalten.",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
    },
  },
};

export const CONTACT = {
  name: "Banh Mi Dzień Dobry",
  street: "Mazowiecka 26B",
  city: "30-019 Kraków",
  phone: "+48 729 641 438",
  phoneHref: "tel:+48729641438",
  facebook: "https://www.facebook.com/BanhMi.DzienDobry",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Banh+Mi+Dzie%C5%84+Dobry+Mazowiecka+26B+Krak%C3%B3w",
};

// Restaurant working hours used to generate reservation time slots.
// Mon–Fri (getDay 1-5) and Sat/Sun (getDay 0,6).
export const HOURS = {
  weekday: { open: "11:00", close: "19:00" },
  weekend: { open: null, close: null }, // Closed on weekends
};

export const MEDIA = {
  hero: "https://images.pexels.com/photos/32961655/pexels-photo-32961655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
  about: "https://images.unsplash.com/photo-1748596161492-0ebbc90489a5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  menuHighlight: "https://images.pexels.com/photos/4153908/pexels-photo-4153908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  gallery: [
    { url: "https://images.unsplash.com/photo-1627309302198-09a50ae1b209?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000", alt: "Bánh Mì sandwich close-up with fresh ingredients" },
    { url: "https://images.pexels.com/photos/36752868/pexels-photo-36752868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=940", alt: "Vietnamese spring rolls served with dipping sauce" },
    { url: "https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=940", alt: "Steaming bowl of phở with herbs and chili" },
    { url: "https://images.pexels.com/photos/34623149/pexels-photo-34623149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=940", alt: "Fresh spring rolls detail on a plate" },
    { url: "https://images.pexels.com/photos/31990173/pexels-photo-31990173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=940", alt: "Vietnamese iced coffee" },
  ],
};
