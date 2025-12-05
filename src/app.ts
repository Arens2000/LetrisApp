import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import nilaiRoutes from "./routes/nilai.routes";
import tugasRoutes from "./routes/tugas.routes";
import kegiatanRoutes from "./routes/kegiatan.routes";
import pengumumanRoutes from "./routes/pengumuman.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/nilai", nilaiRoutes);
app.use("/api/tugas", tugasRoutes);
app.use("/api/kegiatan", kegiatanRoutes);
app.use("/api/pengumuman", pengumumanRoutes);

export default app;
