import { Box, Grid, Paper, Typography } from "@mui/material";

export default function SiswaDashboard() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Dashboard Siswa
      </Typography>

      <Grid container spacing={3}>
        {[
          { title: "Nilai Rata-rata", value: "88" },
          { title: "Presensi Bulan Ini", value: "96%" },
          { title: "Tugas Belum Selesai", value: "3" },
          { title: "Kegiatan Aktif", value: "2" }
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
            <Typography variant="h6">Pengumuman Terbaru</Typography>
            <Typography mt={2} color="text.secondary">
              Jangan lupa menyelesaikan tugas yang diberikan oleh guru sebelum
              deadline minggu ini!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
