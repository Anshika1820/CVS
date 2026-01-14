import Navbar from "../components/Navbar";

const contributors = [
  {
    name: "Rahul Sharma",
    role: "Bug Bounty Hunter",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Ankit Verma",
    role: "SOC Analyst",
    img: "https://i.pravatar.cc/150?img=32",
  },
];

const Contributors = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 grid grid-cols-4 gap-6">
        {contributors.map((user) => (
          <div
            key={user.name}
            className="border border-gray-800 rounded p-4 text-center"
          >
            <img
              src={user.img}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-400">{user.role}</p>
            <span className="text-xs text-green-400 mt-2 inline-block">
              Contributor at Codevirus Security
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contributors;
