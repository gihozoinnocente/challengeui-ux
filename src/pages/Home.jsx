import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import shoppy from '../assets/Shiny Happy Morning Jog.png'

const Home = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="main"
    >
      <div className="pl-[25%] py-[10%] bg-[#F8F8F8]">
        <div className="flex ">
          <div className="text-black ">
            <h1 className="font-bold text-7xl py-4">Welcome,</h1>
            <h1 className="font-bold text-6xl "> Flex with us</h1>
             <p className="py-10 w-96">Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Et at fringilla id maecenas in
              scelerisque in. Pharetra, erat amet, vestibulum ullamcorper. </p> 
          </div>
          <div><img className=" h-72" src={shoppy} alt='Image' /></div>

        </div>
      </div>
    </section>
  );
};

export default Home;
