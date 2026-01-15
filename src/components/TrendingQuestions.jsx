const TrendingQuestions = () => {
  return (
    <div
      className="
        bg-[#020617] 
        border border-gray-800 
        rounded-xl 
        p-3 
        sm:p-4 
        mb-5 
        sm:mb-6 
        w-full
      "
    >
      <h2 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">
        🔥 Trending Questions
      </h2>

      <ul className="space-y-2 sm:space-y-3 text-green-400">
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          What is cybersecurity and why is it important in today’s digital world?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          How do ethical hackers legally test systems without breaking the law?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          What is the role of AI in modern cyber attacks?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          What skills are required to become a cybersecurity analyst?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          What are the most dangerous cyber attacks in recent years?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          How does SQL injection work and how can developers prevent it?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          How secure is blockchain technology against hacking?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          How can I protect my social media accounts from hacking?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          What are the best practices for securing a home Wi-Fi network?
        </li>
        <li className="text-sm sm:text-base hover:text-green-300 cursor-pointer leading-relaxed">
          What is the difference between white hat, black hat, and gray hat hackers?
        </li>
      </ul>
    </div>
  );
};

export default TrendingQuestions;
