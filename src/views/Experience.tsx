import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { motion } from "framer-motion";
import { Box, Divider, Typography, useColorScheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  AcensiJob,
  HightSchool,
  StageBresil,
  SupSchool,
} from "../data/DataExperience";

const Experience = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();
  const timelineItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

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
            {t("experience")}
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
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            "& span": { color: "red" },
          }}
          variant="h6"
        >
          {t("studyWork")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: { xs: "100%", lg: "80%" },
            flexDirection: "column",
          }}
        >
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: { xs: 0.1, sm: 0.3 },
              },
            }}
            position="right"
          >
            {[AcensiJob, SupSchool, StageBresil, HightSchool].map(
              (item, index) => (
                <motion.div
                  key={index}
                  variants={timelineItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography color="textSecondary">{item.date}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{ backgroundColor: isDark ? "#3f3f3f" : "#FFF" }}
                      />
                      <TimelineConnector
                        sx={{ backgroundColor: isDark ? "#3f3f3f" : "#FFF" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        backgroundColor: isDark ? "#3f3f3f" : "#FFF",
                        margin: 1,
                        borderRadius: "10px",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography
                        component="pre"
                        sx={{ whiteSpace: "pre-wrap" }}
                      >
                        {item.content}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </motion.div>
              )
            )}
          </Timeline>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
