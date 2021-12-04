import { ChangeEvent, useState } from "react";

const Editor = () => {
  const [editorValue, setEditorValue] = useState("Enter Your Text Here");
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditorValue(event.target.value);
  };
  return (
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
  );
};

export default Editor;
