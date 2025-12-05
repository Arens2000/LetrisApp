import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem
} from "@mui/material";
import { AppUser } from "./UserService";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: AppUser, password?: string) => void;
  defaultValue?: AppUser | null;
}

export default function UserForm({ open, onClose, onSubmit, defaultValue }: Props) {
  const [form, setForm] = useState<AppUser>({
    name: "",
    email: "",
    role: "siswa",
    kelas: ""
  });

  const [password, setPassword] = useState("");

  useEffect(() => {
    if (defaultValue) setForm(defaultValue);
  }, [defaultValue]);

  const handleChange = (e: any) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{defaultValue ? "Edit User" : "Tambah User"}</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          label="Nama"
          name="name"
          value={form.name}
          onChange={handleChange}
          sx={{ mt: 1 }}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />

        <TextField
          fullWidth
          select
          label="Role"
          name="role"
          value={form.role}
          onChange={handleChange}
          sx={{ mt: 2 }}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="guru">Guru</MenuItem>
          <MenuItem value="siswa">Siswa</MenuItem>
        </TextField>

        {form.role === "siswa" && (
          <TextField
            fullWidth
            label="Kelas"
            name="kelas"
            value={form.kelas}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
        )}

        {!defaultValue && (
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mt: 2 }}
          />
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Batal</Button>
        <Button
          variant="contained"
          onClick={() => onSubmit(form, password)}
        >
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
