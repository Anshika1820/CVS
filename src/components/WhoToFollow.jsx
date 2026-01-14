const WhoToFollow = () => {
  return (
    <div className="bg-[#020617] border border-gray-800 rounded-xl p-4 mt-6 w-full">
      <h2 className="text-lg font-semibold text-gray-200 mb-3">
        👥 Who to Follow
      </h2>

      <div className="space-y-3">
        {["Ankit Dev", "Priya Sharma", "Rahul Singh"].map((user) => (
          <div key={user} className="flex justify-between items-center">
            <span className="text-gray-300">{user}</span>
            <button className="text-sm bg-green-600 text-black px-3 py-1 rounded hover:bg-green-500 transition">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoToFollow;
