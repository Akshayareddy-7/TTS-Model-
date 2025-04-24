import React, { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [audioUrl, setAudioUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleConvert = async () => {
        if (!text.trim()) {
            alert("Please enter text before converting.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/tts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            const data = await response.json();
            if (data.audioUrl) {
                setAudioUrl(data.audioUrl);
            } else {
                alert("Error generating speech");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to connect to server.");
        }

        setLoading(false);
    };

    return (
        <div className="container">
            <h1>🗣️ Text-to-Speech Converter</h1>
            <textarea
                className="text-input"
                rows="4"
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="convert-button" onClick={handleConvert} disabled={loading}>
                {loading ? "Converting..." : "Convert to Speech"}
            </button>

            {audioUrl && (
                <div className="audio-container">
                    <p>🔊 Your generated speech:</p>
                    <audio controls>
                        <source src={audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
}

export default App;
