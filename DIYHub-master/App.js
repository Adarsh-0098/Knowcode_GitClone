import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Webcam from "react-webcam";
import ChairModel from "./components/ChairModel";

const App = () => {
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
    </div>
  );
};

export default App;
