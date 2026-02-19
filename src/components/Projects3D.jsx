import { Float, Html } from '@react-three/drei';

export default function Projects3D() {
  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.1}>
      <mesh position={[2.1, 1.2, 0]} scale={[1.2, 0.8, 0.18]} castShadow receiveShadow>
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
          emissive="#a78bfa"
          emissiveIntensity={0.10}
        />
      </mesh>
      <Html
        position={[3.2, 1.35, 0.6]}
        center
        className="floating-card-anim"
        style={{
          color: '#fff',
          fontSize: '1.1rem',
          fontWeight: 800,
          textShadow: '0 0 8px #a78bfa',
          textAlign: 'center',
          width: 'max-content',
        }}
      >
        Projects
      </Html>
      <Html
        position={[2.1, 1.1, 0.6]}
        center
        className="floating-card-anim"
        style={{
          color: '#d1caff',
          fontSize: '0.95rem',
          fontWeight: 600,
          textAlign: 'center',
          width: '100%',
          maxWidth: 240,
          margin: '0 auto',
          padding: '0.4rem 0.7rem',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: 240,
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 14,
            boxShadow: '0 2px 12px 0 #7c3aed33',
            padding: '0.7rem 0.7rem',
            transition: 'box-shadow 0.3s',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
            onMouseOver={e => e.currentTarget.style.boxShadow = '0 0 16px 2px #a21caf, 0 0 32px 4px #38bdf8'}
            onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 12px 0 #7c3aed33'}
          >
            <div style={{fontWeight:700, color:'#a5b4fc', marginBottom: 2}}>Expense Tracker</div>
            <div style={{fontSize:'0.85em', color:'#c4b5fd'}}>React, Firebase, MERN</div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 14,
            boxShadow: '0 2px 12px 0 #7c3aed33',
            padding: '0.7rem 0.7rem',
            transition: 'box-shadow 0.3s',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
            onMouseOver={e => e.currentTarget.style.boxShadow = '0 0 16px 2px #a21caf, 0 0 32px 4px #38bdf8'}
            onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 12px 0 #7c3aed33'}
          >
            <div style={{fontWeight:700, color:'#a5b4fc', marginBottom: 2}}>ML Healthcare System</div>
            <div style={{fontSize:'0.85em', color:'#c4b5fd'}}>Python, Flask, ML</div>
          </div>
        </div>
      </Html>
    </Float>
  );
}
