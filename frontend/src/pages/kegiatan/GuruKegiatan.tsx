import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Kegiatan, getKegiatan, createKegiatan } from "./KegiatanService";
import KegiatanCard from "./components/KegiatanCard";
import KegiatanForm from "./components/KegiatanForm";
import { useAuth } from "../../context/AuthContext";

export default function GuruKegiatan() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
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
      <Typography variant="h6" mb={2}>
        Kegiatan Sekolah
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        Tambah Kegiatan
      </Button>

      {data.map((k) => (
        <KegiatanCard key={k.id} data={k} />
      ))}

      <KegiatanForm
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={async (d) => {
          await createKegiatan({ ...d, pembuat: user?.email || "" });
          setOpen(false);
          load();
        }}
      />
    </Box>
  );
}
