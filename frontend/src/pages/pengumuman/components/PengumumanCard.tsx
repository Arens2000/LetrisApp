import {
  Paper,
  Typography,
  Box,
  Chip,
  Button
} from "@mui/material";
import { Pengumuman } from "../PengumumanService";

interface Props {
  data: Pengumuman;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function PengumumanCard({ data, onEdit, onDelete }: Props) {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" fontWeight={700}>
        {data.judul}
      </Typography>

      <Chip
        label={data.kategori.toUpperCase()}
        color={data.kategori === "penting" ? "error" : "primary"}
        sx={{ mt: 1, mb: 1 }}
      />

      <Typography sx={{ mb: 1 }}>{data.isi}</Typography>

      {data.lampiran && (
        <Button href={data.lampiran} target="_blank">
          Lihat Lampiran
        </Button>
      )}

      <Typography variant="caption" color="text.secondary">
        Ditulis oleh {data.pengirim} • {data.tanggal}
      </Typography>

      {onEdit || onDelete ? (
        <Box display="flex" gap={2} mt={2}>
          {onEdit && <Button onClick={onEdit}>Edit</Button>}
          {onDelete && <Button color="error" onClick={onDelete}>Hapus</Button>}
        </Box>
      ) : null}
    </Paper>
  );
}
