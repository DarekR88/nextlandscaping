import Image from "next/image";
import bigyardImg from "../../public/images/bigyardpink.jpg";
import stonesImg from "../../public/images/stones.jpg";
import vertwalkImg from "../../public/images/verticlewalk.jpg";
import wetleafImg from "../../public/images/leaves.jpg";
import classicImg from "../../public/images/classicfront.jpg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px] lg:mt-0">
          <h2 className="mb-4 text-5xl text-center font-Playfair">
            <span className="text-[#dda15e]">F</span>LOREO
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
        <div className="lg:h-[50px] m-auto overflow-hidden mb-[50px]">
          <Image src={wetleafImg} alt="indoor" />
        </div>
      </div>

      <h2 className="text-center text-5xl font-Playfair lg:mb-4">
        <span className="text-[#dda15e]">O</span>ur Pro
        <span className="text-[#dda15e]">c</span>ess
      </h2>
      <div className="flex lg:flex-row lg:max-w-[1200px] m-auto gap-7">
        <div className="lg:max-w-[590px]">
          <Image src={classicImg} alt="classic" />
        </div>
        <p className="lg:max-w-[590px] lg:text-xl font-Lato">
          At Floreo, we excel in achieving the impossible. No challenge is too
          immense for our seasoned team of experts. Share your most ambitious
          projects with us, and let Floreo bring your dreams to life. Whether
          your project is grand in scale or requires intricate attention to
          detail, rest assured, we have the expertise to handle it with finesse.
          We can accomplish anything in terms of construction, but we specialize
          in landscaping, outdoor construction, and creating captivating pools
          and water features.
        </p>
      </div>
    </main>
  );
}
