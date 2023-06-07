import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/images/Home Page/left-arrow.svg";
import Header from "../../components/Header/Header";
const Info = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="
    bg-black h-[9000px]"
    >
      <Header />
      <div className="container flex justify-center  mt-7 mx-auto ">
        <div>
          <div className=" flex  cursor-pointer" onClick={handleGoBack}>
            <img src={LeftArrow} alt="Left_Arrow" />
            <h1 className="ml-3 text-base md:text-3xl text-white">
              Personal Info
            </h1>
          </div>
          <div className="ml-7 my-3">
            <p className="text-sm md:text-base text-gray-400">
              We cordially invite you to [Event Name] in [Location].
            </p>
            <p className="text-sm md:text-base mt-1 text-gray-400">
              Please review the details of your date and confirm your
              availability below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
