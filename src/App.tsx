import "papercss/dist/paper.css";
import Editor from "./components/Editor";
function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        margin: "0",
        padding: "2rem 0 0 1.5rem",
        color: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Editor />
    </div>
  );
}

export default App;
