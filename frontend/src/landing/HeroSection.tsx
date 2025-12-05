import { Box, Button, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        px: { xs: 2, md: 10 }
      }}
    >
      <Box sx={{ flex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" fontWeight={800}>
            SMK LETRIS 2 INDONESIA
          </Typography>

          <Typography variant="h5" sx={{ mt: 2 }} color="primary">
            Sistem Informasi Akademik & Pembelajaran Modern
          </Typography>

          <Typography sx={{ mt: 3 }} fontSize={18}>
            Platform digital resmi untuk siswa, guru, dan admin dalam mengelola
            nilai, presensi, tugas, pengumuman, dan kegiatan sekolah.
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 4, px: 4, py: 1.5 }}
            onClick={() => navigate("/login")}
            startIcon={<SchoolIcon />}
          >
            Masuk Sekarang
          </Button>
        </motion.div>
      </Box>

      <Box
        sx={{
          flex: 1,
          mt: { xs: 5, md: 0 },
          display: "flex",
          justifyContent: "center"
        }}
      >
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="/landing/hero-dashboard.png"
          style={{ width: "90%", borderRadius: 16 }}
        />
      </Box>
    </Box>
  );
}
