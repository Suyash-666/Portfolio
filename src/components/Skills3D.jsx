import { Float, Html } from '@react-three/drei';

export default function Skills3D() {
  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.1}>
      <mesh position={[-2.1, 1.2, 0]} scale={[1.2, 0.8, 0.18]} castShadow receiveShadow>
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
        position={[-3.2, 1.35, 0.6]}
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
        Skills
      </Html>
      <Html
        position={[-3.2, 1.1, 0.6]}
        center
        className="floating-card-anim"
        style={{
          color: '#fbcfe8',
          fontSize: '0.9rem',
          fontWeight: 600,
          textAlign: 'center',
          width: '100%',
          maxWidth: 220,
          margin: '0 auto',
          padding: '0.2rem 0.5rem',
        }}
      >
        <div className="skills-grid-responsive">
          <span>JavaScript</span>
          <span>Python</span>
          <span>C++</span>
          <span>Java</span>
          <span>Dart</span>
          <span>SQL</span>
          <span>React</span>
          <span>Node</span>
          <span>Express</span>
          <span>Flask</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>Firebase</span>
          <span>ML</span>
          <span>AWS</span>
          <span>Linux</span>
          <span>Flutter</span>
        </div>
      </Html>
    </Float>
  );
}
