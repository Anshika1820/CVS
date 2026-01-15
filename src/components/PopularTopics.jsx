const PopularTopics = () => {
  const topics = [
    "EthicalHacking",
    "Cyber Attack",
    "SQLInjection",
    "BigBounty",
    "WebSecurity",
    "NetworkSecurity",
  ];

  return (
    <div className="
      flex 
      flex-wrap 
      gap-2 
      sm:gap-3 
      mb-4 
      sm:mb-6
    ">
      {topics.map((topic) => (
        <span
          key={topic}
          className="
            bg-green-900/30 
            text-green-400 
            px-3 
            sm:px-4 
            py-1 
            rounded-full 
            text-xs 
            sm:text-sm 
            cursor-pointer 
            hover:bg-green-800 
            transition
            whitespace-nowrap
          "
        >
          #{topic}
        </span>
      ))}
    </div>
  );
};

export default PopularTopics;
