import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNotifListener } from "./useNotifListener";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NotificationBell() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const notif = useNotifListener(user?.uid || "");

  const unread = notif.filter((n) => !n.read).length;

  return (
    <IconButton color="inherit" onClick={() => navigate("/notifikasi")}>
      <Badge badgeContent={unread} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
