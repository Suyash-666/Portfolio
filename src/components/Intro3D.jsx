import { Float } from '@react-three/drei';
import { Html } from '@react-three/drei';

export default function Intro3D() {
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.1}>
      <mesh position={[0, 1.2, 0]} scale={[2.5, 1.2, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color="#232848"
          roughness={0.12}
          metalness={0.25}
          transmission={0.7}
          thickness={0.7}
          ior={1.5}
          transparent
          opacity={0.92}
          clearcoat={1}
          clearcoatRoughness={0.08}
          emissive="#38bdf8"
          emissiveIntensity={0.12}
        />
      </mesh>
      <Html
        position={[0, 1.45, 0.7]}
        center
        className="floating-card-anim"
        style={{
          color: '#fff',
          fontSize: '2.5rem',
          fontWeight: 900,
          textShadow: '0 0 6px #38bdf8, 0 0 10px #232848',
          textAlign: 'center',
          width: 'max-content',
        }}
      >
        Suyash Pawar
      </Html>
      <Html
        position={[0, 1.1, 0.7]}
        center
        className="floating-card-anim"
        style={{
          color: '#a5b4fc',
          fontSize: '1.1rem',
          fontWeight: 600,
          textShadow: '0 0 2px #232848',
          textAlign: 'center',
          width: 'max-content',
        }}
      >
        IT Engineer | MERN Developer | Problem Solver
      </Html>
    </Float>
  );
}
