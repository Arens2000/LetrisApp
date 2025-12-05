import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

<Route path="/notifikasi" element={<NotificationList />} />
<Route path="/" element={<LandingPage />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-success" element={<PasswordResetSuccess />} />
