import {
  Box,
  Button,
  Paper,
  TextField,
  MenuItem,
  Typography
} from "@mui/material";
import { useState } from "react";
import { addNilai } from "./NilaiService";

export default function GuruInputNilai() {
  const [form, setForm] = useState({
    nama: "",
    uid: "",
    kelas: "",
    mapel: "",
    semester: 1,
    nilai: 0
  });

  const handleChange = (e: any) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const submit = async () => {
    await addNilai({
      ...form,
      tanggal: new Date().toISOString()
    });
    alert("Berhasil ditambahkan!");
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Input Nilai
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Nama Siswa" name="nama" onChange={handleChange} />
        <TextField label="UID Siswa" name="uid" onChange={handleChange} />
        <TextField label="Kelas" name="kelas" onChange={handleChange} />

        <TextField select label="Mapel" name="mapel" onChange={handleChange}>
          {["Matematika", "IPA", "IPS", "Bahasa Indonesia", "Bahasa Inggris"].map(
            (m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            )
          )}
        </TextField>

        <TextField
          select
          label="Semester"
          name="semester"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
        </TextField>

        <TextField
          type="number"
          label="Nilai"
          name="nilai"
          onChange={handleChange}
        />

        <Button onClick={submit} variant="contained">
          Simpan Nilai
        </Button>
      </Box>
    </Paper>
  );
}
