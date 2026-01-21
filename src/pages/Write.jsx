import Navbar from "../components/Navbar";

const Write = () => {
  return (
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Submit Cyber Security Article
        </h2>

        <div className="mb-4 text-sm text-red-400">
          ⚠️ Auto publish disabled. Every article is reviewed manually.
        </div>

        <input
          className="w-full mb-3 p-2 bg-gray-900 border border-gray-700 rounded"
          placeholder="Article Title"
        />

        <select className="w-full mb-4 p-2 bg-gray-900 border border-gray-700 rounded">
          <option>Select Category</option>
          <option>SOC</option>
          <option>Bug Bounty</option>
          <option>Blue Team</option>
          <option>Red Team</option>
          <option>Any latest technology/option>                 
        </select>

        <textarea
          rows="10"
          className="w-full mb-3 p-2 bg-gray-900 border border-gray-700 rounded"
          placeholder="Write your article here (800+ words preferred)"
        />

        <button className="bg-green-500 text-black px-6 py-2 rounded ">
          Submit for Review
        </button>
      </div>
  );
};

export default Write;
