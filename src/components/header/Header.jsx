import ColorPlate from "../../utils/ColorPlate";
import SocialIcons from "../../utils/SocialIcons";
import "./Header.css";
import img1 from "../../assets/Asset 2.jpeg";
import { PiHeadsetFill } from "react-icons/pi";
import { HiMail } from "react-icons/hi";
import { FiDownloadCloud } from "react-icons/fi";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div>
      <div className=" headerBackground w-full lg:h-[455px] bg-black relative border border-transparent pl-[21%]">
        <div className="absolute right-0 top-[80px]">
          <ColorPlate />
        </div>

        <div className="flex justify-end items-center absolute right-0 top-[150px]">
          <SocialIcons />
        </div>

        <div className="absolute top-[86px]  ml-[-80px]">
          <Menu />
        </div>

        <div className="w-full h-full border-b flex gap-[38px] mt-[86px]">
          <div className="border-8 border-white w-[347px] h-[467px]">
            <img src={img1} alt="" className="w-full h-full" />
          </div>

          <div className=" mt-[62px] flex flex-col justify-between">
            <div className="text-white">
              <h1 className="text-[63px] font-[900] leading-[60px]">
                Stella Maria
              </h1>
              <p className="text-[23px] font-[500]">
                Chief Product Officer at Porto Themes
              </p>

              <p className="mt-[30px] text-[15px] font-[500] flex flex-col  gap-2">
                <span>GREATER NEW YORK AREA</span>
                <span>INFORMATION TECHNOLOGY & SERVICES</span>
                <span>PREVIOUS: FRONT-END DEVELOPER AT PORTO</span>
                <span>EDUCATION: PORTO SCHOOL</span>
              </p>
            </div>

            <div className="flex items-center gap-[50px] mb-6">
              <button>
                <div className="flex items-center gap-2">
                  <PiHeadsetFill className="text-[33px] text-purple" />
                  <p className="text-[19px] text-[#000]">Contact Information</p>
                </div>
              </button>

              <button>
                <div className="flex items-center gap-2">
                  <HiMail className="text-[33px] text-purple" />
                  <p className="text-[19px] text-[#000]">Send Message</p>
                </div>
              </button>

              <button>
                <div className="flex items-center gap-2">
                  <FiDownloadCloud className="text-[33px] text-purple" />
                  <p className="text-[19px] text-[#000]">Download Resume</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
