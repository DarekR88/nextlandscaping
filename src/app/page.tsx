import Image from "next/image";
import bigyardImg from "../../public/images/bigyardpink.jpg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[120px] mb-[50px]">
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl text-center">
            ABOUT <span className="text-button-primary">US</span>
          </h2>
          <p>
            Welcome to Floreo, where outdoor dreams come to life. From luxurious
            outdoor kitchens to charming gazebos and everything in between, our
            expert team is dedicated to crafting stunning outdoor spaces that
            exceed your expectations. Whether you're envisioning a cozy backyard
            retreat or an expansive garden oasis, we have the knowledge,
            experience, and creativity to bring your vision to fruition. With
            Floreo, your outdoor paradise awaits
          </p>
        </div>
        <div className="relative lg:w-[750px] lg:h-[350px] overflow-hidden">
          <Image
            src={bigyardImg}
            alt="weights"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </main>
  );
}
