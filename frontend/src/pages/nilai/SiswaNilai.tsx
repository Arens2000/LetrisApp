import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getNilai, Nilai } from "./NilaiService";
import { useAuth } from "../../context/AuthContext";

export default function SiswaNilai() {
  const { user } = useAuth();
  const [nilai, setNilai] = useState<Nilai[]>([]);

  useEffect(() => {
    if (user)
      getNilai({ uid: user.uid }).then((res) => setNilai(res));
  }, [user]);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Nilai Saya
      </Typography>

      {nilai.map((n) => (
        <Box
          key={n.id}
          sx={{
            p: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
            mb: 1
          }}
        >
          <Typography fontWeight={600}>{n.mapel}</Typography>
          <Typography>Semester: {n.semester}</Typography>
          <Typography>Nilai: {n.nilai}</Typography>
        </Box>
      ))}
    </Paper>
  );
}
