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
      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-12 
        gap-4 
        md:gap-6 
        px-3 
        md:px-6 
        py-4 
        md:py-6 
        bg-black 
        text-white
        overflow-x-hidden
      ">

        {/* LEFT SIDEBAR */}
        <div className="
          col-span-12 
          md:col-span-4 
          lg:col-span-3 
          space-y-6
        ">
          <Ask />
          <PopularTopics />
          <TrendingQuestions />
        </div>

        {/* FEED */}
        <div className="
          col-span-12 
          md:col-span-8 
          lg:col-span-6 
          space-y-4
        ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="
          hidden 
          lg:block 
          lg:col-span-3 
          space-y-6
        ">
          <Sidebar />
          <WhoToFollow />
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-green-500">
        <Footer />
      </div>
    </>
  );
};

export default Home;
