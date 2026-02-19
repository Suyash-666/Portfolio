import { Float, Html } from '@react-three/drei';

export default function Education3D() {
  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.1}>
      <mesh position={[0, 2.3, 0]} scale={[1.2, 0.8, 0.18]} castShadow receiveShadow>
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
          emissiveIntensity={0.10}
        />
      </mesh>
      <Html
        position={[0, 2.65, -2.0]}
        center
        className="floating-card-anim"
        style={{
          color: '#fff',
          fontSize: '1.1rem',
          fontWeight: 800,
          textShadow: '0 0 8px #38bdf8',
          textAlign: 'center',
          width: 'max-content',
        }}
      >
        Education
      </Html>
      <Html
        position={[0, 2.4, -2.0]}
        center
        className="floating-card-anim"
        style={{
          color: '#bae6fd',
          fontSize: '0.9rem',
          fontWeight: 600,
          textAlign: 'center',
          width: 'max-content',
        }}
      >
        B.E. IT, ARMIET, Mumbai Univ.<br/>CGPA: 7.444
      </Html>
    </Float>
  );
}
