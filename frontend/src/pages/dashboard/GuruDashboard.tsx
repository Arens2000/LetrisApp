import { Box, Grid, Paper, Typography } from "@mui/material";

export default function GuruDashboard() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Dashboard Guru
      </Typography>

      <Grid container spacing={3}>
        {[
          { title: "Kelas Diampu", value: "5" },
          { title: "Tugas Terkirim", value: "18" },
          { title: "Presensi Hari Ini", value: "93%" },
          { title: "Pengumuman Aktif", value: "4" }
        ].map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2">{card.title}</Typography>
              <Typography variant="h5" fontWeight={700}>
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Info Terbaru</Typography>
            <Typography mt={2} color="text.secondary">
              Sistem siap dipakai. Semua fitur manajemen nilai, kegiatan, dan
              tugas sudah tersedia dalam dashboard guru.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
