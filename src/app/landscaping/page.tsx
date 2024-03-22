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
import purpleImg from "../../../public/images/purple.jpg";

export default function Landscaping() {
  return (
    <main>
      <div className="mb-[50px]">
        <h2 className="text-center text-5xl font-Playfair lg:mb-4 mb-3">
          <span className="text-[#dda15e]">L</span>ands
          <span className="text-[#dda15e]">c</span>aping
        </h2>
        <div className="flex lg:flex-row flex-col lg:max-w-[1200px] m-auto lg:gap-7">
          <div className="lg:max-w-[590px]">
            <Image src={wildImg} alt="classic" />
          </div>
          <p className="lg:max-w-[590px] lg:text-l lg:px-0 px-[15px] font-Montserrat">
            Crafting luxurious outdoor spaces is an art that transcends mere
            aesthetics; it's a symphony of artistry, functionality, and
            environmental stewardship. At our firm, we specialize in seamlessly
            integrating natural elements with hardscape features, meticulously
            planning water features, and curating plant selections that thrive
            in the local climate. With an unwavering commitment to excellence
            and sustainability, we navigate the complexities of site
            preparation, water management, and project coordination to deliver
            bespoke landscapes that redefine outdoor living with unparalleled
            luxury and sophistication.
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
            Landscaping<span className="text-[#dda15e]">+</span>
          </h2>
          <p className="font-Montserrat text-l">
            At Floreo, our integrated approach to landscaping and construction
            sets us apart. With our in-house contracting capabilities, we
            seamlessly blend artistry and precision to create luxurious outdoor
            spaces. From custom pergolas to elegant stone pathways, our
            expertise ensures every detail is meticulously crafted for both
            beauty and durability. Experience the Floreo difference, where
            superior landscaping meets expert construction for exceptional
            outdoor living.
          </p>
        </div>
        <div className="flex flex-row lg:w-[750px] lg:h-[275px] h-[180px] overflow-hidden m-auto mb-3 lg:mb-0 lg:gap-4">
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={blossomsImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={alotImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={purpleImg} alt="weights" />
          </div>
        </div>
      </div>
    </main>
  );
}
