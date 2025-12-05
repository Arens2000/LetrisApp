import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getSubmissionByTugas,
  updateSubmission,
  Submission
} from "./TugasService";
import SubmissionTable from "./components/SubmissionTable";

export default function GuruLihatSubmission({ tugasId }: { tugasId: string }) {
  const [data, setData] = useState<Submission[]>([]);

  const load = async () => {
    const d = await getSubmissionByTugas(tugasId);
    setData(d);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Submission Siswa
      </Typography>

      <SubmissionTable
        data={data}
        onSave={async (id, nilai) => {
          await updateSubmission(id, { nilai, status: "done" });
          load();
        }}
      />
    </Paper>
  );
}
