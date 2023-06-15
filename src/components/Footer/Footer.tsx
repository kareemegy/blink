import Logo from "../../assets/images/Frame.svg";
interface FooterProps {
  className?: string;
}
const Footer = ({ className }: FooterProps) => {
  return (
    <div
      className={`container mx-auto md:hidden flex justify-between items-center bg-black h-28 text-white ${className} `}
    >
      <img
        className="w-[100px] md:w-[150px] ml-6 "
        src={Logo}
        alt="Blink Logo"
      />
      <p className="text-sm w-[150px] pr-3 md:text-base  ">
        Copyright © 2023 bl:nk™. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
