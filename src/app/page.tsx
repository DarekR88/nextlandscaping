import Image from "next/image";
import bigyardImg from "../../public/images/bigyardpink.jpg";
import stonesImg from "../../public/images/stones.jpg";
import vertwalkImg from "../../public/images/verticlewalk.jpg";
import wetleafImg from "../../public/images/leaves.jpg";
import classicImg from "../../public/images/classicfront.jpg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 max-w-[1200px] m-auto mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px] lg:mt-0">
          <h2 className="mb-3 text-4xl text-center font-Playfair">
            <span className="text-[#dda15e]">M</span>ISSION
          </h2>
          <p className="font-Montserrat text-l">
            Welcome to Floreo, where outdoor dreams come to life. From luxurious
            outdoor kitchens to charming gazebos and everything in between, our
            expert team is dedicated to crafting stunning outdoor spaces that
            exceed your expectations. Whether you&#39;re envisioning a cozy backyard
            retreat or an expansive garden oasis, we have the knowledge,
            experience, and creativity to bring your vision to fruition.
          </p>
        </div>
        <div className="flex flex-row lg:w-[750px] lg:h-[275px] h-[180px] overflow-hidden m-auto mb-3 lg:mb-0 lg:gap-4">
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={bigyardImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={vertwalkImg} alt="weights" />
          </div>
          <div className="lg:w-[225px] w-1/3 overflow-hidden">
            <Image src={stonesImg} alt="weights" />
          </div>
        </div>
      </div>

      <div>
        <div className="h-[15px] m-auto overflow-hidden mb-[50px]">
          <Image src={wetleafImg} alt="indoor" />
        </div>
      </div>

      <h2 className="text-center text-5xl font-Playfair lg:mb-4 mb-3">
        <span className="text-[#dda15e]">O</span>ur Pro
        <span className="text-[#dda15e]">c</span>ess
      </h2>
      <div className="flex lg:flex-row flex-col lg:max-w-[1200px] m-auto lg:gap-7">
        <div className="lg:max-w-[590px]">
          <Image src={classicImg} alt="classic" />
        </div>
        <p className="lg:max-w-[590px] lg:text-l lg:px-0 px-[15px] font-Montserrat">
          At Floreo, we thrive on surpassing expectations, turning dreams into
          reality with finesse and expertise. Our seasoned team of experts
          fearlessly tackles even the most daunting challenges, ensuring that no
          project is too grand or intricate for us to handle. While we excel in
          accomplishing the impossible across all realms of construction, our
          true specialty lies in landscaping, outdoor construction, and the
          creation of captivating pools and water features. From grand-scale
          projects to those demanding meticulous attention to detail, Floreo
          brings unparalleled skill and passion to every endeavor. Entrust us
          with your most ambitious visions, and watch as we transform them into
          breathtaking reality.
        </p>
      </div>
    </main>
  );
}
