import Image from "next/image";
import wetleafImg from "../../../public/images/wetleaf.jpg";
import phoneSVG from "../../../public/icons/phone-svgrepo-com.svg";
import emailSVG from "../../../public/icons/mail.svg";

export default function Contact() {
  return (
    <main className="font-Montserrat">
      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[80px] mb-[50px]">
        <div className="lg:w-[750px] lg:h-[350px] overflow-hidden mb-[20px]">
          <Image src={wetleafImg} alt="weights" />
        </div>
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl font-Playfair text-center">
          <span className="text-[#dda15e]">C</span>ONTACT
          </h2>
          <p className="text-center lg:text-left mb-[15px]">
            We're eager to hear from you! Whether you're ready to discuss your
            next landscaping project or simply have a question for our team,
            don't hesitate to reach out. Contact us today to schedule a
            consultation and let us bring your outdoor dreams to life.
          </p>
          <p className="text-center mb-[15px]">
            Hours of Operation: 9:00am - 9:00pm
          </p>

          <div className="flex flex-col gap-4 lg:flex-row m-auto lg:gap-10">
            <div>
              <a
                href="tel:408-761-4606"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-center"
              >
                <Image
                  src={phoneSVG}
                  alt="pfp"
                  width={23}
                  className="mr-[5px]"
                />
                <span>Call or Text</span>
              </a>
              <a
                href="tel:408-761-4606"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-center"
              >
                <span>&#40;408&#41;-761-4606</span>
              </a>
            </div>
            <div>
              <a
                href="tel:408-761-4606"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-center"
              >
                <Image
                  src={emailSVG}
                  alt="pfp"
                  width={23}
                  className="mr-[5px]"
                />
                <span>E-mail</span>
              </a>
              <a
                href="tel:408-761-4606"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-center"
              >
                <span>FloreoMail@Gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-[1200px] m-auto lg:mb-[120px] mb-[50px] px-[20px]">
        <h2 className="mb-4 text-5xl font-Playfair text-center">
        <span className="text-[#dda15e]">DEDICATED</span> TO SUPPORT
        </h2>
        <p className="text-center text-xl font-Montserrat">
          At Floreo, our commitment doesn't end once the job is complete. We
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
