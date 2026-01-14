import Navbar from "../components/Navbar";
import FeedCard from "../components/FeedCard";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Ask from "../components/Ask";
import TrendingQuestions from "../components/TrendingQuestions";
import PopularTopics from "../components/PopularTopics";
import WhoToFollow from "../components/WhoToFollow";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-6 px-6 py-6 bg-black text-white">

        {/* LEFT SIDEBAR */}
        <div className="col-span-3 space-y-6">
          <Ask />
          <PopularTopics />
          <TrendingQuestions />
        </div>

        {/* FEED */}
        <div className="col-span-6 space-y-4">
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3 space-y-6">
          <Sidebar />
          <WhoToFollow />
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-green-500 mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Home;
