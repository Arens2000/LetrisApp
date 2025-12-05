import { Typography, Grid, Paper } from "@mui/material";
import SectionContainer from "./components/SectionContainer";

export default function VisiMisi() {
  return (
    <SectionContainer id="visi-misi">
      <Typography variant="h4" textAlign="center" fontWeight={800} mb={3}>
        Visi & Misi
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={700}>
              Visi
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Menjadi sekolah unggulan yang menghasilkan lulusan kompeten,
              berkarakter, dan siap menghadapi perkembangan teknologi global.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={700}>
              Misi
            </Typography>
            <Typography sx={{ mt: 2 }}>
              - Mengembangkan pembelajaran berorientasi teknologi  
              - Membentuk karakter disiplin dan bertanggung jawab  
              - Menyediakan lingkungan belajar yang modern  
              - Meningkatkan kemampuan akademik dan non-akademik siswa  
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
