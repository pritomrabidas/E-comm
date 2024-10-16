import Image from "next/image";
import Banner from "./Component/Home/banner";
import BestSeller from "./Component/Home/bestSeller";
import Sneakers from "./Component/Home/Sneakers";
import LatestFeatured from "./Component/Home/latestFeatured";

export default function Home() {
  return (
    <div >
      <Banner/>
      <BestSeller/>
      <Sneakers/>
      <LatestFeatured/>
    </div>
  );
}
