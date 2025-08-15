export default function Footer() {
  return (
    <div className="w-full h-[63px] bg-[#000D18] border-t border-b border-[#292929]">
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex items-center">
          <span className="text-[#95FF00] font-[Voltec] text-[15px] font-normal uppercase tracking-normal leading-[19.47px]">
            /
          </span>
          <span className="text-[#DCDCDC] font-[Voltec] text-[15px] font-normal uppercase tracking-normal leading-[19.47px]">
            {" "}© WEBTHREE 2024
          </span>
        </div>
        
        <div className="flex items-center">
          <span className="text-[#95FF00] font-[Voltec] text-[15px] font-normal uppercase tracking-normal leading-[19.47px]">
            /
          </span>
          <span className="text-[#DCDCDC] font-[Voltec] text-[15px] font-normal uppercase tracking-normal leading-[19.47px]">
            {" "}ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </div>
  );
}
