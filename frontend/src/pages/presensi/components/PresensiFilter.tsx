import { Box, TextField, MenuItem } from "@mui/material";

interface Props {
  kelas: string;
  setKelas: (v: string) => void;
  tanggal: string;
  setTanggal: (v: string) => void;
}

export default function PresensiFilter({
  kelas,
  setKelas,
  tanggal,
  setTanggal
}: Props) {
  return (
    <Box display="flex" gap={2} mb={2}>
      <TextField
        select
        label="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
        sx={{ minWidth: 150 }}
      >
        {["X", "XI", "XII"].map((k) => (
          <MenuItem key={k} value={k}>
            {k}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="date"
        label="Tanggal"
        InputLabelProps={{ shrink: true }}
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
      />
    </Box>
  );
}
