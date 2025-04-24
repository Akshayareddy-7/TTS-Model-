import os
import sys
from gtts import gTTS

# Ensure the "audio" directory exists
AUDIO_DIR = "audio"
if not os.path.exists(AUDIO_DIR):
    os.makedirs(AUDIO_DIR)

# Get text input from command-line arguments
if len(sys.argv) < 2:
    print("Error: No text provided for speech synthesis")
    sys.exit(1)

text = sys.argv[1].strip()

# Validate text
if not text:
    print("Error: Empty text received")
    sys.exit(1)

# Define the output audio file path
audio_file = os.path.join(AUDIO_DIR, "output.mp3")

try:
    # Generate speech and save it as an MP3 file
    tts = gTTS(text=text, lang="en")
    tts.save(audio_file)

    # Print the file path so the backend can return it
    print(audio_file)

except Exception as e:
    print(f"Error generating speech: {str(e)}")
    sys.exit(1)
