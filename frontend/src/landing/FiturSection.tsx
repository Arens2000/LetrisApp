import { Grid, Paper, Typography } from "@mui/material";
import SectionContainer from "./components/SectionContainer";

const fitur = [
  "Manajemen Nilai",
  "Presensi Siswa",
  "Tugas & Submission",
  "Pengumuman",
  "Agenda Kegiatan",
  "Manajemen User",
  "Rekap Nilai PDF/Excel",
  "Grafik & Statistik",
  "Notifikasi Realtime"
];

export default function FiturSection() {
  return (
    <SectionContainer id="fitur">
      <Typography variant="h4" fontWeight={800} textAlign="center" mb={3}>
        Fitur Aplikasi
      </Typography>

      <Grid container spacing={3}>
        {fitur.map((f, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper sx={{ p: 3, textAlign: "center", fontSize: 18 }}>
              {f}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
