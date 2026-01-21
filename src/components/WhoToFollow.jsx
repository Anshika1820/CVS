const WhoToFollow = () => {
  return (
    <div
      className="
        bg-black-900 
        border border-green-700 
        rounded-xl 
        p-3 
        sm:p-4 
        mt-4 
        sm:mt-6 
        w-full
      "
    >
      <h2 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">
        👥 Who to Follow
      </h2>

      <div className="space-y-3">
        {["Ankit Dev", "Priya Sharma", "Rahul Singh"].map((user) => (
          <div
            key={user}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-sm sm:text-base text-gray-300 truncate">
              {user}
            </span>

            <button
              className="
                text-sm 
                bg-green-600 
                text-black 
                px-4 
                py-1.5 
                rounded 
                hover:bg-green-500 
                transition 
                whitespace-nowrap
              "
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoToFollow;
