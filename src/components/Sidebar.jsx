const Sidebar = () => {
  return (
    <div className="space-y-5 sm:space-y-6">

      {/* PLATFORM INTRO */}
      <div className="border border-gray-800 rounded-xl p-3 sm:p-4 bg-black-900 hover:shadow-lg hover:border-green-700 transition">
        <h3 className="font-semibold mb-2 text-sm sm:text-base">
          About Codevirus Security
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          A community-driven cyber security knowledge platform.
          All articles are reviewed by industry professionals
          before publishing. Codevirus Security is a company established in 2018 , works in a collaborative form of company and   leading Cyber Security Training Institute, situated in the heart of Uttar Pradesh – Lucknow. We offer modern day solutions for current cyber security needs and protection from emerging digital threats, as the world is encountering various cybercrimes with advancement of day to day technologies.
As a training institute, we provide an engaging learning environment with impeccable infrastructure and tools, through which students can learn with enthusiasm from our experts, so that they can add feathers to their wings for soaring high in their career with industry ready skills.
        </p>
      </div>

      {/* RULES */}
      <div className="border border-gray-800 rounded-xl p-3 sm:p-4 bg-black-900 hover:shadow-lg hover:border-green-700 transition">
        <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
          Publishing Rules
        </h3>
        <ul className="text-sm text-black-900 space-y-1 leading-relaxed">
          <li>✔️ Cyber Security topics only</li>
          <li>✔️ Original & practical content</li>
          <li>❌ No AI spam</li>
          <li>❌ No illegal hacking</li>
        </ul>
      </div>

      {/* TRENDING */}
      <div className="border border-gray-800 rounded-xl p-3 sm:p-4 bg-black-900 hover:border-green-700">
        <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
          Trending Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 bg-gray-800 rounded-full cursor-pointer hover:bg-green-700 transition">
            Bug Bounty
          </span>
          <span className="text-xs px-3 py-1 bg-gray-800 rounded-full cursor-pointer hover:bg-green-700 transition">
            SOC Analyst
          </span>
          <span className="text-xs px-3 py-1 bg-gray-800 rounded-full cursor-pointer hover:bg-green-700 transition">
            Red Team
          </span>
          <span className="text-xs px-3 py-1 bg-gray-800 rounded-full cursor-pointer hover:bg-green-700 transition">
            Blue Team
          </span>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
