import Header from "../../components/Header/Header";
import LeftArrow from "../../assets/images/Home Page/left-arrow.svg";
import Calendar from "../../assets/images/calendar.svg";
import Profile from "../../assets/images/profile.svg";
import Plane from "../../assets/images/plane.svg";
import Bed from "../../assets/images/bed.svg";
import Car from "../../assets/images/car.svg";
import Food from "../../assets/images/food.svg";
import Planed from "../../assets/images/planed.svg";
import SkyBox from "../../assets/images/skybox.svg";
import View from "../../assets/images/view.svg";
import ChevronRight from "../../assets/images/Home Page/Chevron right.svg";
import { useNavigate } from "react-router-dom";
const EventPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Header />
      <div className="">
        <div className=" bg-black  flex flex-col justify-center items-center  text-white ">
          <div className="container mx-auto flex flex-col  items-center">
            <div className="mt-7 mx-5">
              <div className="ml-3 flex cursor-pointer" onClick={handleGoBack}>
                <img src={LeftArrow} alt="Left_Arrow" />
                <h1 className="ml-3 text-base md:text-3xl">[Event Name]</h1>
              </div>
              <div className="ml-7 my-3">
                <p className="text-sm md:text-base text-gray-400">
                  We cordially invite you to [Event Name] in [Location].
                </p>
                <p className="text-sm md:text-base mt-4 text-gray-400">
                  Please review the details of your date and confirm your
                  availability below.
                </p>
              </div>
            </div>

            <div className="mt-7 bg-blinkDashboard rounded-md w-full md:max-w-[830px]  mx-5 p-10">
              <div>
                <h1 className="text-2xl font-bold mb-3">Trip Details</h1>
                <p className="text-gray-400 max-w-[400px]">
                  Details about the trip, benefits, flight, accommodation and
                  matches you’re invited to attend.
                </p>
              </div>
              <hr className="my-10 border-b-1  max-w-3xl border-black" />
              <div>
                <div>
                  <h1 className="text-xl font-bold mb-3">Trip Dates</h1>
                  <div className="flex items-center">
                    <img
                      className="mr-1 w-[30px] h-[30px]"
                      src={Calendar}
                      alt=" calendar"
                    />

                    <p className="text-gray-400 max-w-[400px]">
                      {" "}
                      Nov/20/2022 - Nov/25/2022
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-10 border-b-1  max-w-3xl border-black" />
              <div>
                <h1 className="text-xl font-bold mb-3">Companions</h1>
                <div className="flex items-center flex-wrap ">
                  <div className="flex mr-5 p-1 ">
                    <img
                      className="mr-1 w-[50px] h-[50px]"
                      src={Profile}
                      alt=" profile_icon"
                    />
                    <div className="mr-1">
                      <span className="text-gray-400">1st </span>
                      <p>Companion</p>
                    </div>
                  </div>
                  <div className="flex p-1 ">
                    <img
                      className="mr-1 w-[50px] h-[50px]"
                      src={Profile}
                      alt="profile_icon"
                    />
                    <div className="mr-1">
                      <span className="text-gray-400">2st </span>
                      <p>Companion</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-10 border-b-1  max-w-3xl border-black" />
              <h1 className="text-xl font-bold mb-3">Benefits</h1>
              <div>
                <div className="flex flex-wrap">
                  <div className="flex mr-5 p-1 ">
                    <img
                      className="mr-1 w-[24px] h-[24px]"
                      src={Plane}
                      alt=" profile_icon"
                    />
                    <div className="mr-1">
                      <p className="text-gray-400">Business Class Flight </p>
                    </div>
                  </div>
                  <div className="flex mr-5 p-1 ">
                    <img
                      className="mr-1 w-[24px] h-[24px]"
                      src={Bed}
                      alt=" profile_icon"
                    />
                    <div className="mr-1">
                      <p className="text-gray-400">Private Residence </p>
                    </div>
                  </div>
                  <div className="flex mr-5 p-1 ">
                    <img
                      className="mr-1 w-[24px] h-[24px]"
                      src={Car}
                      alt=" profile_icon"
                    />
                    <div className="mr-1">
                      <p className="text-gray-400">Dedicated Car</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex mr-5 p-1 ">
                  <img
                    className="mr-1 w-[24px] h-[24px]"
                    src={Food}
                    alt=" profile_icon"
                  />
                  <div className="mr-1">
                    <p className="text-gray-400">Formal Dinners </p>
                  </div>
                </div>
                <div className="flex mr-5 p-1 ">
                  <img
                    className="mr-1 w-[24px] h-[24px]"
                    src={Planed}
                    alt=" profile_icon"
                  />
                  <div className="mr-1">
                    <p className="text-gray-400">Planned Itinerary </p>
                  </div>
                </div>
                <div className="flex mr-5 p-1 ">
                  <img
                    className="mr-1 w-[24px] h-[24px]"
                    src={SkyBox}
                    alt=" profile_icon"
                  />
                  <div className="mr-1">
                    <p className="text-gray-400">Skybox Tickets</p>
                  </div>
                </div>
                <div className="flex mr-5 p-1 ">
                  <img
                    className="mr-1 w-[24px] h-[24px]"
                    src={View}
                    alt=" profile_icon"
                  />
                  <div className="mr-1">
                    <p className="text-gray-400">Exclusive Events </p>
                  </div>
                </div>
              </div>
              <hr className="my-10 border-b-1  max-w-3xl border-black" />
              <div className="max-sm:flex-col md:flex  p-1">
                <button className="w-full mb-3 md:mb-0 mr-3 text-sm py-[18px] px-[15px] border-2 md:w-[50%]">
                  Reject. I'm not available at this time
                </button>
                <button className="flex items-center justify-center w-full mb-3 md:mb-0 text-sm text-black bg-white py-[18px] px-[15px] md:w-[50%]">
                  Confirm trip and continue
                  <img src={ChevronRight} alt="ChevronRight" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
