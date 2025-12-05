import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { getTugas, Tugas } from "./TugasService";
import { useAuth } from "../../context/AuthContext";
import TugasCard from "./components/TugasCard";

export default function SiswaTugas() {
  const { profile } = useAuth(); // profile.kelas
  const [tugas, setTugas] = useState<Tugas[]>([]);

  useEffect(() => {
    if (profile?.kelas) {
      getTugas({ kelas: profile.kelas }).then((res) => setTugas(res));
    }
  }, [profile]);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Tugas Kelas Saya
      </Typography>

      {tugas.map((t) => (
        <TugasCard key={t.id} tugas={t} onOpen={() => {}} />
      ))}
    </Paper>
  );
}
