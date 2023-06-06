import Logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="container md:hidden flex justify-between items-center bg-black h-28 ">
      <img className=" w-[200px]  " src={Logo} alt="Blink Logo" />
      <p className="text-sm w-[200px] ">
        Copyright © 2022 bl:nk™. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
