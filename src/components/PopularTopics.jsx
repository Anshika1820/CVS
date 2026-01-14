const PopularTopics = () => {
  const topics = ["EthicalHacking", "Cyber Attack",  "SQLInjection", "BigBounty", "WebSecurity", "NetworkSecurity"];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {topics.map((topic) => (
        <span
          key={topic}
          className="bg-green-900/30 text-green-400 px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-green-800 transition"
        >
          #{topic}
        </span>
      ))}
    </div>
  );
};

export default PopularTopics;
