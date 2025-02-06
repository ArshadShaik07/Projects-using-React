import useLocalStorage from "./useLocalStorage.jsx";
import "./styles.css";

function LightDark() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div
      style={
        theme === "dark"
          ? { backgroundColor: "black" }
          : { backgroundColor: "white" }
      }
      className="container"
    >
      <p
        className="container-text"
        style={theme === "dark" ? { color: "white" } : { color: "black" }}
        onClick={() => {
          console.log(theme);
        }}
      >
        Hello World
      </p>
      <button
        className="toggle-btn"
        style={
          theme === "dark"
            ? {
                color: "white",
                backgroundColor: "black",
                border: "2px solid white",
              }
            : {
                color: "black",
                backgroundColor: "white",
                border: "2px solid black",
              }
        }
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          console.log(theme);
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default LightDark;
