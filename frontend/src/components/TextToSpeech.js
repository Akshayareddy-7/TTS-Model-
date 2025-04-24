import React, { useState } from "react";
import axios from "axios";

const TextToSpeech = () => {
    const [text, setText] = useState("");
    const [audioUrl, setAudioUrl] = useState(null);

    const handleConvert = async () => {
        if (!text.trim()) return;
        try {
            const response = await axios.post("http://localhost:5000/tts", { text });
            setAudioUrl(response.data.audioUrl);
        } catch (error) {
            console.error("Error converting text to speech", error);
        }
    };

    return (
        <div className="p-4 text-center">
            <h2 className="text-xl font-bold">Text-to-Speech Converter</h2>
            <textarea
                className="border p-2 w-full mt-2"
                rows="4"
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleConvert}>
                Convert to Speech
            </button>
            {audioUrl && (
                <div className="mt-4">
                    <audio controls>
                        <source src={audioUrl} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default TextToSpeech;

