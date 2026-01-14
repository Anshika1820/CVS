const AuthorCard = () => {
  return (
    <section className="px-6 py-12 bg-gray-900">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Contributor Profile Example
      </h3>

      <div className="max-w-sm mx-auto border border-gray-700 p-6 rounded">
        <h4 className="text-lg font-bold text-green-400">
          John Doe
        </h4>
        <p className="text-gray-400 text-sm mt-2">
          Cyber Security Researcher | Bug Bounty Hunter
        </p>
        <p className="mt-3 text-sm">
          🏷️ Contributor at Codevirus Security
        </p>
      </div>
    </section>
  );
};

export default AuthorCard;
