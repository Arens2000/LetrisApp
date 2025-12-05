import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Rata-rata Nilai",
        data: [80, 82, 85, 87, 90, 92],
        borderColor: "#1976d2",
        backgroundColor: "rgba(25,118,210,0.2)"
      }
    ]
  };

  const doughnutData = {
    labels: ["Hadir", "Izin", "Alpa"],
    datasets: [
      {
        data: [320, 40, 20],
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"]
      }
    ]
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Dashboard Admin
      </Typography>

      <Grid container spacing={3}>
        {/* CARD STAT */}
        {[
          { title: "Total Siswa", value: "540" },
          { title: "Total Guru", value: "38" },
          { title: "Kegiatan Berjalan", value: "12" },
          { title: "Tugas Aktif", value: "27" }
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

        {/* LINE CHART */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Grafik Perkembangan Nilai
            </Typography>
            <Line data={chartData} />
          </Paper>
        </Grid>

        {/* DOUGHNUT */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Statistik Presensi
            </Typography>
            <Doughnut data={doughnutData} />
          </Paper>
        </Grid>

        {/* BAR */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Nilai Per Mapel
            </Typography>
            <Bar
              data={{
                labels: ["MTK", "IPA", "IPS", "B. Indonesia", "B. Inggris"],
                datasets: [
                  {
                    label: "Nilai",
                    data: [88, 92, 85, 90, 91],
                    backgroundColor: "#1976d2"
                  }
                ]
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
