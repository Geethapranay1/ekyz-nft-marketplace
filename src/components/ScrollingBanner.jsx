export default function ScrollingBanner() {
  return (
    <div className="w-full overflow-hidden border-t border-b border-white bg-transparent cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-transparent hover:via-cyan-900/20 hover:to-transparent hover:border-cyan-400">
      <div className="flex animate-scroll transition-all duration-300 hover:animation-play-state-paused">
        <div className="flex-shrink-0 whitespace-nowrap">
          <span className="text-white font-[Megaton] text-2xl font-normal tracking-[0.6px] px-8 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION
          </span>
        </div>
        <div className="flex-shrink-0 whitespace-nowrap">
          <span className="text-white font-[Megaton] text-2xl font-normal tracking-[0.6px] px-8 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION      NEW COLLECTION
          </span>
        </div>
      </div>
    </div>
  );
}
