import { Navbar } from "./../components/navbar";
import Carousel from "./../components/carousel";
import Main from "@/components/main";
import Footer from "@/components/footer";
import Content from "@/components/content";


const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Content mb={3}  />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
