import Image from "next/image";
import bigyardImg from "../../../public/images/bigyardpink.jpg";
import stonesImg from "../../../public/images/stones.jpg";
import vertwalkImg from "../../../public/images/verticlewalk.jpg";
import wetleafImg from "../../../public/images/leaves.jpg";
import classicImg from "../../../public/images/classicfront.jpg";
import retainingwallImg from "../../../public/images/retainingwall.jpg";
import whitehouseImg from "../../../public/images/whitehouse.jpg";
import wildImg from "../../../public/images/wild.jpg";
import alotImg from "../../../public/images/alot.jpg";
import blossomsImg from "../../../public/images/blossoms.jpg";
import patioImg from "../../../public/images/patiokitch.jpg";
import fwhiteImg from "../../../public/images/fancywhite.jpg";
import fblackImg from "../../../public/images/fancyblack.jpg";
import tallbushImg from "../../../public/images/tallbush.jpg";

export default function Landscaping() {
  return (
    <main>
      <div className="mb-[50px]">
        <h2 className="text-center text-5xl font-Playfair lg:mb-4 mb-3">
          Desi
          <span className="text-[#dda15e]">g</span>n
        </h2>
        <div className="flex lg:flex-row flex-col lg:max-w-[1200px] m-auto lg:gap-7">
          <div className="lg:max-w-[590px]">
            <Image src={patioImg} alt="classic" />
          </div>
          <p className="lg:max-w-[590px] lg:text-l lg:px-0 px-[15px] font-Montserrat">
            At Floreo, we are dedicated to crafting extraordinary outdoor spaces
            that seamlessly blend functionality, beauty, and innovation.
            Specializing in wooden structures, pools, and water features, our
            team brings decades of expertise to every project. From bespoke
            decks, pergolas, and gazebos that elevate outdoor living to stunning
            pools and water features that transform landscapes into luxurious
            retreats, Floreo's skilled craftsmen bring visions to life with
            precision and artistry. We take pride in our commitment to quality
            craftsmanship, attention to detail, and customer satisfaction.
            Whether you're envisioning a tranquil oasis or an entertainer's
            paradise, trust Floreo to create outdoor spaces that exceed your
            expectations and enrich your lifestyle.
          </p>
        </div>
      </div>

      <div>
        <div className="h-[15px] m-auto overflow-hidden mb-[50px]">
          <Image src={wetleafImg} alt="indoor" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 max-w-[1200px] m-auto mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px] lg:mt-0">
          <h2 className="mb-3 text-4xl text-center font-Playfair">
            Design<span className="text-[#dda15e]">+</span>
          </h2>
          <p className="font-Montserrat text-l">
            Our company's dual expertise in outdoor construction and landscaping
            offers clients a seamless blend of architectural precision and
            natural beauty. By combining these disciplines, we create cohesive
            outdoor spaces that marry structural elements with lush greenery,
            water features, and hardscape elements. This integrated approach
            ensures not only aesthetic appeal but also maximizes functionality,
            durability, and sustainability. From custom outdoor structures to
            meticulously curated landscapes, our combined expertise delivers
            exceptional results that exceed expectations and enhance outdoor
            living experiences.
          </p>
        </div>
        <div className="flex flex-row lg:w-[750px] lg:h-[260px] h-[180px] overflow-hidden m-auto mb-3 lg:mb-0 lg:gap-4">
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={fwhiteImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={tallbushImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={fblackImg} alt="weights" />
          </div>
        </div>
      </div>
    </main>
  );
}
