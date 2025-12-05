import {
  Box,
  Button,
  Paper,
  TextField,
  MenuItem,
  Typography
} from "@mui/material";
import { useState } from "react";
import { uploadAttachment, createTugas } from "./TugasService";
import { useAuth } from "../../context/AuthContext";

export default function GuruBuatTugas() {
  const { user } = useAuth();

  const [form, setForm] = useState({
    judul: "",
    deskripsi: "",
    mapel: "",
    kelas: "",
    deadline: "",
    file: null as File | null
  });

  const handleChange = (e: any) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: any) => {
    setForm((p) => ({ ...p, file: e.target.files[0] }));
  };

  const submit = async () => {
    let fileUrl = "";

    if (form.file) {
      fileUrl = await uploadAttachment(
        form.file,
        `tugas/${Date.now()}_${form.file.name}`
      );
    }

    await createTugas({
      judul: form.judul,
      deskripsi: form.deskripsi,
      kelas: form.kelas,
      mapel: form.mapel,
      deadline: form.deadline,
      lampiran: fileUrl,
      guru: user?.email || ""
    });

    alert("Tugas berhasil dibuat!");
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Buat Tugas Baru
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Judul" name="judul" onChange={handleChange} />
        <TextField label="Deskripsi" name="deskripsi" onChange={handleChange} />

        <TextField select label="Mapel" name="mapel" onChange={handleChange}>
          {["Matematika", "IPA", "IPS", "Bahasa Indonesia", "Bahasa Inggris"].map(
            (m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            )
          )}
        </TextField>

        <TextField label="Kelas" name="kelas" onChange={handleChange} />

        <TextField
          type="date"
          InputLabelProps={{ shrink: true }}
          label="Deadline"
          name="deadline"
          onChange={handleChange}
        />

        <Button variant="contained" component="label">
          Upload Lampiran
          <input type="file" hidden onChange={handleFile} />
        </Button>

        <Button variant="contained" onClick={submit}>
          Simpan Tugas
        </Button>
      </Box>
    </Paper>
  );
}
