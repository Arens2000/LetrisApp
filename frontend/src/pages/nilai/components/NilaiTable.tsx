import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Box,
  Typography
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Nilai } from "../NilaiService";

interface Props {
  data: Nilai[];
  onEdit?: (item: Nilai) => void;
  onDelete?: (id: string) => void;
}

export default function NilaiTable({ data, onEdit, onDelete }: Props) {
  return (
    <Box>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Data Nilai
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nama</TableCell>
            <TableCell>Kelas</TableCell>
            <TableCell>Mapel</TableCell>
            <TableCell>Semester</TableCell>
            <TableCell>Nilai</TableCell>
            <TableCell align="right">Aksi</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.nama}</TableCell>
              <TableCell>{item.kelas}</TableCell>
              <TableCell>{item.mapel}</TableCell>
              <TableCell>{item.semester}</TableCell>
              <TableCell>{item.nilai}</TableCell>

              <TableCell align="right">
                <IconButton onClick={() => onEdit?.(item)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => item.id && onDelete?.(item.id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
