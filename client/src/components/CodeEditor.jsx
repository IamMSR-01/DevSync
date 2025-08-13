import React from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  // This function will be called every time the editor's content changes.
  function handleEditorChange(value, event) {
    // 'value' is the current code in the editor.
    // For now, let's just log it to the console to see it working.
    console.log("Here is the current code:", value);
  }

  return (
    <div>
      <Editor
        height="80vh" // Set the editor's height.
        theme="vs-dark" // This is the dark theme that matches VS Code.
        defaultLanguage="javascript" // Set the default language for syntax highlighting.
        defaultValue="// Start coding here... your journey to god-tier begins!" // Initial code.
        onChange={handleEditorChange} // Attach our function to the onChange event.
      />
    </div>
  );
}

export default CodeEditor;
