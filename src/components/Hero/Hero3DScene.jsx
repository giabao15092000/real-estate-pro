// src/components/Hero/Hero3DScene.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero3DScene = () => {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#f87171"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Hero3DScene;
