import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setMessage("");
    setError("");
    setLoading(true);

    try {
      await forgotPassword(email);
      setMessage("Link reset password telah dikirim ke email Anda.");
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5"
      }}
    >
      <Paper sx={{ p: 4, width: 400, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Reset Password
        </Typography>

        <TextField
          fullWidth
          label="Email"
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {message && <Typography color="primary">{message}</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          sx={{ mt: 2, height: 45 }}
        >
          {loading ? <CircularProgress size={24} /> : "Kirim Link Reset"}
        </Button>

        <Button fullWidth sx={{ mt: 2 }} href="/auth/login">
          Kembali ke Login
        </Button>
      </Paper>
    </Box>
  );
}
