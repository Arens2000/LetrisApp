import { Box, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Pengumuman, getPengumuman } from "./PengumumanService";
import PengumumanCard from "./components/PengumumanCard";
import { useAuth } from "../../context/AuthContext";

export default function SiswaPengumuman() {
  const { profile } = useAuth();
  const [data, setData] = useState<Pengumuman[]>([]);

  useEffect(() => {
    if (profile?.kelas) {
      getPengumuman(profile.kelas).then((res) =>
        setData(
          res.sort((a, b) => (a.tanggal < b.tanggal ? 1 : -1))
        )
      );
    }
  }, [profile]);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Pengumuman Terbaru
      </Typography>

      {data.map((p) => (
        <PengumumanCard key={p.id} data={p} />
      ))}
    </Paper>
  );
}
