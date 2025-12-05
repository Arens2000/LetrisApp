import { Navigate } from "react-router-dom";
import { useAuth, UserRole } from "../context/AuthContext";

export default function RoleGuard({
  allowed,
  children
}: {
  allowed: UserRole[];
  children: JSX.Element;
}) {
  const { role } = useAuth();

  if (!allowed.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
