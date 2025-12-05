import { Paper, Box, Typography, Button } from "@mui/material";
import { Tugas } from "../TugasService";

interface Props {
  tugas: Tugas;
  onOpen: (tugas: Tugas) => void;
}

export default function TugasCard({ tugas, onOpen }: Props) {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" fontWeight={700}>
        {tugas.judul}
      </Typography>
      <Typography>{tugas.mapel} - {tugas.kelas}</Typography>
      <Typography sx={{ mt: 1 }}>{tugas.deskripsi}</Typography>
      <Typography sx={{ mt: 1 }} color="error">
        Deadline: {tugas.deadline}
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => onOpen(tugas)}>
          Detail Tugas
        </Button>
      </Box>
    </Paper>
  );
}
