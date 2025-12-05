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
import { Pengumuman, uploadLampiran } from "../PengumumanService";

interface Props {
  open: boolean;
  onClose: () => void;
  defaultValue?: Pengumuman | null;
  onSubmit: (data: Pengumuman) => void;
}

export default function PengumumanForm({
  open,
  onClose,
  defaultValue,
  onSubmit
}: Props) {
  const [form, setForm] = useState<Pengumuman>({
    judul: "",
    isi: "",
    kategori: "umum",
    target: "semua",
    lampiran: "",
    tanggal: "",
    pengirim: ""
  });

  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (defaultValue) setForm(defaultValue);
  }, [defaultValue]);

  const submit = async () => {
    let lampiranUrl = form.lampiran;

    if (file) lampiranUrl = await uploadLampiran(file);

    onSubmit({ ...form, lampiran: lampiranUrl });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Buat / Edit Pengumuman</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Judul"
          sx={{ mt: 2 }}
          value={form.judul}
          onChange={(e) => setForm({ ...form, judul: e.target.value })}
        />

        <TextField
          fullWidth
          label="Isi Pengumuman"
          multiline
          minRows={3}
          sx={{ mt: 2 }}
          value={form.isi}
          onChange={(e) => setForm({ ...form, isi: e.target.value })}
        />

        <TextField
          select
          label="Kategori"
          fullWidth
          sx={{ mt: 2 }}
          value={form.kategori}
          onChange={(e) => setForm({ ...form, kategori: e.target.value as any })}
        >
          <MenuItem value="umum">Umum</MenuItem>
          <MenuItem value="penting">Penting</MenuItem>
        </TextField>

        <TextField
          select
          label="Target"
          fullWidth
          sx={{ mt: 2 }}
          value={form.target}
          onChange={(e) => setForm({ ...form, target: e.target.value })}
        >
          <MenuItem value="semua">Semua</MenuItem>
          <MenuItem value="X">Kelas X</MenuItem>
          <MenuItem value="XI">Kelas XI</MenuItem>
          <MenuItem value="XII">Kelas XII</MenuItem>
        </TextField>

        <Button component="label" sx={{ mt: 2 }}>
          Upload Lampiran
          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </Button>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Tutup</Button>
        <Button variant="contained" onClick={submit}>
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
