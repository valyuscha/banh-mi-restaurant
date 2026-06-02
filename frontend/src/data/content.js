// Gossip Cafe — multilingual content (EN / PL / DE)

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
      book: "Book a Table",
    },
    scrollHint: "Swipe to explore",
    hero: {
      overline: "Specialty Coffee · Breakfast · Brunch · Kraków",
      title: "Experience mornings differently",
      subtitle:
        "Not every café is about coffee. Some are about slowing down. At Gossip Cafe, breakfast becomes a ritual and simple moments become something worth remembering.",
      primary: "Book a Table",
      secondary: "View Menu",
    },
    about: {
      overline: "O Nas — About Us",
      title: "Slow mornings in the heart of Kraków",
      body: [
        "At Gossip Cafe, breakfast becomes a ritual, brunch becomes a meeting, and simple moments become something worth remembering.",
        "Located a short walk from Kraków Main Square, we serve carefully prepared breakfasts, homemade desserts and specialty coffee in an interior designed for comfort and conversation.",
        "Whether you come for your morning coffee, a weekend brunch, remote work or time with friends — we want you to feel like staying longer.",
      ],
      stats: [
        { value: "Fresh", label: "Ingredients" },
        { value: "Homemade", label: "Recipes" },
        { value: "Warm", label: "Atmosphere" },
      ],
    },
    menu: {
      overline: "Karta Dań — The Menu",
      title: "Breakfast · Brunch · Coffee · Desserts",
      note: "Prices in PLN (zł). Seasonal specials available throughout the year.",
      categories: [
        {
          name: "Breakfast",
          items: [
            { name: "English Breakfast", price: "43" },
            { name: "Goat Cheese Omelette", price: "41" },
            { name: "Goat Cheese Omelette with Honey & Walnuts", price: "41" },
            { name: "Polish Breakfast", price: "41" },
            { name: "Gossip Omelette", price: "40" },
            { name: "Mozzarella Omelette", price: "38" },
            { name: "Smoked Salmon Omelette", price: "38" },
          ],
        },
        {
          name: "Sweet Breakfast",
          items: [
            { name: "Pancakes with Yogurt & Fruit", price: "39" },
            { name: "Loaded Pancakes", price: "36" },
            { name: "Croissant with Homemade Jam", price: "18" },
          ],
        },
        {
          name: "Bagels",
          items: [
            { name: "Goat Cheese Bagel", price: "43" },
            { name: "Smoked Salmon Bagel", price: "41" },
            { name: "Bagel with Scrambled Eggs & Bacon", price: "41" },
          ],
        },
        {
          name: "Gossip Bun",
          items: [{ name: "Slow Roasted Pork in Mustard Sauce", price: "45" }],
        },
        {
          name: "Soups",
          items: [
            { name: "Sauerkraut Soup with Rib", price: "38" },
            { name: "Sour Rye Soup with White Sausage", price: "34" },
            { name: "Pumpkin Cream Soup", price: "30" },
          ],
        },
        {
          name: "Pierogi",
          items: [
            { name: "Meat Pierogi", price: "41" },
            { name: "Forest Berry Pierogi with Sweet Cream", price: "40" },
            { name: "Russian Pierogi", price: "38" },
            { name: "Spinach & Feta Pierogi", price: "38" },
            { name: "Cabbage & Mushroom Pierogi", price: "38" },
          ],
        },
        {
          name: "Desserts & Drinks",
          items: [
            { name: "Cheesecake with Homemade Strawberry Sauce", price: "26" },
            { name: "Fresh Orange Juice", price: "22" },
            { name: "Lemonade", price: "18" },
            { name: "Apple Juice", price: "12" },
            { name: "Forest Fruit Smoothie (400 ml)", price: "24" },
          ],
        },
      ],
    },
    gallery: {
      overline: "Galeria — Gallery",
      title: "Taste before you visit",
      body: "Signature breakfasts, handcrafted desserts, coffee moments and cozy interiors. Every photo tells the story of slow mornings in Kraków.",
    },
    offer: {
      overline: "Oferta — What We Offer",
      title: "More than a café",
      items: [
        { icon: "Sun", title: "Breakfast All Day", text: "Start your day whenever you want." },
        { icon: "Utensils", title: "Brunch Experience", text: "Designed for conversations and long mornings." },
        { icon: "Coffee", title: "Coffee & Dessert", text: "Perfect for casual meetings and city breaks." },
        { icon: "ShoppingBag", title: "Takeaway", text: "Enjoy your favorites anywhere." },
        { icon: "Users", title: "Events & Gatherings", text: "Comfortable atmosphere for special moments." },
        { icon: "Dog", title: "Pet Friendly", text: "Because good mornings are for everyone." },
      ],
    },
    reservation: {
      overline: "Rezerwacja — Reservations",
      title: "Book your table",
      body: "Reserve your table and enjoy breakfast your way. Fill in the details below and we'll keep a cozy spot ready for you.",
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
      success: "Thank you! Your reservation request has been received.",
      hoursTitle: "Opening Hours",
      hours: [
        { day: "Monday – Friday", time: "08:00 – 15:00" },
        { day: "Saturday – Sunday", time: "07:30 – 16:30" },
      ],
      contactTitle: "Find Us",
      openMap: "Open in Google Maps",
    },
    footer: {
      tagline: "Fresh ingredients. Homemade recipes. Warm atmosphere.",
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
      book: "Rezerwuj stolik",
    },
    scrollHint: "Przesuń, aby zobaczyć więcej",
    hero: {
      overline: "Kawa Speciality · Śniadania · Brunch · Kraków",
      title: "Poranki, które smakują inaczej",
      subtitle:
        "Nie każda kawiarnia jest o kawie. Niektóre są o zwolnieniu tempa. W Gossip Cafe śniadanie staje się rytuałem, a zwykłe chwile czymś, co warto zapamiętać.",
      primary: "Rezerwuj stolik",
      secondary: "Zobacz menu",
    },
    about: {
      overline: "O Nas",
      title: "Powolne poranki w sercu Krakowa",
      body: [
        "W Gossip Cafe śniadanie staje się rytuałem, brunch spotkaniem, a proste chwile czymś, co warto zapamiętać.",
        "Kilka kroków od Rynku Głównego serwujemy starannie przygotowane śniadania, domowe desery i kawę speciality we wnętrzu stworzonym do wygody i rozmów.",
        "Niezależnie czy przychodzisz na poranną kawę, weekendowy brunch, pracę zdalną czy spotkanie z przyjaciółmi — chcemy, żebyś chciał zostać dłużej.",
      ],
      stats: [
        { value: "Świeże", label: "Składniki" },
        { value: "Domowe", label: "Przepisy" },
        { value: "Ciepła", label: "Atmosfera" },
      ],
    },
    menu: {
      overline: "Karta Dań",
      title: "Śniadania · Brunch · Kawa · Desery",
      note: "Ceny w PLN (zł). Sezonowe specjały dostępne przez cały rok.",
      categories: [
        {
          name: "Śniadania",
          items: [
            { name: "Śniadanie angielskie", price: "43" },
            { name: "Omlet z kozim serem", price: "41" },
            { name: "Omlet z kozim serem, miodem i orzechami", price: "41" },
            { name: "Śniadanie polskie", price: "41" },
            { name: "Omlet Gossip", price: "40" },
            { name: "Omlet z mozzarellą", price: "38" },
            { name: "Omlet z łososiem wędzonym", price: "38" },
          ],
        },
        {
          name: "Słodkie śniadania",
          items: [
            { name: "Pancakes z jogurtem i owocami", price: "39" },
            { name: "Pancakes premium", price: "36" },
            { name: "Croissant z domową konfiturą", price: "18" },
          ],
        },
        {
          name: "Bajgle",
          items: [
            { name: "Bajgiel z kozim serem", price: "43" },
            { name: "Bajgiel z łososiem", price: "41" },
            { name: "Bajgiel z jajecznicą i bekonem", price: "41" },
          ],
        },
        {
          name: "Bułka Gossip",
          items: [{ name: "Wolno pieczona wieprzowina w sosie musztardowym", price: "45" }],
        },
        {
          name: "Zupy",
          items: [
            { name: "Kwaśnica z żeberkiem", price: "38" },
            { name: "Żurek", price: "34" },
            { name: "Krem dyniowy", price: "30" },
          ],
        },
        {
          name: "Pierogi",
          items: [
            { name: "Mięsne", price: "41" },
            { name: "Z leśnymi owocami i śmietaną", price: "40" },
            { name: "Ruskie", price: "38" },
            { name: "Szpinak i feta", price: "38" },
            { name: "Kapusta i grzyby", price: "38" },
          ],
        },
        {
          name: "Desery i napoje",
          items: [
            { name: "Sernik z domowym sosem truskawkowym", price: "26" },
            { name: "Sok pomarańczowy świeżo wyciskany", price: "22" },
            { name: "Lemoniada", price: "18" },
            { name: "Sok jabłkowy", price: "12" },
            { name: "Smoothie z owoców leśnych (400 ml)", price: "24" },
          ],
        },
      ],
    },
    gallery: {
      overline: "Galeria",
      title: "Posmakuj zanim odwiedzisz",
      body: "Autorskie śniadania, ręcznie robione desery, kawowe chwile i przytulne wnętrza. Każde zdjęcie opowiada historię powolnych poranków w Krakowie.",
    },
    offer: {
      overline: "Oferta",
      title: "Więcej niż kawiarnia",
      items: [
        { icon: "Sun", title: "Śniadania cały dzień", text: "Zacznij dzień kiedy chcesz." },
        { icon: "Utensils", title: "Brunch", text: "Stworzony do rozmów i długich poranków." },
        { icon: "Coffee", title: "Kawa i deser", text: "Idealne na spotkania i przerwy w mieście." },
        { icon: "ShoppingBag", title: "Na wynos", text: "Ciesz się ulubionymi smakami wszędzie." },
        { icon: "Users", title: "Spotkania", text: "Komfortowa atmosfera na wyjątkowe chwile." },
        { icon: "Dog", title: "Przyjazne zwierzakom", text: "Bo dobre poranki są dla wszystkich." },
      ],
    },
    reservation: {
      overline: "Rezerwacja",
      title: "Zarezerwuj stolik",
      body: "Zarezerwuj stolik i ciesz się śniadaniem po swojemu. Wypełnij dane, a my przygotujemy dla Ciebie przytulne miejsce.",
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
      success: "Dziękujemy! Twoja prośba o rezerwację została przyjęta.",
      hoursTitle: "Godziny otwarcia",
      hours: [
        { day: "Poniedziałek – Piątek", time: "08:00 – 15:00" },
        { day: "Sobota – Niedziela", time: "07:30 – 16:30" },
      ],
      contactTitle: "Znajdź nas",
      openMap: "Otwórz w Google Maps",
    },
    footer: {
      tagline: "Świeże składniki. Domowe przepisy. Ciepła atmosfera.",
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
      book: "Tisch reservieren",
    },
    scrollHint: "Wischen, um mehr zu sehen",
    hero: {
      overline: "Specialty Coffee · Frühstück · Brunch · Krakau",
      title: "Morgen einmal anders erleben",
      subtitle:
        "Nicht jedes Café dreht sich um Kaffee. Manche drehen sich ums Entschleunigen. Im Gossip Cafe wird das Frühstück zum Ritual und einfache Momente zu etwas Unvergesslichem.",
      primary: "Tisch reservieren",
      secondary: "Zur Speisekarte",
    },
    about: {
      overline: "Über Uns",
      title: "Langsame Morgen im Herzen Krakaus",
      body: [
        "Im Gossip Cafe wird das Frühstück zum Ritual, der Brunch zum Treffen und einfache Momente zu etwas Unvergesslichem.",
        "Nur wenige Schritte vom Krakauer Hauptmarkt servieren wir sorgfältig zubereitete Frühstücke, hausgemachte Desserts und Specialty Coffee in einem Interieur für Komfort und Gespräche.",
        "Ob für den Morgenkaffee, einen Wochenend-Brunch, Remote-Arbeit oder Zeit mit Freunden — wir möchten, dass du gerne länger bleibst.",
      ],
      stats: [
        { value: "Frische", label: "Zutaten" },
        { value: "Hausgemachte", label: "Rezepte" },
        { value: "Warme", label: "Atmosphäre" },
      ],
    },
    menu: {
      overline: "Speisekarte",
      title: "Frühstück · Brunch · Kaffee · Desserts",
      note: "Preise in PLN. Saisonale Spezialitäten das ganze Jahr über.",
      categories: [
        {
          name: "Frühstück",
          items: [
            { name: "Englisches Frühstück", price: "43" },
            { name: "Omelett mit Ziegenkäse", price: "41" },
            { name: "Omelett mit Ziegenkäse, Honig und Walnüssen", price: "41" },
            { name: "Polnisches Frühstück", price: "41" },
            { name: "Gossip Omelett", price: "40" },
            { name: "Omelett mit Mozzarella", price: "38" },
            { name: "Omelett mit Räucherlachs", price: "38" },
          ],
        },
        {
          name: "Süßes Frühstück",
          items: [
            { name: "Pancakes mit Joghurt und Früchten", price: "39" },
            { name: "Pancakes Spezial", price: "36" },
            { name: "Croissant mit hausgemachter Marmelade", price: "18" },
          ],
        },
        {
          name: "Bagels",
          items: [
            { name: "Bagel mit Ziegenkäse", price: "43" },
            { name: "Bagel mit Räucherlachs", price: "41" },
            { name: "Bagel mit Rührei und Speck", price: "41" },
          ],
        },
        {
          name: "Gossip Brötchen",
          items: [{ name: "Langsam gegartes Schweinefleisch in Senfsauce", price: "45" }],
        },
        {
          name: "Suppen",
          items: [
            { name: "Sauerkrautsuppe mit Rippe", price: "38" },
            { name: "Sauermehlsuppe", price: "34" },
            { name: "Kürbiscremesuppe", price: "30" },
          ],
        },
        {
          name: "Pierogi",
          items: [
            { name: "Mit Fleisch", price: "41" },
            { name: "Waldbeeren und Sahne", price: "40" },
            { name: "Russisch", price: "38" },
            { name: "Spinat und Feta", price: "38" },
            { name: "Kohl und Pilze", price: "38" },
          ],
        },
        {
          name: "Desserts & Getränke",
          items: [
            { name: "Käsekuchen mit hausgemachter Erdbeersauce", price: "26" },
            { name: "Frisch gepresster Orangensaft", price: "22" },
            { name: "Limonade", price: "18" },
            { name: "Apfelsaft", price: "12" },
            { name: "Waldfrucht-Smoothie (400 ml)", price: "24" },
          ],
        },
      ],
    },
    gallery: {
      overline: "Galerie",
      title: "Probieren, bevor du kommst",
      body: "Signature-Frühstücke, handgemachte Desserts, Kaffeemomente und gemütliche Interieurs. Jedes Foto erzählt von langsamen Morgen in Krakau.",
    },
    offer: {
      overline: "Angebot",
      title: "Mehr als ein Café",
      items: [
        { icon: "Sun", title: "Frühstück den ganzen Tag", text: "Starte deinen Tag, wann du willst." },
        { icon: "Utensils", title: "Brunch-Erlebnis", text: "Für Gespräche und lange Morgen gemacht." },
        { icon: "Coffee", title: "Kaffee & Dessert", text: "Perfekt für Treffen und Stadtpausen." },
        { icon: "ShoppingBag", title: "Zum Mitnehmen", text: "Genieße deine Favoriten überall." },
        { icon: "Users", title: "Veranstaltungen", text: "Gemütliche Atmosphäre für besondere Momente." },
        { icon: "Dog", title: "Haustierfreundlich", text: "Weil gute Morgen für alle da sind." },
      ],
    },
    reservation: {
      overline: "Reservierung",
      title: "Reserviere deinen Tisch",
      body: "Reserviere deinen Tisch und genieße dein Frühstück nach deinem Geschmack. Fülle die Details aus und wir halten einen gemütlichen Platz für dich bereit.",
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
      success: "Vielen Dank! Deine Reservierungsanfrage ist eingegangen.",
      hoursTitle: "Öffnungszeiten",
      hours: [
        { day: "Montag – Freitag", time: "08:00 – 15:00" },
        { day: "Samstag – Sonntag", time: "07:30 – 16:30" },
      ],
      contactTitle: "Finde uns",
      openMap: "In Google Maps öffnen",
    },
    footer: {
      tagline: "Frische Zutaten. Hausgemachte Rezepte. Warme Atmosphäre.",
      rights: "Alle Rechte vorbehalten.",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
    },
  },
};

export const CONTACT = {
  name: "Gossip Cafe",
  street: "Świętego Jana 30",
  city: "31-018 Kraków",
  phone: "+48 535 431 878",
  phoneHref: "tel:+48535431878",
  facebook: "https://www.facebook.com/gossipcafekrakow/",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Gossip+Cafe+%C5%9Awi%C4%99tego+Jana+30+Krak%C3%B3w",
};

// Café working hours used to generate reservation time slots.
// Mon–Fri (getDay 1-5) and Sat/Sun (getDay 0,6).
export const HOURS = {
  weekday: { open: "08:00", close: "15:00" },
  weekend: { open: "07:30", close: "16:30" },
};

export const MEDIA = {
  hero: "https://static.prod-images.emergentagent.com/jobs/99d2014d-ccc7-4790-acd5-954d17c15026/images/da8b974572d0082db61d8df36b34e4da8c9fa82ab915428c55a08d41bd8b6a1b.png",
  about: "https://images.pexels.com/photos/20661977/pexels-photo-20661977.jpeg?auto=compress&cs=tinysrgb&w=800",
  menuHighlight:
    "https://static.prod-images.emergentagent.com/jobs/99d2014d-ccc7-4790-acd5-954d17c15026/images/5824739168f1594ac71a95eb0edc82ed7fca9b4763604cee169b04c45f38bf54.png",
  gallery: [
    { url: "https://images.pexels.com/photos/6205629/pexels-photo-6205629.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Barista pouring latte art" },
    { url: "https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?w=800&q=80&auto=format", alt: "Egg sandwich close up" },
    { url: "https://images.pexels.com/photos/37034126/pexels-photo-37034126.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Latte art in warm light" },
    { url: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&q=80&auto=format", alt: "Avocado and greens toast" },
    { url: "https://images.pexels.com/photos/34896773/pexels-photo-34896773.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Cozy window seat with wooden chairs" },
  ],
};
