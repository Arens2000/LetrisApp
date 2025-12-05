import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { sidebarMenu } from "./SidebarConfig";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const drawerWidth = 250;

export default function Sidebar({ mobileOpen, handleDrawerToggle }: Props) {
  const { role } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menu = sidebarMenu[role || "siswa"];

  const drawerContent = (
    <Box>
      <Toolbar>
        <Typography variant="h6" fontWeight={700}>
          LetrisApp
        </Typography>
      </Toolbar>

      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.path}
            selected={location.pathname.startsWith(item.path)}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* MOBILE SIDEBAR */}
      <Drawer
        variant="temporary"
        modalProps={{ keepMounted: true }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
