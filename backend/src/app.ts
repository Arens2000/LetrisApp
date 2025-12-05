import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import nilaiRoutes from "./routes/nilai.routes";
import tugasRoutes from "./routes/tugas.routes";
import kegiatanRoutes from "./routes/kegiatan.routes";
import pengumumanRoutes from "./routes/pengumuman.routes";
import { errorHandler } from "./utils/errorHandler";

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/nilai", nilaiRoutes);
app.use("/api/tugas", tugasRoutes);
app.use("/api/kegiatan", kegiatanRoutes);
app.use("/api/pengumuman", pengumumanRoutes);

// Error handler (HARUS DI PALING BAWAH)
app.use(errorHandler);

export default app;
