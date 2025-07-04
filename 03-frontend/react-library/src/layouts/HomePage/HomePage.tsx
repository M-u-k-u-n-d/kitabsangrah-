import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Carousel } from "./components/Carousel";
import Heros from "./components/Heros";
import LibraryServices from "./components/LibraryServices";
import { useEffect } from "react";


const HomePage = () => {
  return (
    <div>
      <ExploreTopBooks />
      <Carousel/>
      <Heros />
      <LibraryServices />
    </div>
  );
};

export default HomePage;
