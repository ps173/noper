import { ChangeEvent, useEffect, useState } from "react";
import { set, get } from "idb-keyval";

const Editor = () => {
  const [editorValue, setEditorValue] = useState("Enter Your Text Here");

  useEffect(() => {
    const fetchState = async () => {
      const editorState = await get("state");
      if (editorState !== undefined) {
        setEditorValue(JSON.parse(editorState));
      }
    };
    fetchState();
  }, []);

  const saveState = async () => {
    await set("state", JSON.stringify(editorValue));
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditorValue(event.target.value);
  };

  return (
    <>
      <textarea
        style={{
          color: "white",
          borderColor: "transparent",
          width: "100%",
          height: "100%",
          resize: "none",
        }}
        value={editorValue}
        onChange={handleChange}
      />
      <button
        className="btn-small"
        style={{
          background: "black",
          color: "white",
          position: "absolute",
          top: "2%",
          right: "2%",
          transition: "0.3s",
        }}
        onClick={saveState}
      >
        Save
      </button>
    </>
  );
};

export default Editor;
