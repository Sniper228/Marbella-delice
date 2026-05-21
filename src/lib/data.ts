export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Marque", href: "#marque" },
  { label: "Produits", href: "#produits" },
  { label: "Qualite", href: "#qualite" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export const products = [
  {
    id: "fruite",
    name: "Yaourt fruité",
    description:
      "Melange de fruits frais en couches, texture veloutee et fraicheur vibrante a chaque cuillere.",
    priceFrom: 2000,
    image: "/images/image_2.jpg",
    gradient: "from-strawberry/25 via-peach/15 to-cream",
    accent: "bg-strawberry/20 text-strawberry-deep",
    glow: "rgba(244,164,184,0.35)",
    badge: "Signature",
    popular: true,
  },
  {
    id: "granola",
    name: "Yaourt fruité aux granola",
    description:
      "Fruits de saison, yaourt onctueux et granola dore pour un contraste croquant et gourmand.",
    priceFrom: 2000,
    image: "/images/image_1.jpg",
    gradient: "from-[#d4a574]/20 via-peach/20 to-cream",
    accent: "bg-[#d4a574]/25 text-[#8b5e34]",
    glow: "rgba(212,165,116,0.35)",
    badge: "Croquant",
    popular: false,
  },
  {
    id: "vanille",
    name: "Yaourt vanille",
    description:
      "Vanille infusee lentement, douceur raffinee et touche d'amandes pour une finale elegante.",
    priceFrom: 1500,
    image: "/images/image_4.jpg",
    gradient: "from-cream-deep/60 via-peach/25 to-cream",
    accent: "bg-peach/45 text-[#a67c52]",
    glow: "rgba(255,212,168,0.4)",
    badge: "Classique",
    popular: false,
  },
  {
    id: "mangue",
    name: "Yaourt mangue",
    description:
      "Mangue mure du terroir, notes solaires et onctuosite tropicale pour un plaisir intense.",
    priceFrom: 2000,
    image: "/images/image_5.jpg",
    gradient: "from-mango/30 via-peach/20 to-cream",
    accent: "bg-mango/25 text-[#c47a2e]",
    glow: "rgba(245,169,98,0.4)",
    badge: "Tropical",
    popular: false,
  },
];

export const stats = [
  { value: 453, suffix: "+", label: "Clients satisfaits" },
  { value: 2103, suffix: "+", label: "Commandes livrees" },
  { value: 7, suffix: "+", label: "Saveurs disponibles" },
  { value: 95, suffix: "%", label: "Livraisons a l'heure" },
];

export const qualityPillars = [
  {
    title: "Lait frais du jour",
    description: "Collecte locale chaque matin pour une texture incomparable.",
    icon: "drop" as const,
  },
  {
    title: "Fruits naturels",
    description: "Pieces de fruits reels, sans arômes artificiels ajoutes.",
    icon: "leaf" as const,
  },
  {
    title: "Fabrication locale",
    description: "Atelier artisanal a Marbella, controle qualite a chaque lot.",
    icon: "factory" as const,
  },
  {
    title: "Hygiene premium",
    description: "Process certifie, chaine du froid respectee de A a Z.",
    icon: "shield" as const,
  },
];

export const brandPromises = [
  {
    title: "Fruits soigneusement selectionnes",
    description: "Des ingredients choisis pour leur maturite, leur parfum et leur eclat naturel.",
    icon: "fruit" as const,
  },
  {
    title: "Texture onctueuse",
    description: "Une matiere lisse, dense et veloutee, pensee pour le plaisir en bouche.",
    icon: "bowl" as const,
  },
  {
    title: "Recettes artisanales",
    description: "Preparation en petites series, avec un savoir-faire exigeant et sincere.",
    icon: "chef" as const,
  },
  {
    title: "Fraicheur garantie",
    description: "Chaine du froid respectee de l'atelier jusqu'a votre table.",
    icon: "snowflake" as const,
  },
  {
    title: "Plus de 7 saveurs disponibles",
    description: "Une gamme evolutive pour surprendre, renouveler et ravir a chaque visite.",
    icon: "sparkle" as const,
  },
  {
    title: "Experience premium",
    description: "Du produit au service, chaque detail respire l'exigence et la douceur.",
    icon: "diamond" as const,
  },
];

export const digitalApps = [
  {
    id: "loban",
    name: "LOBAN",
    tag: "Logistique",
    description:
      "Plateforme logistique intelligente permettant la gestion moderne des livraisons et operations terrain.",
    href: "#",
    accent: "from-fresh-blue/30 via-cream to-cream",
    glow: "rgba(126,200,227,0.35)",
    badgeClass: "bg-fresh-blue/20 text-[#4a8fa8]",
    mockupVariant: "logistics" as const,
  },
  {
    id: "sheloa",
    name: "SHELOA",
    tag: "Sante digitale",
    description:
      "Carnet de vaccination numerique moderne pour suivre le calendrier vaccinal avec rappels gratuits SMS et WhatsApp.",
    href: "#",
    accent: "from-emerald-100/80 via-cream to-cream",
    glow: "rgba(120,180,140,0.3)",
    badgeClass: "bg-emerald-100/80 text-emerald-800",
    mockupVariant: "health" as const,
  },
  {
    id: "nufrika",
    name: "NUFRIKA",
    tag: "Culture et innovation",
    description:
      "Plateforme digitale moderne inspiree de la culture, de l'innovation et de l'identite africaine.",
    href: "#",
    accent: "from-mango/25 via-peach/20 to-cream",
    glow: "rgba(245,169,98,0.35)",
    badgeClass: "bg-mango/25 text-[#c47a2e]",
    mockupVariant: "culture" as const,
  },
];

export const galleryItems = [
  {
    src: "/images/image_2.jpg",
    alt: "Parfaits yaourt fruits, presentation premium",
    caption: "Saveur fruitée signature",
    featured: true,
  },
  {
    src: "/images/image_5.jpg",
    alt: "Yaourt mangue onctueux",
    caption: "Mangue dorée du terroir",
    featured: false,
  },
  {
    src: "/images/image_1.jpg",
    alt: "Yaourt fruité aux granola",
    caption: "Granola croquant",
    featured: false,
  },
  {
    src: "/images/image_4.jpg",
    alt: "Yaourt vanille artisanal",
    caption: "Vanille raffinée",
    featured: false,
  },
  {
    src: "/images/image_3.jpg",
    alt: "Parfait yaourt fruits en couches",
    caption: "Couches gourmandes",
    featured: false,
  },
];

export const deliveryFeatures = [
  {
    title: "Livraison rapide",
    description: "Commande preparee en moins de 2h dans la zone urbaine.",
    icon: "truck" as const,
  },
  {
    title: "Commande WhatsApp",
    description: "Un message suffit. Reponse personnalisee en quelques minutes.",
    icon: "whatsapp" as const,
  },
  {
    title: "Disponibilite",
    description: "Stocks mis a jour chaque jour. Plus de rupture surprise.",
    icon: "clock" as const,
  },
  {
    title: "Simplicite",
    description: "Choisissez, validez, recevez. Zero friction, zero compte.",
    icon: "sparkle" as const,
  },
];

export const WHATSAPP_URL = "https://wa.me/qr/DKOCWSBP6NHTD1";

export const MAPS_URL = "https://maps.app.goo.gl/zZgtvAb3njRc7qbu7";

export const contactInfo = {
  address: "Unnamed Road, Kohe, Togo",
  phones: [
    { display: "+228 91 38 44 58", href: "tel:+22891384458" },
    { display: "+228 92 31 77 34", href: "tel:+22892317734" },
  ],
  email: "contact@marbelladelice.com",
  hours: {
    weekdays: "Lun — Sam : 8h — 20h",
    sunday: "Dim : 9h — 14h",
    note: "Livraison disponible dans un rayon de 25 km.",
  },
};
