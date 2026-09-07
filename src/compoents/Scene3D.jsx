import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useRef } from "react";

const nodes = [
  [1.45, 0.65, 0.35],
  [-1.28, 0.92, -0.2],
  [0.18, -1.45, 0.45],
  [-0.74, -1.18, -0.85],
  [1.1, -0.7, -0.6],
  [-0.18, 1.55, -0.55],
];

function OrbitalCore() {
  const core = useRef(null);

  useFrame((state, delta) => {
    if (!core.current) return;
    core.current.rotation.y += delta * 0.18;
    core.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.22) * 0.08;
  });

  return (
    <group ref={core} position={[1.35, 0.05, 0]}>
      <mesh>
        <sphereGeometry args={[1.42, 28, 28]} />
        <meshStandardMaterial
          color="#0e3155"
          metalness={0.84}
          roughness={0.26}
          transparent
          opacity={0.72}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.47, 18, 18]} />
        <meshBasicMaterial color="#56d8ff" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[0.95, 0.28, 0]}>
        <torusGeometry args={[1.82, 0.018, 8, 80]} />
        <meshBasicMaterial color="#61dafb" transparent opacity={0.75} />
      </mesh>
      <mesh rotation={[-0.55, 1.03, 0.42]}>
        <torusGeometry args={[1.96, 0.012, 8, 80]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.55} />
      </mesh>
      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[index % 2 ? 0.075 : 0.11, 16, 16]} />
          <meshBasicMaterial color={index % 2 ? "#8bdbff" : "#c4b5fd"} />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[3.5, 3, 3]} intensity={20} color="#55d6ff" />
        <pointLight position={[-3, -1, 2]} intensity={10} color="#8b5cf6" />
        <OrbitalCore />
        <Sparkles count={44} scale={[7, 5, 3]} size={1.7} speed={0.22} color="#8bdbff" />
      </Canvas>
    </div>
  );
}