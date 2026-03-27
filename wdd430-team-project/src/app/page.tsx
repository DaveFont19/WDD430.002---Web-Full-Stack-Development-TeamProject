import Image from "next/image";
import FeatureProducts from "./ui/featured-products";

export default function Home() {
  return (
    <div >
      <div className="hero-container">
        <Image
          src="/hero-desktop.png"
          width={1920}
          height={500}
          className="hero-desktop"
          alt="Close-up of a local artisan's hands carefully crafting a unique handmade product in a traditional workshop setting."
        />
        <Image
          src="/hero-mobile.png"
          width={800}
          height={600}
          className="hero-mobile"
          alt="Close-up of a local artisan's hands carefully crafting a unique handmade product in a traditional workshop setting."
        />
      </div>
      <FeatureProducts />
    </div>
  );
}
