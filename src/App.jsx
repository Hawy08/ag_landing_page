import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import Uniqueness from "./Components/Uniqueness";
import BlogsFeatures from "./Components/blogsFeatures";

function App() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Hero />
      <Uniqueness/>
      <BlogsFeatures/>
      <Testimonials/>
      <Footer/>
      
    </div>
  );
}

export default App;
