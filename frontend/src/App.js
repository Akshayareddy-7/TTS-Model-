import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure CSS is already there

function App() {
    const [text, setText] = useState("");
    const [audioUrl, setAudioUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    // 🧠 Create floating particles periodically
    useEffect(() => {
        const interval = setInterval(() => {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";
            particle.style.animationDelay = Math.random() * 6 + "s";

            document.querySelector(".particles")?.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 6000);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
        <div>
            {/* Floating Particles */}
            <div className="particles">
                <div className="particle" style={{ left: "20%", animationDelay: "0s" }}></div>
                <div className="particle" style={{ left: "40%", animationDelay: "2s" }}></div>
                <div className="particle" style={{ left: "60%", animationDelay: "4s" }}></div>
                <div className="particle" style={{ left: "80%", animationDelay: "6s" }}></div>
                <div className="particle" style={{ left: "10%", top: "70%", animationDelay: "1s" }}></div>
                <div className="particle" style={{ left: "30%", top: "80%", animationDelay: "3s" }}></div>
                <div className="particle" style={{ left: "70%", top: "60%", animationDelay: "5s" }}></div>
                <div className="particle" style={{ left: "90%", top: "20%", animationDelay: "7s" }}></div>
            </div>

            {/* Main Container */}
            <div className="container">
                <h1>🎙️ Text to Speech</h1>
                <textarea
                    className="text-input"
                    placeholder="Enter your text here to convert to speech..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="convert-button"
                    onClick={handleConvert}
                    disabled={loading}
                >
                    {loading ? <span className="loading"></span> : null}
                    {loading ? "Converting..." : "Convert to Speech"}
                </button>

                {audioUrl && (
                    <div className="audio-container pulse">
                        <p>🔊 Your Audio is Ready!</p>
                        <div className="sound-wave">
                            <div className="wave-bar"></div>
                            <div className="wave-bar"></div>
                            <div className="wave-bar"></div>
                            <div className="wave-bar"></div>
                            <div className="wave-bar"></div>
                        </div>
                        <audio controls>
                            <source src={audioUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
