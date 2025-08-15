// src/components/TronFloor.jsx
import thickLineSvg from '../assets/images/thick-line.svg';
import neonGridSvg from '../assets/images/neon-grid.svg';

export default function TronFloor() {
  return (
    <div className="relative w-full h-[340px] z-10">
      <div
        className="absolute left-0 right-0 bottom-[320px] w-full pointer-events-none"
        style={{
          height: '16px',
          borderRadius: '16px',
          background: '#FF6348',
          boxShadow: '0 0 24px 8px #FF6348, 0 0 48px 16px #FF8274',
          opacity: 0.45,
        }}
      >
        <div
          style={{
            width: '98%',
            height: '7px',
            margin: '0 auto',
            position: 'relative',
            top: '5px',
            background: '#FF8274',
            borderRadius: '16px',
            boxShadow: '0 0 8px 4px #FFD7D3',
            opacity: 1,
          }}
        >
          {/* Soft highlight */}
          <div
            style={{
              width: '96%',
              height: '3px',
              margin: '0 auto',
              position: 'relative',
              top: '1px',
              background: '#FFD7D3',
              borderRadius: '16px',
              opacity: 0.4,
            }}
          />
        </div>
      </div>
      <img
        src={thickLineSvg}
        alt="Tron Floor Thick Line"
        className="absolute left-0 right-0 bottom-[320px] w-full"
        style={{
          height: '14px',
          borderRadius: '16px',
          opacity: 1,
          objectFit: 'cover',
        }}
      />
      <img
        src={neonGridSvg}
        alt="Tron Floor Neon Grid"
        className="absolute left-0 right-0 bottom-0 w-full"
        style={{
          height: '320px',
          opacity: 1,
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
