import Logo from "../../assets/images/Frame.svg";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`container mx-auto  flex justify-between items-center bg-black h-28 text-white ${className}`}
    >
      <img className="w-24 md:w-36 ml-6" src={Logo} alt="Blink Logo" />
      <p className="text-sm w-36 md:text-base pr-3">
        &copy; 2023 bl:nk&trade;. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
