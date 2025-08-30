import React, { useState } from "react";
import axios from "axios";
import ParticleBackground from './ParticleBackground';

const TextToSpeech = () => {
    const [text, setText] = useState("");
    const [audioUrl, setAudioUrl] = useState(null);
    const [isConverting, setIsConverting] = useState(false);

    const handleConvert = async () => {
        if (!text.trim()) return;
        
        setIsConverting(true);
        try {
            const response = await axios.post("http://localhost:5000/tts", { text });
            setAudioUrl(response.data.audioUrl);
        } catch (error) {
            console.error("Error converting text to speech", error);
        } finally {
            setIsConverting(false);
        }
    };

    return (
        <div className="app-container">
            <ParticleBackground />
            <div className="content-wrapper">
                <div className="header">
                    <h2 className="app-title">🎤 Text-to-Speech Converter</h2>
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
                        className={`convert-button ${isConverting ? 'converting' : ''}`}
                        onClick={handleConvert}
                        disabled={!text.trim() || isConverting}
                    >
                        {isConverting ? 'Converting...' : 'Convert to Speech'}
                    </button>
                    
                    {audioUrl && (
                        <div className="audio-player-container">
                            <p className="audio-label">🔊 Your generated speech:</p>
                            <audio controls className="audio-player">
                                <source src={audioUrl} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TextToSpeech;
