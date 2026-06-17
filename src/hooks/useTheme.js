import { useEffect, useState } from "react";
import { THEME_MODES } from "../constants/index.js";

export function useTheme() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("sealtech-theme-mode") || "system"
  );

  useEffect(() => {
    const resolved =
      mode === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : mode;
    document.documentElement.setAttribute("data-theme", resolved);
    document.documentElement.setAttribute("data-theme-mode", mode);
    if (mode === "system") localStorage.removeItem("sealtech-theme-mode");
    else localStorage.setItem("sealtech-theme-mode", mode);
  }, [mode]);

  return [
    mode,
    () =>
      setMode(
        (current) =>
          THEME_MODES[(THEME_MODES.indexOf(current) + 1) % THEME_MODES.length]
      ),
  ];
}
