import facebook from "../assets/facebook.svg";
import twitter from "../assets/twiter.svg";
import youtube from "../assets/youtube.svg";

const SocialIcons = () => {
  return (
    <div className="flex justify-center">
      <section className="w-[45px] h-[156px] bg-white flex flex-col items-center justify-evenly rounded-s-[7px] ">
        <button>
          <img src={facebook} alt="" className="w-[24px] h-[24px]" />
        </button>
        <div className="w-full h-[2px] bg-black bg-opacity-[20%]"></div>
        <button>
          <img src={twitter} alt="" className="w-[24px] h-[24px]" />
        </button>
        <div className="w-full h-[2px] bg-black bg-opacity-[20%]"></div>
        <button>
          <img src={youtube} alt="" className="w-[24px] h-[24px]" />
        </button>
      </section>
    </div>
  );
};

export default SocialIcons;
