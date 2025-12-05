import { Box, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Kegiatan, getKegiatan } from "./KegiatanService";
import KegiatanCard from "./components/KegiatanCard";

export default function SiswaKegiatan() {
  const [data, setData] = useState<Kegiatan[]>([]);

  useEffect(() => {
    getKegiatan().then((res) => setData(res));
  }, []);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Daftar Kegiatan Sekolah
      </Typography>

      {data.map((k) => (
        <KegiatanCard key={k.id} data={k} />
      ))}
    </Paper>
  );
}
