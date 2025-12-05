import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";
import components from "./components";

export default function AppThemeProvider({ children }: { children: ReactNode }) {
  const theme = createTheme({
    palette,
    typography,
    shadows,
    shape: { borderRadius: 12 },
    components
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
