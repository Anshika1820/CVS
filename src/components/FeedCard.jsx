import { FiArrowUp, FiEye } from "react-icons/fi";

const FeedCard = () => {
  return (
    <article className="border border-gray-800 rounded-xl overflow-hidden hover:border-green-500 transition">

      {/* COVER IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
        alt="Cyber Security"
        className="h-52 w-full object-cover"
      />

      <div className="p-5">

        {/* AUTHOR */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://i.pravatar.cc/40?img=15"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">
              Rahul Sharma
              <span className="text-green-400 ml-2 text-xs">
                Contributor
              </span>
            </p>
            <p className="text-xs text-gray-400">
              Bug Bounty Hunter · 2h ago
            </p>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-semibold mb-2 hover:text-green-400 cursor-pointer">
          How SQL Injection Still Destroys Modern Web Applications
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm mb-4">
          SQL Injection is considered an old vulnerability, yet it
          remains one of the most exploited flaws in real-world web
          applications. This article explains why it still works and
          how defenders can stop it effectively.
        </p>

        {/* TAGS */}
        <div className="flex gap-2 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-gray-800">
            Web Security
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-800">
            OWASP
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-800">
            SQLi
          </span>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FiArrowUp /> 142
            </span>
            <span className="flex items-center gap-1">
              <FiEye /> 3.4k views
            </span>
          </div>

          <span className="text-green-400 cursor-pointer">
            Read More →
          </span>
        </div>

      </div>
    </article>
  );
};

export default FeedCard;
