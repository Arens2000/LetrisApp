export interface Notif {
  id?: string;
  uidTarget: string; // specific UID or "all"
  judul: string;
  pesan: string;
  tipe: "tugas" | "nilai" | "pengumuman" | "kegiatan";
  link?: string;
  createdAt: string;
  read: boolean;
}
