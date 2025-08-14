import React from "react";
import Editor from "@monaco-editor/react";
import { RxCrossCircled } from "react-icons/rx";

function CodeEditor({ fileName, content, onChange, onClose }) {
  const getLanguageFromFileName = (name) => {
    if (!name) return "plaintext";
    const ext = name.split(".").pop().toLowerCase();
    switch (ext) {
      case "js":
        return "javascript";
      case "ts":
        return "typescript";
      case "jsx":
        return "javascript";
      case "tsx":
        return "typescript";
      case "json":
        return "json";
      case "html":
        return "html";
      case "css":
        return "css";
      case "java":
        return "java";
      case "py":
        return "python";
      case "c":
        return "c";
      case "cpp":
        return "cpp";
      case "cs":
        return "csharp";
      case "php":
        return "php";
      case "rb":
        return "ruby";
      case "go":
        return "go";
      case "rs":
        return "rust";
      case "sh":
        return "shell";
      default:
        return "plaintext";
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* File name header */}
      <div className="bg-gray-800 text-gray-200 px-4 py-2 border-b border-gray-700 text-sm font-medium">
        <span className="bg-gray-700 px-2 py-1 rounded flex items-center gap-2 w-fit">
          {fileName || "Untitled"}{" "}
          <button
            onClick={onClose}
            className="hover:text-red-400 transition-colors"
          >
            <RxCrossCircled size={18} />
          </button>
        </span>
      </div>
      <Editor
        className="h-[calc(100vh-90px)]"
        theme="vs-dark"
        language={getLanguageFromFileName(fileName)}
        value={content}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}

export default CodeEditor;
