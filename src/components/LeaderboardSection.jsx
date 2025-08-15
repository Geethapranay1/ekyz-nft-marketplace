import teamLogo1 from '../assets/images/Image [team-logo].svg';
import teamLogo2 from '../assets/images/Image [team-logo] (1).svg';
import teamLogo3 from '../assets/images/Image [team-logo] (2).svg';
import teamLogo4 from '../assets/images/Image [team-logo] (3).svg';
import group from "../assets/images/Group.svg"; // Skull icon


export default function LeaderboardSection() {
  const leaderboardData = [
    { rank: "17", team: "REalTech", logo: teamLogo1, kills: "17", reward: null },
    { rank: "15", team: "PYSCHO", subtitle: '"Azov"', logo: teamLogo2, kills: "15", reward: "30 SOL" },
    { rank: "8", team: "SSTS", logo: teamLogo3, kills: "8", reward: "25 SOL" },
    { rank: "11", team: "38th AAMR", logo: teamLogo4, kills: "11", reward: "25 SOL" },
  ];

  return (
    <div className="w-full bg-[#000D18] py-16">
      <h2 className="text-white text-center font-[Atomos-Regular] text-[96px] font-normal tracking-[0.6px] mb-12">
        THE LEAGUE
      </h2>
      
      <div className="max-w-[1179px] mx-auto bg-[#00120A] border border-white/20 rounded-[11px] p-8">
        {leaderboardData.map((item, index) => (
          <div key={index} className="relative">
            <div className="grid grid-cols-[1fr_80px_60px_140px] items-center py-6 px-4 rounded-lg">
              <div className="flex items-center gap-6">
                <div className="w-9 h-9 flex items-center justify-center">
                  <img src={item.logo} alt={`${item.team} logo`} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-white font-[Voltec] text-[32px] font-normal uppercase tracking-[-0.54px] leading-[20px]">
                    {item.team}
                  </div>
                  {item.subtitle && (
                    <div className="text-white font-[Voltec] text-[20px] font-normal uppercase tracking-[-0.54px] leading-[20px]">
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </div>

                <div className="text-white font-['PressStart2P'] text-[18px] font-normal uppercase tracking-[-0.54px] leading-[20px] text-right">
                  {item.kills}
                </div>

                <div className="flex items-center justify-center">
                  <img src={group} alt="Skull Icon" className="w-6 h-6 object-contain" />
                </div>

              <div className="text-white font-['PressStart2P'] text-[18px] font-normal uppercase tracking-[-0.54px] leading-[20px] text-right pl-8">
                {item.reward}
              </div>
            </div>

            {index < leaderboardData.length - 1 && (
              <div className="w-full h-1 bg-[#FF6348] mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
