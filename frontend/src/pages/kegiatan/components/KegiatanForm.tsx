import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button
} from "@mui/material";
import { useState, useEffect } from "react";
import { Kegiatan, uploadPoster } from "../KegiatanService";

interface Props {
  open: boolean;
  onClose: () => void;
  defaultValue?: Kegiatan | null;
  onSubmit: (data: Kegiatan) => void;
}

export default function KegiatanForm({
  open,
  onClose,
  defaultValue,
  onSubmit
}: Props) {
  const [form, setForm] = useState<Kegiatan>({
    judul: "",
    deskripsi: "",
    tanggal: "",
    kelas: "semua",
    poster: "",
    pembuat: "",
    status: "aktif"
  });

  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (defaultValue) setForm(defaultValue);
  }, [defaultValue]);

  const submit = async () => {
    let posterUrl = form.poster;

    if (file) posterUrl = await uploadPoster(file);

    onSubmit({ ...form, poster: posterUrl });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Buat / Edit Kegiatan</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Judul Kegiatan"
          sx={{ mt: 2 }}
          value={form.judul}
          onChange={(e) => setForm({ ...form, judul: e.target.value })}
        />

        <TextField
          fullWidth
          label="Deskripsi"
          sx={{ mt: 2 }}
          value={form.deskripsi}
          onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
        />

        <TextField
          fullWidth
          type="date"
          label="Tanggal"
          InputLabelProps={{ shrink: true }}
          sx={{ mt: 2 }}
          value={form.tanggal}
          onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
        />

        <TextField
          select
          label="Kelas"
          fullWidth
          sx={{ mt: 2 }}
          value={form.kelas}
          onChange={(e) => setForm({ ...form, kelas: e.target.value })}
        >
          <MenuItem value="semua">Semua</MenuItem>
          <MenuItem value="X">X</MenuItem>
          <MenuItem value="XI">XI</MenuItem>
          <MenuItem value="XII">XII</MenuItem>
        </TextField>

        <Button component="label" sx={{ mt: 2 }}>
          Upload Poster
          <input type="file" hidden onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </Button>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Batal</Button>
        <Button variant="contained" onClick={submit}>
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
