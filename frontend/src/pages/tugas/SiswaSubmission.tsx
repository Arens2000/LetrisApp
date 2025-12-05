import {
  Box,
  Button,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import {
  uploadAttachment,
  submitTugas,
  Submission
} from "./TugasService";
import { useAuth } from "../../context/AuthContext";

export default function SiswaSubmission({ tugas }: { tugas: any }) {
  const { user, profile } = useAuth();

  const [file, setFile] = useState<File | null>(null);

  const kirim = async () => {
    if (!file) return alert("Pilih file dulu!");

    const fileUrl = await uploadAttachment(
      file,
      `submission/${user?.uid}_${Date.now()}_${file.name}`
    );

    const data: Submission = {
      tugasId: tugas.id,
      uid: user?.uid || "",
      nama: profile?.name || "",
      kelas: profile?.kelas || "",
      fileUrl,
      status: "submitted",
      tanggalSubmit: new Date().toISOString()
    };

    await submitTugas(data);
    alert("Tugas berhasil dikirim!");
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">Kirim Tugas</Typography>

      <Box mt={2}>
        <Button variant="contained" component="label">
          Pilih File
          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </Button>
      </Box>

      <Button sx={{ mt: 2 }} variant="contained" onClick={kirim}>
        Kirim
      </Button>
    </Paper>
  );
}
