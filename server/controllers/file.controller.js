import fs from "fs";

export const saveFileContent = async (req, res) => {
    const { filePath, content } = req.body;
    console.log("Saving file at path:", filePath, "content:", content);

    if(!filePath) {
        return res.status(400).json({ message: "File path is required" });
    }

    const fullPath = path.join(process.cwd(), "user_files", filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    try {
        fs.writeFileSync(filePath, content ?? "", 'utf8');
        return res.status(200).json({ message: "File saved successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error saving file", error: error.message });
    }
}

export const saveAsFileContent = async (req, res) => {
    const { filePath, content } = req.body;

    if(!filePath) {
        return res.status(400).json({ message: "File path is required" });
    }

    try {
        fs.writeFileSync(filePath, content ?? "", 'utf8');
        return res.status(200).json({ message: "File saved successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error saving file", error: error.message });
    }
}