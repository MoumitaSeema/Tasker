import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import TaskBoard from "./task/TaskBoard";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
};

export default App;
