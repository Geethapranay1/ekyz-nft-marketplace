import connectWalletBox from '../assets/images/connect-wallet-box.svg';

export default function FooterBar() {
  return (
    <footer className="w-full h-[80px] bg-[#00121A] border-t border-[#00BFFF] flex items-center justify-between px-[40px]">
      <span className="font-[Voltec] font-normal text-[24px] leading-[24px] tracking-[0.08em] capitalize text-white">
        COINPORT
      </span>
      <button className="relative flex items-center justify-center w-[180px] h-[34px] group">
        <img
          src={connectWalletBox}
          alt="Connect Wallet Box"
          className="absolute inset-0 w-full h-full group-hover:brightness-125"
        />
        <span className="font-[Orbitron] font-extrabold text-[12px] tracking-[0.6px] text-white relative z-10 group-hover:text-cyan-300">
          CONNECT WALLET
        </span>
      </button>
    </footer>
  );
}