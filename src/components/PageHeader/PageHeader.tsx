import {ReactComponent as LeftArrow} from "../../assets/images/Home Page/left-arrow.svg";
import { useNavigate } from "react-router-dom";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  info?: string;
};
const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={`flex flex-col max-[768px]:px-5 mt-7 max-md:px-5 md:mx-0  items-baseline md:items-start ${className} md:w-full max-md:mr-0  lg:mr-[50px]  `}
    >
      <div className="flex items-center cursor-pointer" onClick={handleGoBack}>
        {/* <img className="w-[13px] h-[26px]" src={LeftArrow} alt="Left_Arrow" /> */}
        <LeftArrow  className="w-[13px] h-[26px]  " />
        <h1 className="ml-3 text-2xl md:text-3xl text-white font-bold">
          {title}
        </h1>
      </div>
      <div className="mt-3 md:ml-7 mb-8  ">
        <p className=" text-sm md:text-base text-Gray200 ">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
