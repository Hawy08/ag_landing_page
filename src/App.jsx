import Hero from "./Components/Hero";
import Uniqueness from "./Components/Uniqueness";
import BlogsFeatures from "./Components/blogsFeatures";

function App() {
  return (
    <div className=" flex justify-center items-center flex-col">
      <Hero />
      <Uniqueness/>
      <BlogsFeatures/>
    </div>
  );
}

export default App;
