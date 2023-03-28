/* 
import Login from '@/components/login';

const Home = () => {
  return (
   <Login />
  );
};

export default Home;



import Main from '@/components/main';
import Navbar from '@/components/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      
    </>
  );
};

export default Home;

*/

import { Navbar } from "./../components/navbar";
import Carousel from "./../components/carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      *<Carousel />
    </>
  );
};

export default Home;
