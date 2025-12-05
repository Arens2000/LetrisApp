import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Pengumuman,
  getPengumuman,
  createPengumuman
} from "./PengumumanService";

import PengumumanCard from "./components/PengumumanCard";
import PengumumanForm from "./components/PengumumanForm";
import { useAuth } from "../../context/AuthContext";

export default function GuruPengumuman() {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Pengumuman[]>([]);

  const load = async () => {
    const res = await getPengumuman();
    setData(res);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Pengumuman Sekolah
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        Buat Pengumuman
      </Button>

      {data.map((p) => (
        <PengumumanCard key={p.id} data={p} />
      ))}

      <PengumumanForm
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={async (d) => {
          await createPengumuman({
            ...d,
            pengirim: user?.email || "",
            tanggal: new Date().toISOString()
          });
          setOpen(false);
          load();
        }}
      />
    </Box>
  );
}
