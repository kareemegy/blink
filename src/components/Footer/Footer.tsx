import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Frame.svg";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <footer
      className={`container mx-auto mt-10  flex justify-between items-center bg-black h-28 text-white ${className} `}
    >
      <img
        className="w-[100px] md:w-[150px] ml-6"
        src={Logo}
        alt="Blink Logo"
        onClick={handleGoHome}
      />
      <p className="text-sm max-sm:w-36 md:text-base pr-3">
        Copyright © 2023 bl:nk™. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
