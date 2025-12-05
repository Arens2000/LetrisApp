import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";

import { useEffect, useState } from "react";
import {
  AppUser,
  getAllUsers,
  createUser,
  resetUserPassword,
  deleteUserAll,
  updateUserFirestore
} from "./UserService";

import UserForm from "./UserForm";

export default function UserList() {
  const [users, setUsers] = useState<AppUser[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<AppUser | null>(null);
  const [openForm, setOpenForm] = useState(false);

  const loadData = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Manajemen User
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            placeholder="Cari nama atau email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button
            startIcon={<AddIcon />}
            variant="contained"
            onClick={() => {
              setSelected(null);
              setOpenForm(true);
            }}
          >
            Tambah User
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Kelas</TableCell>
              <TableCell align="right">Aksi</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role.toUpperCase()}</TableCell>
                <TableCell>{user.kelas || "-"}</TableCell>

                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      setSelected(user);
                      setOpenForm(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    onClick={() => resetUserPassword(user.email)}
                  >
                    <RestartAltIcon />
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      if (user.id && user.uid)
                        deleteUserAll(user.uid, user.id);
                    }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* FORM MODAL */}
      <UserForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        defaultValue={selected}
        onSubmit={async (data, password) => {
          if (selected && selected.id) {
            await updateUserFirestore(selected.id, data);
          } else {
            await createUser(data, password || "password123");
          }

          setOpenForm(false);
          loadData();
        }}
      />
    </Box>
  );
}
