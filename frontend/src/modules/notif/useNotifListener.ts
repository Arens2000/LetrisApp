import { useEffect, useState } from "react";
import { notifListener } from "./NotifService";
import { Notif } from "./types";

export function useNotifListener(uid: string) {
  const [notif, setNotif] = useState<Notif[]>([]);

  useEffect(() => {
    if (!uid) return;

    const unsub = notifListener(uid, (data) => {
      setNotif(data);
    });

    return () => unsub();
  }, [uid]);

  return notif;
}
