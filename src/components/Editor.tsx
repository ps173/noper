import { ChangeEvent, useEffect, useState, KeyboardEvent } from "react";
import { set, get } from "idb-keyval";

const Editor = () => {
  const [editorValue, setEditorValue] = useState("You can save with ctrl-s");

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

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      saveState();
    }
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
        onKeyDown={handleKeyDown}
        autoFocus={true}
        spellCheck={false}
      />
    </>
  );
};

export default Editor;
