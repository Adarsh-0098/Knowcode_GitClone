import React from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const ChairModel = () => {
  // Load the chair model using OBJLoader
  const chair = useLoader(OBJLoader, "C:/Users/Ansh/Documents/COLLEGE/Wingman-master/public/model/chair.obj");

  return (
    <primitive 
      object={chair} 
      scale={[0.5, 0.5, 0.5]} // Adjust scale if needed
      position={[0, -1, 0]}   // Adjust position if needed
    />
  );
};

export default ChairModel;
