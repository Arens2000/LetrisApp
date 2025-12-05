import { Paper, Typography, Grid } from "@mui/material";
import SectionContainer from "./components/SectionContainer";

const programs = [
  { nama: "Rekayasa Perangkat Lunak (RPL)", desc: "Dasar pemrograman, database, web, mobile, IoT." },
  { nama: "Teknik Komputer Jaringan (TKJ)", desc: "Network engineering, server, cloud, cybersecurity." },
  { nama: "Akuntansi & Keuangan Lembaga (AKL)", desc: "Akuntansi modern, pajak, laporan keuangan." },
  { nama: "Otomatisasi & Tata Kelola Perkantoran (OTKP)", desc: "Administrasi, manajemen, layanan publik." },
];

export default function ProgramKeahlian() {
  return (
    <SectionContainer id="program">
      <Typography variant="h4" fontWeight={800} textAlign="center" mb={3}>
        Program Keahlian
      </Typography>

      <Grid container spacing={3}>
        {programs.map((p, i) => (
          <Grid item xs={12} md={6} lg={3} key={i}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" fontWeight={700}>
                {p.nama}
              </Typography>
              <Typography sx={{ mt: 1 }}>{p.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
