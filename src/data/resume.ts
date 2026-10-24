/**
 * RESUME & PORTFOLIO DATA (HARDECODED CONSTANTS)
 * Europa-Park / MACK Media CI
 * Language: German (Bewerbungssprache)
 */

export const candidate = {
  name: "Atai Duisheev",
  firstName: "Atai",
  lastName: "Duisheev",
  role: "Werbung / Grafik",
  company: "MACK Media",
  resort: "Europa-Park Erlebnis-Resort, Rust",
  location: "Rust, Deutschland",
  start: "März 2027",
  duration: "3 Monate",
  germanLevel: "B1",
};

export const profile = [
  "Absolvent im Bereich Informationssysteme und Technologien mit Schwerpunkt Medienindustrie. Praktische Erfahrung in der Konzeption digitaler Produkte, in visueller Gestaltung und in der Erstellung von Content.",
  "Eigene E-Commerce- und Design-Projekte — von der visuellen Konzeption über Gestaltung und Content bis zu Marketing und Kundenkommunikation. Sicherer Umgang mit moderner Design-, Layout- und Videobearbeitungssoftware.",
];

export const quote =
  "Motiviert, meine gestalterischen Fähigkeiten im Bereich Werbung und Grafik bei MACK Media weiterzuentwickeln.";

export const competences = [
  {
    title: "Grafikdesign & Layout",
    text: "Gestaltung von mehrseitigen Speisekarten, Buchlayouts, Präsentationen und Werbematerialien.",
  },
  {
    title: "Branding & Content",
    text: "Visuelle Konzeption, Markenidentität, Social-Media-Gestaltung und zielgruppengerechte Content-Erstellung.",
  },
  {
    title: "Illustration & KI-Art-Direction",
    text: "KI-gestützte Bildgenerierung unter präziser gestalterischer Regie, Stilkonsistenz, Retusche und Reinzeichnung.",
  },
  {
    title: "Digitale Medien & Screendesign",
    text: "Gestaltung von Website-Mock-ups, digitalen Werbebannern und animierten Präsentationen.",
  },
  {
    title: "E-Commerce & Druckaufbereitung",
    text: "Produktpräsentation, Online-Shop-Abläufe und Aufbereitung druckfertiger Reinzeichnungen (CMYK / Schnittmarken).",
  },
  {
    title: "Videobearbeitung & Motion",
    text: "Schnitt, Farbkorrektur und Animation digitaler Bewegtbild-Inhalte.",
  },
];

export const software = [
  {
    label: "Adobe Creative Cloud",
    items: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
  },
  {
    label: "Design & Prototyping",
    items: ["Figma"],
  },
  {
    label: "Weitere Tools & KI",
    items: ["KI-Bildsynthese", "Canva", "CapCut", "PowerPoint"],
  },
];

export const workExperience = [
  {
    title: "Designer & Illustrator – personalisierte Kinderbücher (KI-gestützt)",
    place: "Remote / Projektarbeit",
    meta: "2024",
    points: [
      "Konzeption und Gestaltung personalisierter Kinderbücher, in denen echte Kinder die Hauptfiguren der Geschichte sind",
      "KI-gestützte Illustration in Kombination mit manueller Bildrichtung, digitaler Retusche und Layout",
      "Abstimmung von Stil, Charakteren, Lieblingsmotiven und Farbwelten der Familien",
      "Aufbereitung druckfertiger Seiten, Doppelseiten und Cover für den Buchdruck",
    ],
  },
  {
    title: "Mitarbeiter im Restaurantbereich",
    place: "Europa-Park Erlebnis-Resort",
    meta: "Rust, Deutschland · 2025 – heute",
    points: [
      "Unterstützung des Restaurantbetriebs im laufenden Tagesgeschäft vor Ort in Rust",
      "Mitarbeit bei der Sicherstellung eines gepflegten und serviceorientierten Gästebereichs",
      "Zusammenarbeit im Team eines internationalen Erlebnisresorts mit täglichem Gästekontakt",
    ],
  },
  {
    title: "Aushilfe / Verkaufshelfer im Verkaufsraum",
    place: "Karl’s Erlebnis-Dorf",
    meta: "Juni – Ende August (3 Monate)",
    points: [
      "Unterstützung im Verkaufsraum und bei der Betreuung der Besucherinnen und Besucher",
    ],
  },
  {
    title: "Mitarbeiter im Onlinehandel / Operator",
    place: "Kivano.kg",
    meta: "Bischkek, Kirgisistan · 2025",
    points: [
      "Mitarbeit in den operativen Abläufen eines etablierten Online-Shops",
      "Bestellabwicklung, Produktpräsentation, Katalogpflege und operative Kundenbetreuung",
    ],
  },
];

export const education = [
  {
    title: "Informationssysteme und Technologien",
    place: "Kyrgyz State Technical University I. Razzakov",
    meta: "Kirgisisch-Deutsches Technisches Institut (KDTI) · Bischkek · Abschluss: Bachelor · 2025",
    points: ["Schwerpunkt: Medienindustrie"],
  },
  {
    title: "Programmierschule",
    place: "Geeks · Bischkek, Kirgisistan",
    meta: "2023",
    points: ["Schwerpunkt: Backend-Entwicklung & Webtechnologien"],
  },
];

export const languages = [
  { label: "Kirgisisch", level: "Erstsprache / Muttersprache" },
  { label: "Russisch", level: "Verhandlungssicher (C2)" },
  { label: "Deutsch", level: "B1" },
  { label: "Englisch", level: "Gute Kenntnisse (B1/B2)" },
];

export const driverLicense = "Klasse B";

export type ResumeProject = {
  key: string;
  mark: string;
  title: string;
  subtitle: string;
  when: string;
  href?: string;
  coverImage?: string;
  featured?: boolean;
  points: string[];
};

export const projects: ResumeProject[] = [
  {
    key: "bunker",
    mark: "Interactive Game",
    title: "BUNKER 404 – Multiplayer-Browsergame",
    subtitle: "Browserbasiertes Multiplayer-Spiel mit individuellen Modifikatoren",
    when: "2026",
    href: "/projekte/bunker",
    coverImage: "/portfolio/bunker (1).png",
    featured: true,
    points: [
      "Konzeption und Umsetzung eines browserbasierten Multiplayer-Spiels",
      "Räume erstellen und Beitritt per Zugangscode",
      "Individuelle Spielmodifikatoren und Regeln",
      "Atmosphärische Benutzeroberfläche im Bunker-Stil",
    ],
  },
  {
    key: "speisekarte" as const,
    mark: "Print & Gastro",
    title: "Speisekarte – zentralasiatische Küche",
    subtitle: "Mehrseitige Menügestaltung für traditionelle Gastronomie",
    when: "2024",
    href: "/projekte/speisekarte",
    coverImage: "/portfolio/speisekarte-04.png",
    featured: true,
    points: [
      "Entwicklung einer einheitlichen visuellen Sprache mit warmer Papieroptik und floral-ornamentalen Bordüren",
      "Klare Informationshierarchie für Gerichtenamen, dreisprachige Beschreibungen (KY / RU / EN), Grammaturen und Preise",
      "Gestaltung von 9 thematischen Menüseiten (Suppen, Kuurdak, Beilagen, Nudelgerichte, Manti & Samsa, Getränke)",
      "Food-Freistellung, Bildretusche und druckfertige Reinzeichnung",
    ],
  },
  {
    key: "mbank-merch" as const,
    mark: "Konzept & Merch",
    title: "MBank Merch",
    subtitle: "Konzeptpräsentation als Testaufgabe",
    when: "2026",
    href: "/projekte/mbank-merch",
    coverImage: "/portfolio/mbank/Снимок экрана 2026-10-23 181605.png",
    featured: true,
    points: [
      "Konzeptpräsentation für eine Merch-Kollektion im Rahmen einer Testaufgabe.",
      "Visuelle Ausarbeitung und Präsentation zentraler Merch-Ideen für MBank.",
    ],
  },
  {
    key: "kinderbuecher" as const,
    mark: "Illustration & AI",
    title: "Personalisierte Kinderbücher",
    subtitle: "Illustration, Art-Direction & Buchlayout (KI-gestützt)",
    when: "2024",
    href: "/projekte/kinderbuecher",
    coverImage: "/portfolio/aylin-illustration-1.png",
    featured: true,
    points: [
      "Konzeption und Gestaltung personalisierter Bilderbücher, in denen echte Kinder zu Hauptfiguren ihrer Geschichte werden",
      "KI-gestützte Bildgenerierung unter präziser gestalterischer Führung: Stilkonsistenz, Charaktertreue und Emotion",
      "Manuelle digitale Nachbearbeitung, Retusche, Farbkorrektur und harmonische Integration von Begleitmotiven",
      "Typografisches Satzlayout und druckfertige Druckbogenaufbereitung",
    ],
  },
  {
    key: "solecover" as const,
    mark: "Marke & Web",
    title: "Solecover",
    subtitle: "Aufbau einer eigenen Streetwear-Marke",
    when: "2023 – 2024",
    href: "/projekte/solecover",
    coverImage: "/portfolio/solecover (1).jpg",
    points: [
      "Entwicklung des visuellen und konzeptionellen Auftritts der Marke",
      "Gestaltung und Umsetzung digitaler Inhalte für Social Media und Web",
      "Mitwirkung an der Konzeption und Gestaltung des Online-Shops",
      "Planung und Umsetzung von Marketing- und Verkaufsaktivitäten",
      "Organisation von Kundenkommunikation und operativen Verkaufsprozessen",
    ],
  },
  {
    key: "coins" as const,
    mark: "Web UI",
    title: "Website-Mock-up",
    subtitle: "Verkauf numismatischer Sammlerstücke",
    when: "2024",
    points: [
      "Konzeption und Gestaltung eines Website-Mock-ups für einen spezialisierten Online-Shop",
    ],
  },
  {
    key: "slides" as const,
    mark: "Motion & Presentation",
    title: "Animierte Präsentationen",
    subtitle: "PowerPoint & Keynote",
    when: "2024",
    points: ["Gestaltung und dynamische Animation von Präsentationsinhalten"],
  },
];

export const solecoverGallery = [
  { file: "/portfolio/solecover (1).jpg", title: "Solecover – Markenauftritt", subtitle: "Brand & Visual Identity" },
  { file: "/portfolio/solecover (2).jpg", title: "Solecover – Produktpräsentation", subtitle: "Streetwear & Content" },
  { file: "/portfolio/solecover (3).jpg", title: "Solecover – Social Media", subtitle: "Digitaler Auftritt" },
];

/** Speisekarte Gallery Items (9 Spreads) */
export const menuGallery = [
  {
    file: "/portfolio/speisekarte-04.png",
    title: "Traditioneller Kuurdak",
    dishes: "«Кой» куурдак, «Тай» куурдак, «Жожо» куурдак",
    description: "Pfannengerichte aus Lamm-, Fohlen- und Hähnchenfleisch mit gebratenen Kartoffeln und Zwiebeln.",
  },
  {
    file: "/portfolio/speisekarte-02.png",
    title: "Traditionelle Suppen",
    dishes: "Шорпо говядина & Мастава восточная",
    description: "Aromatische Rinderbrühe Schorpo mit frischem Gemüse und orientalische Reissuppe Mastawa.",
  },
  {
    file: "/portfolio/speisekarte-03.png",
    title: "Teigtaschen in Bouillon",
    dishes: "Пельмени с бульоном & Чучвара",
    description: "Feine handgeformte Fleischtaschen serviert in klarer Fleischbrühe mit frischen Kräutern.",
  },
  {
    file: "/portfolio/speisekarte-05.png",
    title: "Zentralasiatische Nationalgerichte",
    dishes: "Апамдын бешбармагы & Плов ташкентский",
    description: "Klassischer Beschbarmak auf handgemachter Nudelschicht und aromatischer Taschkenter Plov.",
  },
  {
    file: "/portfolio/speisekarte-07.png",
    title: "Nudel- & Reisgerichte",
    dishes: "Лагман уйгурский & Ган фан",
    description: "Uigurischer handgezogener Lagman und gedämpfter Reis mit pikanter Fleisch-Gemüse-Sauce.",
  },
  {
    file: "/portfolio/speisekarte-09.png",
    title: "Dampfteigtaschen & Samsa",
    dishes: "Манты с мясом / тыквой & Тандыр-самсы",
    description: "Gedämpfte Manti mit Fleisch- oder Kürbisfüllung und knusprig gebackene Fleischpasteten.",
  },
  {
    file: "/portfolio/speisekarte-06.png",
    title: "Fleischgerichte & Beilagen",
    dishes: "Бифштекс с яйцом & Гуляш со сложным гарниром",
    description: "Klassisches Beefsteak mit Spiegelei und Rindergulasch mit Dreier-Garnitur (Reis, Buchweizen, Püree).",
  },
  {
    file: "/portfolio/speisekarte-08.png",
    title: "Traditionelle Spezialitäten",
    dishes: "Мясо по-казахски & Ыссык курут",
    description: "Zart gekochtes Rindfleisch nach kasachischer Art und sämige Kurut-Suppe.",
  },
  {
    file: "/portfolio/speisekarte-01.png",
    title: "Getränkekarte",
    dishes: "Tees, Kaffee & Erfrischungen",
    description: "Schwarzer und grüner Tee, Milch-Tee, Kaffee-Spezialitäten und Kaltgetränke.",
  },
];

/** Kinderbücher Comparison Items */
export const kinderbuecherComparison = [
  {
    file: "/portfolio/aylin-foto.jpeg",
    tag: "Foto-Referenz",
    badge: "VORBILD",
    title: "Ausgangsfoto des Kindes",
    text: "Echtes Schnappschuss-Porträt als gestalterische Vorlage für Physiognomie, Augenpartie, Haarstruktur und kindlichen Gesichtsausdruck.",
  },
  {
    file: "/portfolio/aylin-illustration-1.png",
    tag: "Buchillustration – Szene 1",
    badge: "ILLUSTRATION",
    title: "Wintermagie mit Lichtspirale & Katze",
    text: "Malerische Buchszene in verschneiter Umgebung. Das Kind hält eine leuchtende Energie-Spirale, begleitet von einer rot-weißen Katze im Schnee.",
  },
  {
    file: "/portfolio/aylin-illustration-2.png",
    tag: "Buchillustration – Szene 2",
    badge: "DETAIL",
    title: "Charakter-Nahaufnahme auf Eis",
    text: "Fokussiertes Porträt im blauen Winterkleid mit subtilen Lichtreflexen auf spiegelglatter Eisfläche und schneebedeckten Baumkronen.",
  },
];

export const mbankMerchGallery = [
  { file: "/portfolio/mbank/Снимок экрана 2026-10-23 181605.png", title: "Konzeptübersicht" },
  { file: "/portfolio/mbank/Снимок экрана 2026-10-23 181653.png", title: "Merch-Konzept" },
  { file: "/portfolio/mbank/Снимок экрана 2026-10-23 181724.png", title: "Gestaltungsdetails" },
  { file: "/portfolio/mbank/Снимок экрана 2026-10-23 181809.png", title: "Präsentationsauszug" },
];
