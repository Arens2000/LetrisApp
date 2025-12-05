import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  IconButton
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { Submission } from "../TugasService";
import { useState } from "react";

interface Props {
  data: Submission[];
  onSave: (id: string, nilai: number) => void;
}

export default function SubmissionTable({ data, onSave }: Props) {
  const [nilai, setNilai] = useState<{ [key: string]: number }>({});

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nama</TableCell>
          <TableCell>Kelas</TableCell>
          <TableCell>File</TableCell>
          <TableCell>Nilai</TableCell>
          <TableCell>Aksi</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((s) => (
          <TableRow key={s.id}>
            <TableCell>{s.nama}</TableCell>
            <TableCell>{s.kelas}</TableCell>
            <TableCell>
              <a href={s.fileUrl} target="_blank">
                Lihat File
              </a>
            </TableCell>

            <TableCell>
              <TextField
                type="number"
                size="small"
                sx={{ width: 80 }}
                value={nilai[s.id || ""] || ""}
                onChange={(e) =>
                  setNilai({ ...nilai, [s.id || ""]: Number(e.target.value) })
                }
              />
            </TableCell>

            <TableCell>
              <IconButton
                onClick={() => s.id && onSave(s.id, nilai[s.id] || 0)}
              >
                <SaveIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
