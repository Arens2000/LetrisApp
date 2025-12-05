import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CampaignIcon from "@mui/icons-material/Campaign";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EventNoteIcon from "@mui/icons-material/EventNote";

export interface NavItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const sidebarMenu = {
  admin: <NavItem[]>[
    { title: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { title: "Manajemen User", path: "/admin/users", icon: <PeopleIcon /> },
    { title: "Nilai", path: "/admin/nilai", icon: <AssessmentIcon /> },
    { title: "Presensi", path: "/admin/presensi", icon: <CheckCircleIcon /> },
    { title: "Tugas", path: "/admin/tugas", icon: <TaskIcon /> },
    { title: "Kegiatan", path: "/admin/kegiatan", icon: <EventNoteIcon /> },
    { title: "Pengumuman", path: "/admin/pengumuman", icon: <CampaignIcon /> },
    { title: "Ranking", path: "/admin/ranking", icon: <EmojiEventsIcon /> }
  ],

  guru: <NavItem[]>[
    { title: "Dashboard", path: "/guru", icon: <DashboardIcon /> },
    { title: "Input Nilai", path: "/guru/nilai", icon: <AssignmentIcon /> },
    { title: "Presensi Siswa", path: "/guru/presensi", icon: <CheckCircleIcon /> },
    { title: "Tugas", path: "/guru/tugas", icon: <TaskIcon /> },
    { title: "Kegiatan", path: "/guru/kegiatan", icon: <EventNoteIcon /> }
  ],

  siswa: <NavItem[]>[
    { title: "Dashboard", path: "/siswa", icon: <DashboardIcon /> },
    { title: "Nilai Saya", path: "/siswa/nilai", icon: <SchoolIcon /> },
    { title: "Presensi", path: "/siswa/presensi", icon: <CheckCircleIcon /> },
    { title: "Tugas", path: "/siswa/tugas", icon: <AssignmentIcon /> },
    { title: "Kegiatan", path: "/siswa/kegiatan", icon: <EventNoteIcon /> }
  ]
};
