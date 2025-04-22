import SFR from "../assets/sfr.jpeg";
import Acenstream from "../assets/acenstream.jpeg";
import Acensigne from "../assets/acensigne.jpeg";
import Koabuy from "../assets/koabuy.png";
import Patterns from "../assets/patterns-in-your-life.jpeg";
import Society2production from "../assets/society2production.png";
import Besnik from "../assets/besnik.png";
import Leloponalobi from "../assets/leloponalobi.png";
import ManageFreelance from "../assets/managing.png";
import Quickit from "../assets/quickit.png";

export const SFRPro = {
  title: "Etiquette unifiée SFR - Projet professionnel chez Acensi",
  period: "2024-2025",
  description:
    "Étiquette Unifiée est un projet client visant à générer et créer des étiquettes pour divers produits proposés par SFR dans ses boutiques. En plus de cette fonctionnalité, l'application web permet de gérer les stocks sur les différents points de vente, de créer et planifier des remises immédiates, d’ajouter des groupes d’offres à une catégorie de produits et de générer des codes-barres permettant d’identifier les produits via un scan. L’un des aspects techniques les plus intéressants était la création des étiquettes en amont, avec la gestion de leurs dimensions, de leur affichage et des différentes options qui les composent. Face à un grand nombre de produits, j’ai également appris à gérer une volumétrie importante de données. J’ai participé aux clôtures de sprint avec le Product Owner de SFR, aux démonstrations et à la planification, ce qui m’a permis d’améliorer mon expression orale et mes compétences en gestion de projet.",
  stacks: [
    "ReactJs",
    "Material U.I",
    "Redux",
    "NodeJs",
    "Fastify",
    "Sequelize",
    "Postgres",
    "MustacheJs",
    "Redis",
  ],
  image: SFR,
  link: null,
};

export const AcenstreamPro = {
  title: "Acenstream - Projet professionnel chez Acensi",
  period: "2023-2025",
  description:
    "Acenstream est un CMS multimédia qui permet de diffuser du contenu (images, vidéos, flux web et vidéos YouTube) sur un player codé en React et Electron. Ce player est installé dans un Raspberry Pi 4, branché à un téléviseur pour diffuser le contenu. Le Back-Office offre un contrôle optimal de la diffusion. Il permet de planifier, programmer et créer des événements, des playlists de médias, ainsi que des groupes d'écrans, pour une expérience simple et efficace. Grâce au WebSocket, la diffusion est en temps réel, offrant une maîtrise totale. De plus, grâce au protocole VNC, il est possible d'avoir une visibilité en temps réel des players.",
  stacks: [
    "ReactJs",
    "Material U.I",
    "Redux",
    "NodeJs",
    "Fastify",
    "Sequelize",
    "Postgres",
    "Electron",
    "Docker",
    "Socket.IO",
  ],
  image: Acenstream,
  link: null,
};

export const AcensignePro = {
  title: "Acensigne - Projet professionnel chez Acensi",
  period: "2025",
  description:
    "Acensigne est un projet interne, une application web permettant de répertorier les transmissions de matériel informatique entre le DESK et les autres employés. Ses fonctionnalités incluent la création d’un contrat de transmission de matériel, la signature électronique de ce contrat et l’enregistrement des transmissions effectuées. L’un des aspects les plus intéressants sur le plan technique a été l’opportunité de progresser et d’apprendre Svelte et NestJS, deux technologies que je ne maîtrisais pas auparavant.",
  stacks: ["Svelte", "CSS3", "NestJs", "TypeORM", "Postgres", "Docker"],
  image: Acensigne,
  link: null,
};

export const KoabuyPro = {
  title: "Koabuy - Projet personnel",
  period: "2024-2025",
  description:
    "Koabuy est un site permettant de créer sa propre boutique en ligne et de générer des revenus avec Stripe comme moyen de paiement. Le principe est similaire à Shopify, mais en plus simple et plus rapide. L’utilisateur peut créer sa boutique et ajouter ses produits en moins de deux minutes. Il pourra ensuite gérer sa boutique, ses produits et les transactions, jusqu’à l’envoi des articles via DHL ou Mondial Relay. Créez votre boutique e-commerce et soyez référencé sur le web !",
  stacks: [
    "ViteJs",
    "Material U.I",
    "Redux",
    "NodeJs",
    "Fastify",
    "Prisma",
    "Postgres",
    "Neon",
    "Stripe",
    "DHL Express API",
    "Mondial Relay API",
  ],
  image: Koabuy,
  link: "https://koabuy.onrender.com",
};

export const PatternsInYourLifePro = {
  title: "Patterns in your life - Projet personnel",
  period: "2024",
  description:
    "Patterns in your life est un site conçu pour vous aider à explorer et identifier les schémas qui influencent votre vie. Grâce à un questionnaire de 22 questions, vous pourrez évaluer la véracité des énoncés par rapport à votre enfance et à votre situation actuelle d’adulte. L’outil s’inspire du livre Je réinvente ma vie de Janet S. Klosko et Jeffrey Young, et vise à vous offrir une meilleure compréhension de vos comportements. Plongez dans une introspection enrichissante et commencez à transformer votre vie dès aujourd'hui !",
  stacks: [
    "ViteJs",
    "Material U.I",
    "Redux",
    "NodeJs",
    "Fastify",
    "Google Drive API",
  ],
  image: Patterns,
  link: null,
};

export const Society2ProductionPro = {
  title: "Society2production - Projet personnel",
  period: "2025",
  description:
    "Society2production est un site web que j’ai développé pour un collectif de jeunes entrepreneurs passionnés de photographie, dont je fais partie. Il permet de réserver une séance photo en ligne et sert de vitrine pour présenter nos réalisations et mettre en valeur notre savoir-faire.",
  stacks: ["ViteJs", "Material U.I", "Framer-motion", "CSS", "EmailJS"],
  image: Society2production,
  link: "https://society2production.onrender.com/",
};

export const LeloponalobiPro = {
  title: "Lelo Pona Lobi - Projet professionnel pour une association",
  period: "2025",
  description:
    "Lelo Pona Lobi est un site web que j’ai développé pour une association dont je suis membre. Il répond aux besoins spécifiques d’une structure associative et propose plusieurs fonctionnalités : inscription à une newsletter, ajout de commentaires et de réactions sur les articles et actions de l’association, ainsi qu’une page de contact avec formulaire par e-mail.",
  stacks: ["ViteJs", "Material U.I", "CSS", "EmailJS", "Mailchimp"],
  image: Leloponalobi,
  link: "https://leloponalobi.onrender.com/",
};

export const QuickitPro = {
  title: "Quickit - Projet personnel",
  period: "2021",
  description: "Landing page basé sur une maquette FIGMA.",
  stacks: ["React.js", "Bootstrap", "CSS"],
  image: Quickit,
  link: "https://landing-page-quickit.onrender.com/",
};

export const ManageFreelancePro = {
  title: "Manage Freelance - Projet personnel",
  period: "2021",
  description: "Landing page basé sur une maquette FIGMA.",
  stacks: ["React.js", "Material U.I", "CSS"],
  image: ManageFreelance,
  link: "https://landing-page-quickit.onrender.com/",
};

export const BesnikPro = {
  title: "Besnik - Projet personnel",
  period: "2022",
  description: "Landing page basé sur une maquette FIGMA.",
  stacks: ["React.js", "Material U.I", "CSS"],
  image: Besnik,
  link: "https://landing-page-mui.onrender.com",
};
