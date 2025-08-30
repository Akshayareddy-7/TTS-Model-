# 🎤 TTS Model - Advanced Text-to-Speech Web Application

A modern, interactive **Text-to-Speech (TTS) web application** that transforms written text into natural-sounding speech with a stunning particle-animated dark theme interface. Built with React.js frontend and Node.js backend, this application provides an engaging user experience with real-time speech synthesis.

## ✨ Features

- 🎯 **Real-time Text-to-Speech Conversion** - Convert any text input to high-quality audio
- 🎨 **Interactive Particle Background** - Beautiful animated particles that respond to mouse interactions
- 🌙 **Dark Theme UI** - Modern glass-morphism design with gradient effects
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎵 **Built-in Audio Player** - Play, pause, and control generated speech directly in the browser
- ⚡ **Fast Processing** - Quick text-to-speech conversion with loading indicators
- 🛠️ **Modular Architecture** - Clean separation between frontend and backend components

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed on your system:

- **[Node.js](https://nodejs.org/)** (v16 or higher) - JavaScript runtime
- **[npm](https://www.npmjs.com/)** (comes with Node.js) - Package manager
- **[Python](https://python.org/)** (v3.7 or higher) - For TTS processing
- **[Git](https://git-scm.com/)** - Version control

### 📥 Installation

#### 1. Clone the Repository
`git clone https://github.com/Akshayareddy-7/TTS-Model-.git`
cd TTS-Model-

#### 2. Install Frontend Dependencies
npm install

npm install react-tsparticles tsparticles-slim

#### 3. Install Backend Dependencies
cd backend
npm install express cors

pip install pyttsx3 gtts


---

## 🎯 Running the Application

### 🔧 Start the Backend Server
cd backend

node server.js
**Backend will be running at:** 🌐 `http://localhost:5000`

### 🎨 Start the Frontend Application
npm start
**Frontend will be running at:** 🌐 `http://localhost:3000`

### 🎉 Access the Application
Open your web browser and navigate to:
[**http://localhost:3000**](http://localhost:3000)

---

## 📁 Project Structure

TTS-Model-/
├── 📂 backend/ # Backend server code
│ ├── 📄 server.js # Express.js server
│ ├── 🐍 tts.py # Python TTS script
│ ├── 📂 audio/ # Generated audio files
│ └── 📄 package.json # Backend dependencies
├── 📂 frontend/ # React frontend (if separate)
├── 📂 src/ # React source code
│ ├── 📂 components/ # React components
│ │ ├── 📄 ParticleBackground.js
│ │ └── 📄 TextToSpeech.js
│ ├── 📄 App.js # Main App component
│ ├── 📄 App.css # Application styles
│ └── 📄 index.js # React entry point
├── 📂 public/ # Static assets
├── 📄 package.json # Frontend dependencies
├── 📄 package-lock.json # Dependency lock file
└── 📖 README.md # Project documentation

---

## 🛠️ Technology Stack

### Frontend
- **React.js** - User interface framework
- **React TSParticles** - Interactive particle animations
- **CSS3** - Modern styling with glass-morphism effects
- **JavaScript (ES6+)** - Application logic

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Python** - Text-to-speech processing
- **CORS** - Cross-origin resource sharing

---

## 🎮 Usage Instructions

1. **Enter Text**: Type or paste your text in the input area
2. **Convert**: Click the "Convert to Speech" button
3. **Listen**: Use the audio player to play your generated speech
4. **Interact**: Move your mouse around to interact with the particle background
5. **Responsive**: The app works on all device sizes

---

## 🔧 Configuration Options

### Customize Particle Effects
Edit `src/components/ParticleBackground.js` to modify:
- Particle count and size
- Colors and opacity
- Animation speed
- Interaction effects

### Modify TTS Settings
Edit `backend/tts.py` to adjust:
- Voice selection
- Speech rate
- Audio quality
- Output format



