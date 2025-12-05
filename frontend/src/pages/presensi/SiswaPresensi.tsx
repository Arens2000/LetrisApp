import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Presensi, getPresensi } from "./PresensiService";
import { useAuth } from "../../context/AuthContext";

export default function SiswaPresensi() {
  const { user } = useAuth();
  const [data, setData] = useState<Presensi[]>([]);

  useEffect(() => {
    if (user)
      getPresensi({ uid: user.uid }).then((d) => setData(d));
  }, [user]);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Presensi Saya
      </Typography>

      {data.map((p) => (
        <Box
          key={p.id}
          sx={{
            p: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
            mb: 1
          }}
        >
          <Typography>{p.tanggal}</Typography>
          <Typography>Status: {p.status}</Typography>
        </Box>
      ))}
    </Paper>
  );
}
