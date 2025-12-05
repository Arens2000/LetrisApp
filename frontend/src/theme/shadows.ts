import { Shadows } from "@mui/material/styles";

const shadows: Shadows = [
  "none",
  "0px 1px 2px rgba(0,0,0,0.05)",
  "0px 2px 4px rgba(0,0,0,0.06)",
  "0px 3px 6px rgba(0,0,0,0.08)",
  "0px 4px 10px rgba(0,0,0,0.1)",
  "0px 6px 12px rgba(0,0,0,0.12)",
  "0px 8px 16px rgba(0,0,0,0.14)",
  ...Array(18).fill("none")
];

export default shadows;
