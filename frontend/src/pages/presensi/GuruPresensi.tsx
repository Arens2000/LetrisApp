import {
  Box,
  Button,
  Paper,
  TextField,
  MenuItem,
  Typography
} from "@mui/material";
import { useState } from "react";
import { addPresensi } from "./PresensiService";

export default function GuruPresensi() {
  const [form, setForm] = useState({
    nama: "",
    uid: "",
    kelas: "",
    status: "Hadir",
    tanggal: ""
  });

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = async () => {
    await addPresensi(form);
    alert("Presensi berhasil disimpan!");
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Input Presensi Siswa
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Nama Siswa" name="nama" onChange={handleChange} />
        <TextField label="UID Siswa" name="uid" onChange={handleChange} />
        <TextField label="Kelas" name="kelas" onChange={handleChange} />

        <TextField
          select
          label="Status"
          name="status"
          onChange={handleChange}
        >
          {["Hadir", "Izin", "Sakit", "Alpha"].map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="date"
          label="Tanggal"
          name="tanggal"
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />

        <Button variant="contained" onClick={submit}>
          Simpan Presensi
        </Button>
      </Box>
    </Paper>
  );
}
