import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  MenuItem
} from "@mui/material";
import { useAuth, UserRole } from "../../context/AuthContext";

export default function Register() {
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("siswa");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      await register(email, password, role);
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
          Register
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          select
          fullWidth
          label="Pilih Peran"
          sx={{ mb: 2 }}
          value={role}
          onChange={(e) => setRole(e.target.value as UserRole)}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="guru">Guru</MenuItem>
          <MenuItem value="siswa">Siswa</MenuItem>
        </TextField>

        {error && (
          <Typography color="error" mb={2}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          onClick={handleRegister}
          disabled={loading}
          sx={{ height: 45 }}
        >
          {loading ? <CircularProgress size={24} /> : "Buat Akun"}
        </Button>

        <Button
          fullWidth
          sx={{ mt: 2 }}
          href="/auth/login"
        >
          Sudah punya akun? Login
        </Button>
      </Paper>
    </Box>
  );
}
