// Fuente de verdad — datos extraídos de referencias/CONTEXTO_PIEL_DE_AGUA.md
// NO modificar sin actualizar el documento fuente

export const brand = {
  name: "Piel de Agua",
  englishName: "Watta Skin",
  tagline: "Sentirse uno con el océano",
  taglineAlt: "Somos agua y movimiento",
  secondSkin: "Una segunda piel inspirada en el océano",
  promise:
    "No ofrecemos solo trajes… ofrecemos la experiencia de sentirse uno con el océano.",
  differentiator: "Trajes diseñados por buzos para los amantes del océano.",
  country: "Colombia",
  phone: "313 333 9162",
  domain: "pieldeagua.com",
  social: "@piel_de_agua",
  email: "comercial.pieldeagua@gmail.com",
  address: null as null, // PENDIENTE — placeholder editable
  ctaPrimary: "Lleva el océano contigo",
  ctaSecondary: "Explorar colecciones",
};

export const stats = [
  {
    value: 98,
    suffix: "%",
    label: "rayos UVA/UVB bloqueados",
    detail: "UPF 50+ / UV-50",
  },
  {
    value: 8,
    suffix: "+",
    label: "deportes acuáticos",
    detail: "en un solo producto",
  },
  {
    value: 3,
    suffix: "×",
    label: "más elasticidad y durabilidad",
    detail: "que el promedio",
  },
];

export const collections = [
  {
    id: "tiburon-ballena",
    name: "Tiburón Ballena",
    headline: "El gigante más noble del océano",
    description:
      "El pez más grande del mar, filtrador y dócil, se desliza a ~5 km/h. Cada individuo tiene un patrón único de rayas y manchas. Completamente inofensivo para humanos, tranquilo con los buzos.",
    conservation:
      "En peligro por colisiones con barcos, pesca incidental y contaminación.",
    image: "/images/tiburon-ballena.jpeg",
    accentColor: "#00C8E8",
  },
  {
    id: "tortuga",
    name: "Tortuga",
    headline: "Gracia ancestral bajo el mar",
    description:
      "Su piel absorbe pequeñas cantidades de oxígeno; resistente y flexible. Soporta presión, corales, mordidas y largas migraciones. Las escamas funcionan como sensores: detectan temperatura, vibraciones y depredadores.",
    conservation:
      "Coloridos viajeros que cautivan por su gracia al nadar y su longevidad.",
    image: "/images/tortuga.jpeg",
    accentColor: "#00B07A",
  },
  {
    id: "tiburon-tigre",
    name: "Tiburón Tigre",
    headline: "Una obra maestra de la ingeniería natural",
    description:
      "Piel cubierta por millones de microestructuras tipo 'dientes' (dentículos) que reducen la fricción y protegen de heridas. Detecta vibraciones, olores diluidos y campos eléctricos —su sexto sentido. Su hidrodinámica inspira tecnologías del futuro.",
    conservation:
      "Su biomimética inspira trajes de natación y recubrimientos antibacterianos avanzados.",
    image: "/images/tiburon-tigre.jpg",
    accentColor: "#4A9EE8",
  },
  {
    id: "raya-aguila",
    name: "Raya Águila",
    headline: "Vuela bajo el agua",
    description:
      "Usa sus aletas pectorales como alas y salta más de 1 m fuera del agua. Cada raya tiene un patrón de manchas blancas único. Puede superar 3 m de envergadura y ~230 kg. Ovovivípara: las crías nacen ya formadas.",
    conservation:
      "Sus dentículos dérmicos ahorran energía al nadar. La estructura de su piel inspira biomimética marina.",
    image: "/images/raya-aguila.jpg",
    accentColor: "#A78BFA",
  },
  {
    id: "tiburon-azul",
    name: "Tiburón Azul",
    headline: "El color del océano hecho piel",
    description:
      "Inspirado en la piel del tiburón ballena, llevado a las tonalidades azules que asemejan el color del océano donde habita. Elegante, profundo y en perfecta armonía con el agua que lo rodea.",
    conservation:
      "Una oda visual al mar abierto y a las criaturas que lo llaman hogar.",
    image: "/images/tiburon-azul.jpg",
    accentColor: "#3B82F6",
  },
];

export const technology = [
  {
    id: "upf",
    iconKey: "sun",
    title: "UPF 50+ / UV-50",
    description:
      "Bloquea hasta el 98% de rayos UVA/UVB. La protección no se pierde con el lavado.",
  },
  {
    id: "creora",
    iconKey: "droplets",
    title: "Creora® Highclo™",
    description:
      "Mayor resistencia al cloro y al agua de mar. Mantiene la elasticidad 3× más que el promedio del mercado.",
  },
  {
    id: "drive",
    iconKey: "wind",
    title: 'Secado rápido "DRY"',
    description:
      "Acelera la evaporación del sudor y estabiliza la temperatura corporal.",
  },
  {
    id: "ergonomic",
    iconKey: "move",
    title: "Diseño ergonómico",
    description:
      "Cuello alto, cremallera frontal, mangas largas con aberturas para los pulgares y estribos para los pies, asegurando un ajuste perfecto.",
  },
  {
    id: "fabric",
    iconKey: "layers",
    title: "85% poliéster · 15% elastano",
    description:
      "Tela manufacturada en Brasil por expertos en telas acuáticas. Confección colombiana de alta calidad.",
  },
  {
    id: "protection",
    iconKey: "shield",
    title: "Protección total",
    description:
      "Contra sol, picaduras, abrasiones, corales y contacto con especies marinas.",
  },
];

export const sports = [
  "Natación",
  "Buceo",
  "Apnea",
  "Surf",
  "Snorkel",
  "SUP / Paddleboard",
  "Kayak",
  "Remo",
  "Vela",
  "Kitesurf",
];

export const testimonials = [
  {
    quote:
      "Llevaba años untándome bloqueador antes de entrar al mar. Con este traje ya no lo necesito. Tres horas de apnea y sin una rasquiña, sin irritación, sin nada.",
    author: "Valentina R.",
    location: "Cozumel",
    rating: 5,
  },
  {
    quote:
      "Pensé que iba a ser un neopreno más del montón. Pero no — es ligerísimo, no da calor y se seca rapidísimo. Llevo meses usándolo y sigue igual de nuevo.",
    author: "Diego M.",
    location: "Santa Marta",
    rating: 5,
  },
  {
    quote:
      "Soy instructor y se lo recomiendo a todos mis estudiantes. Fuera de la protección solar, te da una capa extra de seguridad con los corales. No me lo quito.",
    author: "Andrés P.",
    location: "Roatán",
    rating: 5,
  },
];

export const socialProof = {
  rating: 4.9,
  reviews: 568,
};

export const products = [
  {
    id: "tiburon-ballena-full",
    name: "Tiburón Ballena",
    collection: "Tiburón Ballena",
    type: "Bodysuit completo",
    price: 169,
    currency: "USD",
    badge: "Más vendido",
    badgeVariant: "cyan" as const,
    collectionId: "tiburon-ballena",
  },
  {
    id: "manta-plata",
    name: "Manta Plata",
    collection: "Raya / Manta",
    type: "Bodysuit completo",
    price: 169,
    currency: "USD",
    badge: "Nuevo",
    badgeVariant: "green" as const,
    collectionId: "raya-aguila",
  },
  {
    id: "noche-estelar",
    name: "Noche Estelar",
    collection: "—",
    type: "Bodysuit medio",
    price: 129,
    currency: "USD",
    badge: "Edición limitada",
    badgeVariant: "purple" as const,
    collectionId: null,
  },
];

export const club = [
  {
    title: "Salidas",
    description:
      "Apnea, buceo y SUP con la tribu, cada mes. Explora nuevos spots junto a quienes sienten el océano como su hogar.",
    iconKey: "calendar",
  },
  {
    title: "Bitácora",
    description:
      "Spots, ciencia del mar y guías de cuidado. Un diario colectivo para quienes viven el agua.",
    iconKey: "book-open",
  },
  {
    title: "Impacto",
    description:
      "Cada compra apoya limpiezas de arrecife. Somos una marea de cambio que cuida lo que más amamos.",
    iconKey: "leaf",
  },
];

export const conservation = {
  headline: "Protege lo que amas",
  antiSunscreen:
    "Al usar Piel de Agua evitas los protectores solares químicos dañinos —como la oxibenzona— que deterioran los arrecifes de coral.",
  donation:
    "Donamos parte de las ganancias a organizaciones sin fines de lucro de conservación marina.",
  partners: null as null, // PENDIENTE — nombres de organizaciones aliadas
  news: {
    headline: "El océano nos necesita",
    facts: [
      "En los últimos 10 años los océanos absorben ~31% de las emisiones de carbono anuales.",
      "Los océanos absorben más del 90% del exceso de calor del planeta.",
      "La acidificación, las olas de calor marinas y la pérdida de hielo afectan la vida marina.",
    ],
  },
};

export const returnPolicy = {
  term: "30 días",
  termNote: "posteriores a la recepción del producto",
  conditions: [
    "Defecto por confección (costuras y terminados)",
    "Defecto por cremallera",
  ],
  note: "Según disponibilidad de inventario y uso adecuado del producto.",
  shippingAddress: "Medellín, Colombia (a convenir)",
};
