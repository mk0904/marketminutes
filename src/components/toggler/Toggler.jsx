import React from "react";

function Toggler({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <div id="toggle" onClick={toggleDarkMode}>
        <div className={`toggle-inner ${darkMode ? "toggle-active" : ""}`} />
      </div>
    </header>
  );
}

export default Toggler;
