import { Box, Button, Paper, Typography } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function PasswordResetSuccess() {
  const [params] = useSearchParams();
  const email = params.get("email");

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" fontWeight={700}>
          Link Reset Terkirim!
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Kami telah mengirimkan link untuk mereset password ke:
        </Typography>

        <Typography sx={{ mt: 1, fontWeight: 700 }}>{email}</Typography>

        <Typography sx={{ mt: 2 }} color="text.secondary">
          Silakan cek kotak masuk atau folder spam jika email tidak ditemukan.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4 }}
          onClick={() => navigate("/login")}
        >
          Kembali ke Login
        </Button>
      </Paper>
    </Box>
  );
}
