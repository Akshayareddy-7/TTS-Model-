const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");

const app = express();

// Enable CORS for frontend communication
app.use(cors());
app.use(express.json()); // Ensure JSON parsing

// Serve static files from 'audio' folder
app.use("/audio", express.static(path.join(__dirname, "audio")));

// POST route for Text-to-Speech
app.post("/tts", (req, res) => {
    const text = req.body.text;

    if (!text || text.trim() === "") {
        return res.status(400).json({ error: "Text is required" });
    }

    console.log("Received text:", text);

    // Command to run Python script (adjust based on OS)
    const command = `python tts.py "${text}"`; // For Windows/Linux/Mac

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error("Error executing Python script:", error);
            return res.status(500).json({ error: "Failed to generate speech" });
        }

        console.log("Python script output:", stdout);

        // Audio file location (Ensure 'audio' folder exists)
        const audioUrl = `http://localhost:5000/audio/output.mp3`;

        res.json({ audioUrl });
    });
});

// Start server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
