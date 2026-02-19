import { motion } from 'framer-motion';

export default function OptionCard({ title, onClick, position, isActive, isHidden, children, showContent, onBack }) {
  // position: 'top' | 'left' | 'right' | 'bottom'
  // isActive: true if expanded
  // isHidden: true if faded out
  // showContent: true if showing full content
  // onBack: function for back button

  // Positioning logic for initial layout
  const posStyles = {
    top: 'top-0 left-1/2 -translate-x-1/2',
    left: 'left-0 top-1/2 -translate-y-1/2',
    right: 'right-0 top-1/2 -translate-y-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2',
  };

  return (
    <motion.div
      className={`absolute ${posStyles[position]} z-30 flex items-center justify-center`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isHidden ? 0 : 1,
        scale: isActive ? 1.12 : 1,
        zIndex: isActive ? 50 : 30,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        pointerEvents: isHidden ? 'none' : 'auto',
        width: isActive ? 340 : 120,
        height: isActive ? 220 : 60,
        borderRadius: 20,
        background: 'rgba(24,24,27,0.55)',
        boxShadow: isActive
          ? '0 8px 32px 0 rgba(56,189,248,0.25), 0 0 24px 2px #38bdf8'
          : '0 2px 12px 0 #232848',
        backdropFilter: 'blur(10px)',
        border: '1.5px solid rgba(56,189,248,0.18)',
        color: '#a5b4fc',
        cursor: isActive ? 'default' : 'pointer',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isActive ? '1.2rem' : '0',
        transition: 'box-shadow 0.3s, border 0.3s',
      }}
      onClick={isActive ? undefined : onClick}
    >
      {showContent ? (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {children}
          {onBack && (
            <button
              onClick={onBack}
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                background: 'rgba(30,41,59,0.7)',
                border: 'none',
                borderRadius: 8,
                color: '#38bdf8',
                fontWeight: 700,
                fontSize: 16,
                padding: '0.3em 0.8em',
                cursor: 'pointer',
                boxShadow: '0 0 8px #232848',
                zIndex: 100,
              }}
            >
              Back
            </button>
          )}
        </div>
      ) : (
        <span style={{ fontWeight: 700, fontSize: 20, color: '#38bdf8', letterSpacing: '0.04em' }}>{title}</span>
      )}
    </motion.div>
  );
}
