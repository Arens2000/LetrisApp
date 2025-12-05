import { Box, TextField, MenuItem } from "@mui/material";

interface Props {
  kelas: string;
  setKelas: (v: string) => void;
  semester: string;
  setSemester: (v: string) => void;
  mapel: string;
  setMapel: (v: string) => void;
}

export default function NilaiFilter({
  kelas,
  setKelas,
  semester,
  setSemester,
  mapel,
  setMapel
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
        {[10, 11, 12].map((k) => (
          <MenuItem key={k} value={`X-${k}`}>
            {`Kelas ${k}`}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Semester"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
        sx={{ minWidth: 150 }}
      >
        {[1, 2].map((s) => (
          <MenuItem key={s} value={s}>
            Semester {s}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Mapel"
        value={mapel}
        onChange={(e) => setMapel(e.target.value)}
        sx={{ minWidth: 200 }}
      >
        {[
          "Matematika",
          "IPA",
          "IPS",
          "Bahasa Indonesia",
          "Bahasa Inggris",
          "PPKN"
        ].map((m) => (
          <MenuItem key={m} value={m}>
            {m}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
