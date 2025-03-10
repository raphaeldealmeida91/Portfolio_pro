import { useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useColorScheme,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !object || !message) {
      setSnackbarMessage("Tous les champs sont requis !");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    setIsLoading(true);

    const templateParams = {
      from_email: email,
      subject: object,
      message: message,
    };

    emailjs
      .send(
        "service_d3wiibx",
        "template_z6tu5s6",
        templateParams,
        "kmt4PQq7aSKfolanD"
      )
      .then(
        () => {
          setSnackbarMessage("Message envoyé avec succès !");
          setSnackbarSeverity("success");
        },
        () => {
          setSnackbarMessage("Une erreur s'est produite. Veuillez réessayer.");
          setSnackbarSeverity("error");
        }
      )
      .finally(() => {
        setSnackbarOpen(true);
        setIsLoading(false);
        setEmail("");
        setObject("");
        setMessage("");
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
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
            {t("sendEmail")}
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
        }}
      >
        <Box
          component="form"
          ref={form}
          onSubmit={handleSendMessage}
          sx={{
            display: "flex",
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            id="email"
            name="email"
            placeholder="Email"
            label="Email"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="object"
            name="object"
            placeholder="Object"
            label="Object"
            required
            fullWidth
            value={object}
            onChange={(e) => setObject(e.target.value)}
          />
          <TextField
            id="message"
            name="message"
            placeholder="Message"
            label="Message"
            required
            fullWidth
            rows={4}
            multiline
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          >
            <Button
              id="btn-submit"
              startIcon={
                isLoading ? (
                  <CircularProgress
                    size={20}
                    sx={{ color: "rgb(216, 222, 233)" }}
                  />
                ) : (
                  <SendIcon sx={{ color: "rgb(216, 222, 233)" }} />
                )
              }
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "rgb(76, 86, 106)",
                color: "rgb(216, 222, 233)",
                textTransform: "initial",
              }}
              disabled={isLoading}
            >
              {isLoading ? t("sending") : t("send")}
            </Button>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
