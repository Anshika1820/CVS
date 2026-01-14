const categories = [
  "Web Security",
  "Network Security",
  "Bug Bounty",
  "SOC & Blue Team",
  "Malware Analysis",
  "Cyber Laws",
];

const Categories = () => {
  return (
    <section className="px-6 py-10 bg-gray-900">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Content Categories
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-4 py-2 border border-green-500 rounded text-green-400"
          >
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Categories;
