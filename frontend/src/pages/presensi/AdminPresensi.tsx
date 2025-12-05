import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Presensi, getPresensi, deletePresensi } from "./PresensiService";
import PresensiFilter from "./components/PresensiFilter";
import PresensiTable from "./components/PresensiTable";

export default function AdminPresensi() {
  const [kelas, setKelas] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [data, setData] = useState<Presensi[]>([]);

  const load = async () => {
    const res = await getPresensi({
      kelas,
      tanggal
    });
    setData(res);
  };

  useEffect(() => {
    load();
  }, [kelas, tanggal]);

  return (
    <Box>
      <PresensiFilter
        kelas={kelas}
        setKelas={setKelas}
        tanggal={tanggal}
        setTanggal={setTanggal}
      />

      <Paper sx={{ p: 3 }}>
        <PresensiTable
          data={data}
          onDelete={async (id) => {
            await deletePresensi(id);
            load();
          }}
        />
      </Paper>
    </Box>
  );
}
