import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";
import {
  EmojiObjects,
  Public,
  RocketLaunch,
  Warning,
  Visibility,
  Grass,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Stratégie Continentale sur l’Intelligence Artificielle",
    source: "Union Africaine",
    url: "https://au.int/sites/default/files/documents/44004-doc-FR_Strategie_Continentale_sur_lIntelligence_Artificielle_3.pdf?ref=fakt-afrique.org",
    summary:
      "Vision de l’Union Africaine pour un développement éthique et inclusif de l’IA sur le continent.",
  },
  {
    title:
      "Top 5 des applications de l’IA qui transforment l’agriculture et la santé en Afrique",
    source: "Jangaan Tech",
    url: "https://jangaantech.com/top-5-des-applications-de-lia-qui-transforment-lagriculture-et-la-sante-en-afrique/",
    summary:
      "Les applications de l’IA révolutionnent les secteurs agricoles et de santé en Afrique, apportant des solutions innovantes pour améliorer la productivité et l’accès aux soins.",
  },
  {
    title: "GITEX Africa",
    source: "Wikipédia",
    url: "https://fr.wikipedia.org/wiki/GITEX_Africa",
    summary:
      "Le plus grand salon tech d’Afrique réunissant startups, gouvernements et investisseurs.",
  },
  {
    title: "Les défis de l’IA « made in Africa »",
    source: "Le Point",
    url: "https://www.lepoint.fr/sciences-nature/les-defis-de-l-ia-made-in-africa-15-02-2025-2582480_1924.php#11",
    summary:
      "Les défis liés à l’IA en Afrique, incluant les obstacles technologiques, éthiques et économiques à surmonter pour que l’Afrique devienne un acteur clé dans l'IA.",
  },
  {
    title:
      "L'Intelligence artificielle en Afrique potentiel de développement économique défis a relever",
    source: "Nations Unies Commission économique pour l'Afrique",
    url: "https://repository.uneca.org/handle/10855/50183#:~:text=La%20partie%20consacrée%20à%20l,au%20PIB%20d'ici%202030.",
    summary:
      "Un rapport sur les enjeux et les opportunités de l'IA pour l'Afrique, mettant en lumière les mesures nécessaires pour que l'IA stimule la croissance économique sur le continent.",
  },
  {
    title: "Crop's Talk, une application mobile de conseils agricoles",
    source: "Agri Digital",
    url: "https://agridigitale.tg/article/crops-talk-une-application-mobile-de-conseils-agricoles",
    summary:
      "Une appli qui connecte les agriculteurs africains à des conseils pratiques et personnalisés.",
  },
];

const MotionCard = motion(Card);

const Section = ({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <MotionCard
    variant="outlined"
    sx={{ mb: 4 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <Card variant="outlined" sx={{ mb: 4 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          {icon}
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ typography: "body1" }}>{children}</Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="h6">{articles[0 + Number(id)].title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {articles[0 + Number(id)].summary}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 2, display: "block" }}
        >
          Source : {articles[0 + Number(id)].source}
        </Typography>
        <Button
          size="small"
          href={articles[0 + Number(id)].url}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
        >
          Lire l’article
        </Button>
      </CardContent>
    </Card>
  </MotionCard>
);

const TechMonitoring = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
            }}
            variant="h5"
          >
            Veille Technologique
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isDark ? "#282828" : "#F1F1F1",
          padding: "60px 0",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "80%",
          }}
        >
          <Container maxWidth="md" sx={{ py: 5 }}>
            <Typography
              variant="h5"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              Développement de l’IA en Afrique
            </Typography>

            <Section
              id="0"
              icon={<EmojiObjects />}
              title="🧭 Stratégies et politiques publiques"
            >
              En juillet 2024, l’Union africaine a adopté une Stratégie
              continentale sur l’intelligence artificielle, visant à promouvoir
              une IA éthique, inclusive et centrée sur le développement. Cette
              stratégie s’aligne sur l’Agenda 2063 et les Objectifs de
              Développement Durable (ODD), en mettant l’accent sur la
              souveraineté numérique, la formation et la gouvernance des
              données. <br />
              <br />
              Plusieurs pays ont également lancé leurs propres stratégies
              nationales. Le Nigeria a publié sa National Artificial
              Intelligence Strategy en 2024, tandis que le Sénégal développe des
              programmes intégrant les langues locales dans les systèmes d’IA.
            </Section>

            <Section
              id="1"
              icon={<Public />}
              title="🌍 Cas d’usage et innovations locales"
            >
              <strong>Agriculture :</strong> Des applications d’IA aident les
              agriculteurs à optimiser les rendements et à anticiper les aléas
              climatiques.
              <br />
              <strong>Santé :</strong> Des outils prédictifs sont utilisés pour
              diagnostiquer des maladies et améliorer l’accès aux soins, comme
              au Rwanda avec l’Ircad Africa.
              <br />
              <strong>Éducation :</strong> Des initiatives telles que AfricAIED
              2024 développent des outils d’apprentissage personnalisés.
              <br />
              <strong>Inclusion sociale :</strong> Au Maroc, le centre AI
              Movement conçoit des solutions pour lutter contre l’illettrisme et
              soutenir les femmes rurales.
            </Section>

            <Section
              id="2"
              icon={<RocketLaunch />}
              title="🚀 Écosystème et dynamique entrepreneuriale"
            >
              Le GITEX Africa, tenu à Marrakech, est devenu un événement majeur
              réunissant start-up, investisseurs et décideurs autour des
              technologies émergentes.
              <br />
              Des pays comme le Rwanda ont lancé des programmes ambitieux, tels
              que le développement de 50 applications d’IA en quatre ans.
              <br />
              En 2024, certaines entreprises africaines ont généré jusqu’à 65 %
              de leurs revenus grâce à l’adoption de l’IA, illustrant son impact
              économique croissant.
            </Section>

            <Section id="3" icon={<Warning />} title="⚠️ Défis à relever">
              <strong>Infrastructures :</strong> Le manque d’accès à des
              infrastructures technologiques adéquates freine le déploiement de
              l’IA dans certaines régions.
              <br />
              <strong>Formation :</strong> Besoin crucial de former des experts
              en IA, nécessitant des investissements dans l’éducation et la
              recherche.
              <br />
              <strong>Réglementation :</strong> Mise en place de cadres
              juridiques adaptés pour protéger les données personnelles.
              <br />
              <strong>Inégalités numériques :</strong> L’adoption de l’IA doit
              être inclusive pour éviter d’amplifier les disparités existantes.
            </Section>

            <Section
              id="4"
              icon={<Visibility />}
              title="🔮 Perspectives et potentiel économique"
            >
              Selon PwC, l’IA pourrait générer jusqu’à 1 500 milliards de
              dollars pour l’économie africaine d’ici 2030 si le continent capte
              10 % du marché mondial. Cela nécessite des investissements
              continus dans la formation, l’infrastructure, la recherche et la
              réglementation, tout en garantissant une IA bénéfique à l’ensemble
              de la population.
            </Section>

            <Section
              id="5"
              icon={<Grass />}
              title="🌱 Exemple de projet IA en Afrique : Crop’s Talk – Tunisie"
            >
              Développée par l’agronome tunisienne <strong>Rabeb Fersi</strong>,{" "}
              <strong>Crop’s Talk</strong> est une application mobile lauréate
              du Challenge App Afrique 2023. Elle utilise l’
              <strong>intelligence artificielle</strong> pour optimiser
              l’irrigation et l’usage des engrais chez les petits agriculteurs.
              L'application identifie les cultures et analyse les données de
              terrain pour recommander précisément les ressources nécessaires.
              Testée sur l’olivier, la vigne et les agrumes, elle permet de{" "}
              <strong>réduire le gaspillage en eau et en électricité</strong>{" "}
              tout en augmentant la productivité. L’objectif est désormais de{" "}
              <strong>déployer cette solution à l’échelle continentale</strong>.
            </Section>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default TechMonitoring;
