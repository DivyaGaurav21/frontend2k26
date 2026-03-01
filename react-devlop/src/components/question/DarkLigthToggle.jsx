import { useEffect, useState } from "react";

export default function DarkLigthToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        toggle
      </button>
    </div>
  );
}
