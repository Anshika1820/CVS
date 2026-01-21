import Navbar from "../components/Navbar";

const categories = [
  {
    title: "Web Security",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Bug Bounty",
    img: "/bigbounty.png",
  },
  {
    title: "Blue Team",
    img: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81",
  },
  {
    title: "Security Operation Center (SOC)",
    img: "/soc.jpeg",
  },
  {
    title: "Red Team",
    img: "/redteam.jpeg",
  }
];

const Categories = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 grid grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="border border-gray-800 rounded overflow-hidden hover:border-green-500"
          >
            <img src={cat.img} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{cat.title}</h2>
              <p className="text-sm text-gray-400 mt-1">
                Practical & defensive cyber security articles
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
