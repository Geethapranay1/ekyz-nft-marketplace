import Button from "../assets/images/Button.svg";
import vector from '../assets/images/Vector.svg';

export default function HeroSection() {
  return (
    <div className="relative w-[1147px] h-[648px] overflow-hidden mx-auto bg-[#00120A]">
      <div className="absolute left-0 top-0 w-[140px] h-[60px]">
        <img src={vector} alt="corner" className="absolute left-[15px] top-[10px] w-[10px] h-[10px]" />
        <img src={vector} alt="corner" className="absolute left-[1120px] top-[10px] w-[10px] h-[10px] rotate-90" />
        <img src={vector} alt="corner" className="absolute left-[1120px] top-[568px] w-[10px] h-[10px] rotate-180" />
        <img src={vector} alt="corner" className="absolute left-[15px] top-[568px] w-[10px] h-[10px] rotate-270" />
        <div className="absolute left-[25px] top-[8px]">
          <div
            className="flex items-center"
            style={{
              fontFamily: 'Orbitron',
              fontSize: '8px',
              fontWeight: 400,
              textTransform: 'capitalize',
              lineHeight: '24.33px',
              letterSpacing: '0.64px',
              wordWrap: 'break-word',
            }}
          >
            <span style={{ color: 'white' }}>DSP: </span>
            <span style={{ color: '#21E786', marginLeft: '6px' }}>1707 x 979</span>
          </div>
          <div
            className="flex items-center mt-1"
            style={{
              fontFamily: 'Orbitron',
              fontSize: '8px',
              fontWeight: 400,
              textTransform: 'capitalize',
              lineHeight: '24.33px',
              letterSpacing: '0.64px',
              wordWrap: 'break-word',
            }}
          >
            <span style={{ color: 'white' }}>FPS: </span>
            <span style={{ color: '#21E786', marginLeft: '6px' }}>67.90</span>
          </div>
        </div>
      </div>

      <div className="absolute right-[25px] top-[8px] text-right">
        <div
          style={{
            fontFamily: 'Orbitron',
            fontSize: '8px',
            fontWeight: 400,
            textTransform: 'capitalize',
            lineHeight: '24.33px',
            letterSpacing: '0.64px',
            wordWrap: 'break-word',
          }}
        >
          <span style={{ color: '#21E786' }}>{new Date().toLocaleDateString('en-GB')}</span>
          <span style={{ color: 'white' }}> :DATE</span>
        </div>
        <div
          style={{
            fontFamily: 'Orbitron',
            fontSize: '8px',
            fontWeight: 400,
            textTransform: 'capitalize',
            lineHeight: '24.33px',
            letterSpacing: '0.64px',
            wordWrap: 'break-word',
            marginTop: '8px',
          }}
        >
          <span style={{ color: '#21E786'}}>
            {new Date().toLocaleTimeString('en-GB', { hour12: false })}
          </span>
          <span style={{ color: 'white', marginLeft: '6px' }}> :TIME</span>
        </div>
      </div>


      <div className="absolute left-[38px] top-[312px] font-[Orbitron] text-[10px] font-normal leading-[24px] tracking-[0.64px] capitalize">
        <span className="text-white">///: </span>
        <span className="text-[#21E786]">0.20</span>
      </div>
      <div className="absolute right-[38px] top-[312px] text-right font-[Orbitron] text-[10px] font-normal leading-[24px] tracking-[0.64px] capitalize">
        <span className="text-[#21E786]">0.49</span>
        <span className="text-white"> :\\\</span>
      </div>
      <div
        className="absolute left-[25px] bottom-[70px]"
        style={{
          fontFamily: 'Orbitron',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '8px',
          lineHeight: '24.33px',
          letterSpacing: '0.64px',
          textTransform: 'capitalize',
        }}
      >
        <span style={{ color: 'white' }}>EVO: </span>
        <span style={{ color: '#21E786' }}>Alpha</span>
        <br />
        <span style={{ color: 'white' }}>VERS: </span>
        <span style={{ color: '#21E786' }}>01.08.84</span>
      </div>
      <div
        className="absolute right-[25px] bottom-[70px] text-right"
        style={{
          fontFamily: 'Orbitron',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '8px',
          lineHeight: '24.33px',
          letterSpacing: '0.64px',
          textTransform: 'capitalize',
        }}
      >
        <span style={{ color: '#21E786' }}>74.906</span>
        <span style={{ color: 'white' }}> :LOG</span>
        <br />
        <span style={{ color: '#21E786' }}>Win11 Chrome/138.0.0.0</span>
        <span style={{ color: 'white' }}> :SYS</span>
      </div>

      {/* Central content */}
      <div className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 w-full">
        <h1
          className="text-center"
          style={{
            color: 'white',
            fontSize: 84,
            fontFamily: 'Atomos',
            fontWeight: 400,
            textTransform: 'capitalize',
            lineHeight: '80px',
            wordWrap: 'break-word',
          }}
        >
          EXPLORE NFT COLLECTION
        </h1>
        <p
          className="text-white text-center mt-8"
          style={{
            fontFamily: 'Voltec',
            fontSize: '28px',
            fontWeight: 400,
            lineHeight: '36px',
            maxWidth: '900px',
          }}
        >
          A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique,<br />
          metaverse-ready, and designed to benefit their holders.
        </p>
        <div className="mt-12 flex justify-center items-center">
          <button
            className="w-[260px] h-[64px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_16px_#00BFFF]"
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            <img src={Button} alt="Start Game" className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
