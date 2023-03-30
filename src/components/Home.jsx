import Header from "./Header";
import AboutUs from "./AboutUs";
import Voyages from "./Voyages";
import Services from "./Services";
import Partners from "./Partners";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <Header></Header>

      <AboutUs></AboutUs>
      <Voyages></Voyages>
      <Services></Services>
      <Partners></Partners>
    </>
  );
}

export default Home;
