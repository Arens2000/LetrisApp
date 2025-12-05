import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Presensi } from "../PresensiService";

interface Props {
  data: Presensi[];
  onEdit?: (item: Presensi) => void;
  onDelete?: (id: string) => void;
}

export default function PresensiTable({ data, onEdit, onDelete }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nama</TableCell>
          <TableCell>Kelas</TableCell>
          <TableCell>Tanggal</TableCell>
          <TableCell>Status</TableCell>
          <TableCell align="right">Aksi</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.nama}</TableCell>
            <TableCell>{row.kelas}</TableCell>
            <TableCell>{row.tanggal}</TableCell>
            <TableCell>{row.status}</TableCell>

            <TableCell align="right">
              <IconButton onClick={() => onEdit?.(row)}>
                <EditIcon />
              </IconButton>

              <IconButton onClick={() => row.id && onDelete?.(row.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
