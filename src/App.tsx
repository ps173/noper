import "papercss/dist/paper.css";
import Editor from "./components/Editor";
import QuestionMark from "./svgs/QuestionMark";
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

      <a
        style={{
          cursor: "pointer",
        }}
        target="_blank"
        href="https://github.com/ps173/noper"
      >
        <QuestionMark
          style={{
            position: "absolute",
            top: "2%",
            right: "2%",
            width: "2rem",
            height: "2rem",
          }}
        />
      </a>
    </div>
  );
}

export default App;
