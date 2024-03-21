import Image from "next/image";
import bigyardImg from "../../public/images/bigyardpink.jpg";
import stonesImg from "../../public/images/stones.jpg";
import vertwalkImg from "../../public/images/verticlewalk.jpg";
import wetleafImg from "../../public/images/leaves.jpg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px] lg:mt-0">
          <h2 className="mb-4 text-5xl text-center font-Playfair">
             <span className="text-button-primary text-[#dda15e]">A</span>BOUT US
          </h2>
          <p className="font-Lato text-xl">
            Welcome to Floreo, where outdoor dreams come to life. From luxurious
            outdoor kitchens to charming gazebos and everything in between, our
            expert team is dedicated to crafting stunning outdoor spaces that
            exceed your expectations. Whether you're envisioning a cozy backyard
            retreat or an expansive garden oasis, we have the knowledge,
            experience, and creativity to bring your vision to fruition.
          </p>
        </div>
        <div className="flex flex-row lg:w-[750px] lg:h-[275px] overflow-hidden m-auto lg:gap-4">
          <div className="lg:w-[225px] overflow-hidden">
            <Image src={bigyardImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] overflow-hidden">
            <Image src={vertwalkImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] overflow-hidden">
            <Image src={stonesImg} alt="weights" />
          </div>
        </div>
      </div>

      <div>
        <div className="lg:h-[100px] m-auto overflow-hidden">
          <Image src={wetleafImg} alt="indoor" />
        </div>

      </div>
    </main>
  );
}
