import {
  Box,
  Paper,
  Typography,
  List,
  ListItemButton,
  Divider
} from "@mui/material";
import { useNotifListener } from "./useNotifListener";
import { readNotif } from "./NotifService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NotificationList() {
  const { user } = useAuth();
  const notif = useNotifListener(user?.uid || "");
  const navigate = useNavigate();

  const openNotif = async (item: any) => {
    if (item.id) await readNotif(item.id);
    if (item.link) navigate(item.link);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Notifikasi
      </Typography>

      <List>
        {notif.map((n, i) => (
          <Box key={i}>
            <ListItemButton
              onClick={() => openNotif(n)}
              sx={{
                background: n.read ? "" : "rgba(25,118,210,0.1)"
              }}
            >
              <Box>
                <Typography fontWeight={700}>{n.judul}</Typography>
                <Typography>{n.pesan}</Typography>
                <Typography fontSize={12} color="text.secondary">
                  {new Date(n.createdAt).toLocaleString()}
                </Typography>
              </Box>
            </ListItemButton>
            <Divider />
          </Box>
        ))}
      </List>
    </Paper>
  );
}
