import "./App.css";
import Results from "./components/Results";
import Stepper from "./components/Stepper";
import { useStore } from "./store/zustand";
import { ParticlesBackground } from "./components/ParticlesBackground";
import RoadmapSkeleton from "./components/RoadmapSkeleton";
import Roadmap from "./components/RoadMap";

function App() {
  // const showResults = true;
  const showResults = useStore((state) => state.showResults);
  return (
    <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900 via-black to-violet-900 flex ">
      <ParticlesBackground />
      <div className="  text-white mx-auto relative z-10 overflow-scrol">
        {!showResults && (
          <main className="h-screen grid place-content-center">
            <header className="">
              <h1 className="bg-gradient-to-r from-blue-300 to-purple-700  bg-clip-text  font-extrabold text-transparent drop-shadow-2xl text-center tracking-wide text-6xl lg:text-9xl">
                Path Finder
              </h1>
              <p className="relative text-2xl font-medium text-center text-gray-300 mb-10">
                Your passion, your path. Explore career options now.
              </p>
            </header>
            <Stepper />
          </main>
        )}
        {showResults && <Results />}
      </div>
      {/* <RoadmapSkeleton /> */}
      {/* <Roadmap /> */}
    </div>
  );
}

export default App;

