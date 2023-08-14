import { IoMdColorPalette } from "react-icons/io";

const ColorPlate = () => {
  const circleStyle = "w-[35px] h-[35px] rounded-full border-2 border-white";

  return (
    <div className="flex items-center gap-[20px]">
      <div className="flex gap-[15px]">
        <div className={`${circleStyle} bg-purple`}></div>
        <div className={`${circleStyle} bg-yellow-500`}></div>
        <div className={`${circleStyle} bg-purple`}></div>
      </div>
      <div className="w-[46px] h-[45px] rounded-s-[23px] bg-white flex justify-center items-center">
        <IoMdColorPalette className="text-[30px] text-purple" />
      </div>
    </div>
  );
};

export default ColorPlate;
