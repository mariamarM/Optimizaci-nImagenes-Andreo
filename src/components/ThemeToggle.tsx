import { useState, useEffect } from "react";
const ThemeToggle = () => {
 const [darkMode, setDarkMode] = useState(() =>
localStorage.getItem("theme") === "dark");
 useEffect(() => {
 if (darkMode) {
 document.documentElement.classList.add("dark");
 localStorage.setItem("theme", "dark");
 } else {
 document.documentElement.classList.remove("dark");
 localStorage.setItem("theme", "light");
 }
 }, [darkMode]);
 return (
 <button
 className="p-2 bg-gray-300 dark:bg-gray-800 dark:text-white
rounded"
 onClick={() => setDarkMode(!darkMode)}
 >
 {darkMode ? "☀ Modo Claro" : "🌙🌙 Modo Oscuro"}
 </button>
 );
};
export default ThemeToggle;