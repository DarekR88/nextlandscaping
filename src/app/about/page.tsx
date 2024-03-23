import Image from "next/image";
import wetleafImg from "../../../public/images/wetleaf.jpg";
import phoneSVG from "../../../public/icons/phone-svgrepo-com.svg";
import emailSVG from "../../../public/icons/mail.svg";
import blueflowImg from "../../../public/images/blueflow.jpg";

export default function Contact() {
  return (
    <main className="font-Montserrat">
      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[80px] mb-[50px]">
        <div className="lg:w-[750px] lg:h-[350px] overflow-hidden mb-[20px]">
          <Image src={blueflowImg} alt="weights" />
        </div>
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl font-Playfair text-center">
            A<span className="text-[#dda15e]">B</span>OUT
          </h2>
          <p className="text-center lg:text-left mb-[15px]">
            At Floreo Landscaping and Design, we don&#39;t just build outdoor
            spaces; we craft experiences. With a passion for innovation and an
            unwavering commitment to quality, we transform ordinary landscapes
            into extraordinary havens. Our team of skilled artisans combines the
            artistry of landscaping with the precision of construction to bring
            dreams to life. From lush gardens to tranquil water features, from
            elegant wooden structures to inviting outdoor living areas, each
            project is a testament to our dedication to excellence. With Floreo,
            your outdoor oasis awaits, ready to inspire and delight for years to
            come.
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-[1200px] m-auto lg:mb-[120px] mb-[50px] px-[20px]">
        <h2 className="mb-4 text-5xl font-Playfair text-center">
          <span className="text-[#dda15e]">DEDICATED</span> TO SUPPORT
        </h2>
        <p className="text-center text-xl font-Montserrat">
          At Floreo, our commitment doesn&#39;t end once the job is complete. We
          believe in providing ongoing support to ensure your landscaping
          investment receives the care it deserves. Our dedication extends
          beyond the initial project, as we offer tailored care plans to
          maintain and enhance the beauty of your outdoor space. With Floreo,
          you can trust that your landscape will flourish long after the
          installation is finished, as we remain devoted to preserving and
          nurturing the results of our work.
        </p>
      </div>
    </main>
  );
}
