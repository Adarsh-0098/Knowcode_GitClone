import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Webcam from "react-webcam";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

// ChairModel Component
const ChairModel = () => {
  const chair = useLoader(OBJLoader, "/model/chair.obj");

  // Ensure the model has a material
  chair.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#00000",
        metalness: 0.5,
        roughness: 0.8,
      });
    }
  });

  return (
    <primitive
      object={chair}
      scale={[0.2, 0.2, 0.2]} // Adjust scale for visibility
      position={[0, -0.5, 0]} // Center the chair
    />
  );
};

// ChairPage Component
const ChairPage = () => {
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
          objectFit: "contain", // Fix zoom issue
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
        camera={{
          position: [0, 2, 5], // Set initial camera position for a good view
          fov: 50, // Field of View for a natural perspective
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Suspense for model loading */}
        <Suspense fallback={null}>
          <ChairModel />
        </Suspense>

        {/* Orbit Controls with Limits */}
        <OrbitControls
  enableZoom={true}
  zoomSpeed={0.5}
  enablePan={true}
  panSpeed={1.5}
  enableRotate={true}
  rotateSpeed={1.0}
  autoRotate={true}
  autoRotateSpeed={0.8}
  minDistance={0}
  maxDistance={4}
  minPolarAngle={Math.PI / 4}
  maxPolarAngle={Math.PI / 2}
/>

      </Canvas>
    </div>
  );
};

export default ChairPage;
