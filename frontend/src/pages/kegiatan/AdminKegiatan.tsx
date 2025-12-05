import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Kegiatan,
  getKegiatan,
  createKegiatan,
  updateKegiatan,
  deleteKegiatan
} from "./KegiatanService";

import KegiatanCard from "./components/KegiatanCard";
import KegiatanForm from "./components/KegiatanForm";
import { useAuth } from "../../context/AuthContext";

export default function AdminKegiatan() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Kegiatan | null>(null);
  const [data, setData] = useState<Kegiatan[]>([]);

  const load = async () => {
    const res = await getKegiatan();
    setData(res);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Manajemen Kegiatan
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => {
          setSelected(null);
          setOpen(true);
        }}
      >
        Buat Kegiatan
      </Button>

      {data.map((k) => (
        <KegiatanCard
          key={k.id}
          data={k}
          onEdit={() => {
            setSelected(k);
            setOpen(true);
          }}
          onDelete={async () => {
            if (k.id) {
              await deleteKegiatan(k.id);
              load();
            }
          }}
        />
      ))}

      <KegiatanForm
        open={open}
        onClose={() => setOpen(false)}
        defaultValue={selected}
        onSubmit={async (d) => {
          if (selected && selected.id) {
            await updateKegiatan(selected.id, d);
          } else {
            await createKegiatan({ ...d, pembuat: user?.email || "" });
          }
          setOpen(false);
          load();
        }}
      />
    </Box>
  );
}
