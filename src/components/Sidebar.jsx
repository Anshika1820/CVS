const Sidebar = () => {
  return (
    <div className="space-y-6">

      {/* PLATFORM INTRO */}
      <div className="border border-gray-800 rounded-xl p-4">
        <h3 className="font-semibold mb-2">
          About Codevirus Security
        </h3>
        <p className="text-sm text-gray-400">
          A community-driven cyber security knowledge platform.
          All articles are reviewed by industry professionals
          before publishing.
        </p>
      </div>

      {/* RULES */}
      <div className="border border-gray-800 rounded-xl p-4">
        <h3 className="font-semibold mb-3">
          Publishing Rules
        </h3>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>✔️ Cyber Security topics only</li>
          <li>✔️ Original & practical content</li>
          <li>❌ No AI spam</li>
          <li>❌ No illegal hacking</li>
        </ul>
      </div>

      {/* TRENDING */}
      <div className="border border-gray-800 rounded-xl p-4">
        <h3 className="font-semibold mb-3">
          Trending Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 bg-gray-800 rounded-full">
            Bug Bounty
          </span>
          <span className="text-xs px-3 py-1 bg-gray-800 rounded-full">
            SOC Analyst
          </span>
          <span className="text-xs px-3 py-1 bg-gray-800 rounded-full">
            Malware
          </span>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
