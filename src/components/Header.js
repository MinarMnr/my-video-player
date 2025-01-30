import Image from "next/image";
import EdutubeLogo from "../../public/edutubeLogo.png";

const Header = () => {
  return (
    <div className="absolute w-[174px] h-[46px] left-[79px] top-[18px]">
      <Image src={EdutubeLogo} alt="LogoImage" loading="lazy" />
    </div>
  );
};

export default Header;
