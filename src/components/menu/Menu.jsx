import { HiHome, HiMail } from "react-icons/hi";
import { PiEyeBold } from "react-icons/pi";
import { CgBriefcase } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { IoDiamondSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { useState } from "react";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  const datas = [
    {
      icon: <HiHome />,
    },
    {
      icon: <PiEyeBold />,
    },
    {
      icon: <CgBriefcase />,
    },
    {
      icon: <LuGraduationCap />,
    },
    {
      icon: <IoDiamondSharp />,
    },
    {
      icon: <FaPen />,
    },
    {
      icon: <RiChat3Line />,
    },
    {
      icon: <HiMail />,
    },
  ];

  return (
    <div>
      <section>
        {datas.map((data, index) => (
          <div
            key={index}
            onClick={() => handleActive(index)}
            className={`${
              activeIndex === index
                ? "text-purple bg-white scale-[1.02]"
                : "text-white bg-purple"
            } w-[61px] h-[61px] text-[26px]  border-b border-black flex justify-center items-center transform duration-300 `}
          >
            {data.icon}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Menu;
