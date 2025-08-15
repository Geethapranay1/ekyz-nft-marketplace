import connectWalletBox from '../assets/images/connect-wallet-box.svg'; // your asset

export default function TopBar() {
  return (
    <header className="w-[full] h-[80px] flex items-center justify-between px-[30px]">
      <span className="font-[Voltec] font-normal text-[24px] leading-[24.33px] tracking-[8%] capitalize text-white cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        Exyz
      </span>

      <span className="font-[Voltec] font-normal text-[24px] leading-[24.33px] tracking-[8%] capitalize text-white cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        Leaderboard
      </span>


      <button className="relative flex items-center justify-center w-[180px] h-[34px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] group">
        <img
            src={connectWalletBox}
            alt="Connect Wallet Box"
            className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        />
        <span className="font-[Orbitron] font-extrabold text-[12px] tracking-[0.6px] text-white relative z-10 transition-all duration-300 group-hover:text-cyan-300">
            CONNECT WALLET
        </span>
    </button>

    </header>
  );
}
