import {
  Paper,
  Box,
  Typography,
  Button
} from "@mui/material";
import { Kegiatan } from "../KegiatanService";

interface Props {
  data: Kegiatan;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function KegiatanCard({ data, onEdit, onDelete }: Props) {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      {data.poster && (
        <img
          src={data.poster}
          alt="poster"
          style={{ width: "100%", borderRadius: 8, marginBottom: 12 }}
        />
      )}

      <Typography variant="h6" fontWeight={700}>
        {data.judul}
      </Typography>

      <Typography color="text.secondary">{data.tanggal}</Typography>

      <Typography sx={{ mt: 1 }}>{data.deskripsi}</Typography>

      <Box display="flex" gap={2} mt={2}>
        {onEdit && (
          <Button variant="contained" onClick={onEdit}>
            Edit
          </Button>
        )}

        {onDelete && (
          <Button color="error" variant="contained" onClick={onDelete}>
            Hapus
          </Button>
        )}
      </Box>
    </Paper>
  );
}
