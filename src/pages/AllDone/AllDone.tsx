import CopyRight from "../../components/CopyRight/CopyRight";
import Alldone from "../../assets/images/allDone.png";
import Check from "../../assets/images/check.svg";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
const AllDone = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container mx-auto relative">
        <Header className="absolute" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:auto-rows-[1fr] auto-rows-[2fr]">
        <div
          className=" flex justify-center items-center bg-cover bg-center max-sm:h-[450px] "
          style={{ backgroundImage: `url("${Alldone}")`}}
        ></div>
        <div className="flex flex-col items-center  bg-black text-white md:bg-none w-full md:mx-auto  ">
          <div className="flex flex-col justify-center mx-5 px-6 md:px-0 pb-3 h-[90%] w-full md:w-[350px] max-sm:text-center">
            <h1 className=" flex max-sm:justify-center mt-7 items-center font-bold text-2xl md:text-4xl leading-10 mb-3">
              <span> All Done!</span>
              <img
                className="ml-4 h-[30px] w-[30px]"
                src={Check}
                alt="check mark"
              />
            </h1>
            <p className="text-Gray200 md:text-Gray300 text-sm md:text-base leading-6 mt-4 mb-5">
              Thank you for confirming your trip details. We will reach out soon
              for further instructions to download the Guest application.
            </p>
            <p className="text-Gray200 md:text-Gray300 text-sm md:text-base leading-6 mt-4 mb-5">
              In the meantime, you can log back in to this dashboard to review
              your submission.
            </p>
            <Button
              title="Finish"
              className="w-full self-center mt-5 mb-5 md:hidden"
              style="white"
              handleClicked={nextPage}
            />
          </div>
          <CopyRight className="self-start ml-6 md:self-center md:mt-auto md:mb-5" />
        </div>
      </div>
    </>
  );
};
export default AllDone;
