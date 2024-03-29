import { ReactComponent as ChervronRight } from "../../assets/images/Home Page/Chevron right.svg";
import Button from "../../components/Button/Button";
import CopyRight from "../../components/CopyRight/CopyRight";
import { useNavigate } from "react-router-dom";
import FoodBG from "../../assets/images/food-choices.png";
import Bar from "../../assets/images/bar.svg";
import Header from "../../components/Header/Header";
const FoodChoices = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/preferences");
  };
  const goToAllDone = () => {
    navigate("/alldone");
  };
  return (
    <>
      <div className="relative container mx-auto ">
        <Header className="absolute top-0 left-0" bg="!bg-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:auto-rows-[1fr] auto-rows-[2fr]">
        <div
          className="flex justify-center items-center bg-cover bg-center max-sm:h-[50vh] "
          style={{ backgroundImage: `url("${FoodBG}")` }}
        ></div>
        <div className="flex flex-col items-center  bg-black text-white md:bg-none w-full md:mx-auto">
          <div className="flex flex-col justify-center mx-5 px-6 md:px-0 pb-3 h-[90%] w-full md:w-[350px]">
            <h1 className="font-bold text-2xl md:text-4xl  leading-10 mb-3 max-sm:mt-3">
              Food Choices
            </h1>
            <EventMessage />
            <img className="md:hidden" src={Bar} alt="progress bar" />
            <Button
              title="Skip, I have no preference"
              style="outline"
              handleClicked={goToAllDone}
              className="py-[18px] px-[138px] my-5"
              isHover
            />
            <Button
              title="Continue"
              icon={<ChervronRight className="stroke-black" />}
              style="white"
              handleClicked={nextPage}
              className="py-[18px] px-[138px] mb-3 "
            />
          </div>
          <CopyRight className="self-start ml-6 md:self-center md:mt-auto md:mb-10 mt-10 mb-10  " />
        </div>
      </div>
    </>
  );
};

const EventMessage = () => {
  return (
    <>
      <p className="text-Gray200 md:text-Gray300 text-sm md:text-base leading-6 mt-4 mb-5 md:mb-10">
        At this upcoming event, food will be likely served. Please take a few
        seconds to let us know if you have any food preferences or allergies
      </p>
    </>
  );
};

export default FoodChoices;
