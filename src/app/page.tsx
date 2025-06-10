import NavBar from "./components/NavBar";
import SliderBanner from "./components/SliderBanner";
import ShopifyBanner from "./components/ShopifyBanner";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <SliderBanner />
      <ShopifyBanner />
      <Carousel />
    </div>
  );
}
