import { Box, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Nilai,
  getNilai,
  deleteNilai,
  updateNilai
} from "./NilaiService";

import NilaiFilter from "./components/NilaiFilter";
import NilaiTable from "./components/NilaiTable";

export default function AdminNilaiList() {
  const [kelas, setKelas] = useState("");
  const [semester, setSemester] = useState("");
  const [mapel, setMapel] = useState("");
  const [data, setData] = useState<Nilai[]>([]);

  const load = async () => {
    const n = await getNilai({ kelas, semester: Number(semester), mapel });
    setData(n);
  };

  useEffect(() => {
    load();
  }, [kelas, semester, mapel]);

  return (
    <Box>
      <NilaiFilter
        kelas={kelas}
        setKelas={setKelas}
        semester={semester}
        setSemester={setSemester}
        mapel={mapel}
        setMapel={setMapel}
      />

      <Paper sx={{ p: 3 }}>
        <NilaiTable
          data={data}
          onDelete={async (id) => {
            await deleteNilai(id);
            load();
          }}
        />
      </Paper>
    </Box>
  );
}
