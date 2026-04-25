import React, { useState, useEffect } from "react";

const DarkLightTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
    return () => document.body.classList.remove(theme);
  }, [theme]);

  return (
    <div>
      <button className="p-3 border" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi at sed
          consequuntur, exercitationem reiciendis dolor dolorem fugiat quam
          officia animi.
        </p>
      </div>
    </div>
  );
};

export default DarkLightTheme;
