import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Webcam from "react-webcam";
import ChairModel from "./components/ChairModel";
import AIDesignSuggestion from "./components/AiSuggestion/AIDesignSuggestion";

const App = () => {
  const [showAISuggestions, setShowAISuggestions] = useState(false);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Camera Feed */}
      <Webcam
        audio={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* 3D Model Canvas */}
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <ChairModel />
        </Suspense>
        <OrbitControls />
      </Canvas>

      {/* AI Suggestions Sidebar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: showAISuggestions ? 0 : "-400px", // Slide in/out effect
          width: "400px",
          height: "100%",
          background: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
          transition: "right 0.3s ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "10px",
            left: "-40px",
            width: "40px",
            height: "40px",
            background: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setShowAISuggestions(!showAISuggestions)}
        >
          {showAISuggestions ? ">" : "<"}
        </button>
        <div style={{ padding: "20px", overflowY: "auto" }}>
          <AIDesignSuggestion />
        </div>
      </div>
    </div>
  );
};

export default App;
