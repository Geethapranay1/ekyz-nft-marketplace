import Container from '../assets/images/Container.svg';

export default function FooterIcons() {
  return (
    <div className="w-full h-[125px] relative flex items-center bg-[#000D18] overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full flex"
        style={{
          width: '2400px', 
          animation: 'scroll-x 20s linear infinite',
        }}
      >
        <img
          src={Container}
          alt="Container"
          className="h-full object-cover"
          style={{ minWidth: '1200px' }}
        />
        <img
          src={Container}
          alt="Container"
          className="h-full object-cover"
          style={{ minWidth: '1200px' }}
        />
      </div>
      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-1200px); }
          }
        `}
      </style>
    </div>
  );
}
