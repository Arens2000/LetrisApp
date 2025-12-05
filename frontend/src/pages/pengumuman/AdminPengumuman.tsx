import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Pengumuman,
  getPengumuman,
  createPengumuman,
  updatePengumuman,
  deletePengumuman
} from "./PengumumanService";

import PengumumanCard from "./components/PengumumanCard";
import PengumumanForm from "./components/PengumumanForm";
import { useAuth } from "../../context/AuthContext";

export default function AdminPengumuman() {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Pengumuman | null>(null);
  const [data, setData] = useState<Pengumuman[]>([]);

  const load = async () => {
    const res = await getPengumuman();
    setData(res.sort((a, b) => (a.tanggal < b.tanggal ? 1 : -1)));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Manajemen Pengumuman
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => {
          setSelected(null);
          setOpen(true);
        }}
      >
        Buat Pengumuman
      </Button>

      {data.map((p) => (
        <PengumumanCard
          key={p.id}
          data={p}
          onEdit={() => {
            setSelected(p);
            setOpen(true);
          }}
          onDelete={async () => {
            if (p.id) await deletePengumuman(p.id);
            load();
          }}
        />
      ))}

      <PengumumanForm
        open={open}
        onClose={() => setOpen(false)}
        defaultValue={selected}
        onSubmit={async (d) => {
          if (selected && selected.id) {
            await updatePengumuman(selected.id, d);
          } else {
            await createPengumuman({
              ...d,
              pengirim: user?.email || "",
              tanggal: new Date().toISOString()
            });
          }
          setOpen(false);
          load();
        }}
      />
    </Box>
  );
}
