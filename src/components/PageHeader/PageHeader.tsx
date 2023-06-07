import LeftArrow from "../../assets/images/Home Page/left-arrow.svg";
import { useNavigate } from "react-router-dom";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};
const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto mt-7 flex justify-center">
      <div className="flex flex-col items-baseline md:items-start ">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleGoBack}
        >
          <img className="w-[13px] h-[26px]" src={LeftArrow} alt="Left_Arrow" />
          <h1 className="ml-3 text-3xl text-white">{title}</h1>
        </div>
        <div className="mt-3 ml-7">
          <p className="md:max-w-[700px] text-base text-gray300 ">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
