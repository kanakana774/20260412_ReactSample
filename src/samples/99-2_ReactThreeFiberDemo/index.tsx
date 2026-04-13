import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const { x, y } = state.mouse;
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        x * 3,
        0.1,
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        y * 3,
        0.1,
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      {/* 発光を強くするため、ライトの強度(intensity)を上げます */}
      <pointLight position={[10, 10, 10]} intensity={3} color="#00d2ff" />
      <pointLight position={[-10, -10, -10]} intensity={3} color="#ff00ff" />

      <Float speed={5} rotationIntensity={2}>
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.4}>
          <MeshDistortMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={1}
            distort={0.4}
            speed={4}
            // emissive (自照色) を設定すると、そこが Bloom で光り輝きます
            emissive="#4060ff"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      {/* --- ここが魔法の追加部分 --- */}
      <EffectComposer>
        {/* luminanceThreshold: どのくらいの明るさから光らせるか */}
        {/* intensity: 光の強さ */}
        <Bloom
          luminanceThreshold={0.2}
          mipmapBlur
          intensity={1.5}
          radius={0.4}
        />
        {/* フィルムのようなノイズを少し足して質感を出す */}
        <Noise opacity={0.05} />
        {/* 四隅を少し暗くして中心を際立たせる */}
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Scene />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          color: "white",
          pointerEvents: "none",
        }}
      >
        <h2 style={{ fontSize: "14px", letterSpacing: "0.5em", opacity: 0.8 }}>
          R3F + POSTPROCESSING
        </h2>
      </div>
    </div>
  );
}
