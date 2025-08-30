import React, { useState } from "react";
import ParticleBackground from './components/ParticleBackground';

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
        <div className="app-container">
            <ParticleBackground />
            <div className="content-wrapper">
                <div className="header">
                    <h1 className="app-title">🗣️ Text-to-Speech Converter</h1>
                </div>
                
                <div className="converter-card">
                    <textarea
                        className="text-input"
                        rows="5"
                        placeholder="Enter your text here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    
                    <button 
                        className={`convert-button ${loading ? 'converting' : ''}`}
                        onClick={handleConvert} 
                        disabled={loading}
                    >
                        {loading ? "Converting..." : "Convert to Speech"}
                    </button>

                    {audioUrl && (
                        <div className="audio-player-container">
                            <p className="audio-label">🔊 Your generated speech:</p>
                            <audio controls className="audio-player">
                                <source src={audioUrl} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
