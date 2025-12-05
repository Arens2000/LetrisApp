import { Grid, Paper, Typography, Avatar } from "@mui/material";
import SectionContainer from "./components/SectionContainer";

const testimoni = [
  {
    nama: "Rizky",
    role: "Siswa",
    pesan: "Aplikasinya sangat membantu untuk melihat nilai & tugas!",
    foto: "/landing/user1.png"
  },
  {
    nama: "Bu Lestari",
    role: "Guru",
    pesan: "Manajemen nilai & presensi jadi jauh lebih mudah.",
    foto: "/landing/user2.png"
  }
];

export default function TestimoniSection() {
  return (
    <SectionContainer id="testimoni">
      <Typography variant="h4" fontWeight={800} textAlign="center" mb={3}>
        Testimoni Pengguna
      </Typography>

      <Grid container spacing={3}>
        {testimoni.map((t, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper sx={{ p: 3 }}>
              <Avatar src={t.foto} sx={{ width: 60, height: 60, mb: 2 }} />
              <Typography fontWeight={700}>{t.nama}</Typography>
              <Typography fontSize={14} color="text.secondary">
                {t.role}
              </Typography>
              <Typography sx={{ mt: 2 }}>{t.pesan}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
