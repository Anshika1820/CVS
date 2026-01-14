const TrendingQuestions = () => {
  return (
    <div className="bg-[#020617] border border-gray-800 rounded-xl p-4 mb-6 w-full">
      <h2 className="text-lg font-semibold text-gray-200 mb-3">
        🔥 Trending Questions
      </h2>

      <ul className="space-y-3 text-green-400">
        <li className="hover:text-green-300 cursor-pointer">
          What is cybersecurity and why is it important in today’s digital world?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          How do ethical hackers legally test systems without breaking the law?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          What is the role of AI in modern cyber attacks?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          What skills are required to become a cybersecurity analyst?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          What are the most dangerous cyber attacks in recent years?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          How does SQL injection work and how can developers prevent it?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          How secure is blockchain technology against hacking?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          How can I protect my social media accounts from hacking?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          What are the best practices for securing a home Wi-Fi network?
        </li>
        <li className="hover:text-green-300 cursor-pointer">
          What is the difference between white hat, black hat, and gray hat hackers?
        </li>
      </ul>
    </div>
  );
};

export default TrendingQuestions;
