import Header from "./Header";
import Nav from "./Nav";
import Testimonials from "./Testimonials";
import Benefits from "./Benefits";
import Editor from "./Editor";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Testimonials />
      <Benefits />
      <Editor />
      <Footer />
    </div>
  );
}

export default Home;
