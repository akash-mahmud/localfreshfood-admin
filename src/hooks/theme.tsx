import { useState, useEffect } from "react";

export default function useDarkSide(): Array<string | React.Dispatch<any>> {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (theme) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
