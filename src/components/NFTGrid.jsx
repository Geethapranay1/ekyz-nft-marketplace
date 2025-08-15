// Placeholder NFT card component
function NFTCard({ sol }) {
  return (
    <div className="w-[360px] h-[526px] flex flex-col items-center bg-gray-200 shadow-lg relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
        <div className="w-[200px] h-[200px] bg-gray-400 rounded-lg flex items-center justify-center relative mt-16 mb-16">
          <div className="w-[160px] h-[120px] bg-gray-200 rounded-lg border-4 border-gray-400 flex items-center justify-center relative">
            <div className="absolute top-4 left-4 w-8 h-8 bg-gray-400 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gray-400 clip-triangle"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-14 bg-[#FF6A4D] flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-white font-semibold text-lg">BUY MINT</span>
          <span className="text-white font-semibold text-lg">{sol} SOL</span>
        </div>
      </div>
    </div>
  );
}

export default function NFTGrid() {
  // Example SOL values for each card
  const solValues = [20, 15, 30, 25, 18, 22, 27, 19];
  return (
    <div className="w-full bg-[#000D18]">
      {/* First Row */}
      <div className="flex justify-center items-center border-b border-white bg-transparent py-8">
        <div className="grid grid-cols-4 gap-2 max-w-[1440px]">
          <NFTCard sol={solValues[0]} />
          <NFTCard sol={solValues[1]} />
          <NFTCard sol={solValues[2]} />
          <NFTCard sol={solValues[3]} />
        </div>
      </div>
      
      {/* Second Row */}
      <div className="flex justify-center items-center border-b border-white bg-transparent py-8">
        <div className="grid grid-cols-4 gap-2 max-w-[1440px]">
          <NFTCard sol={solValues[4]} />
          <NFTCard sol={solValues[5]} />
          <NFTCard sol={solValues[6]} />
          <NFTCard sol={solValues[7]} />
        </div>
      </div>
    </div>
  );
}
