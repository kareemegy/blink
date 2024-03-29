import Header from "../../components/Header";
import Calendar from "../../assets/images/calendar.svg";
import Profile from "../../assets/images/Profile.png";
import Plane from "../../assets/images/plane.svg";
import Bed from "../../assets/images/bed.svg";
import Car from "../../assets/images/car.svg";
import Food from "../../assets/images/food.svg";
import Planed from "../../assets/images/planed.svg";
import SkyBox from "../../assets/images/skybox.svg";
import View from "../../assets/images/view.svg";
import { ReactComponent as ChevronRight } from "../../assets/images/Home Page/Chevron right.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Wrapper from "../../components/Wrapper/Wrapper";
import Button from "../../components/Button";
import RejectPopUp from "../../components/RejectModal";
// import RejectModal from "../../components/RejectModal";
const EventPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const title = "[Event Name]";
  const subtitle = `We cordially invite you to [Event Name] in [Location].
  Please read our Security Policy for further information`;

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const nextPage = () => {
    navigate("/info");
  };

  return (
    <div className="bg-black">
      <Header />
      <Wrapper>
        <PageHeader title={title} subtitle={subtitle} />
        <div className="flex flex-col  w-full px-5 md:px-14 py-10  bg-Gray900 md:bg-EventBg md:max-w-[838px]">
          <TripDetails />
          <Divider />
          <TripDates />
          <Divider />
          <Companions />
          <Divider />
          <Benefits />
          <Divider />
          <div className="flex flex-col lg:flex-row ">
            <Button
              title="Reject. I'm not available at this time"
              className="w-full lg:w-1/2 my-3 text-base md:mr-10  py-5 px-5 rounded whitespace-nowrap"
              style="outline"
              handleClicked={toggleModal}
              isHover
            />
            <Button
              className="w-full lg:w-1/2 my-3 text-base   py-5 px-5 rounded  whitespace-nowrap"
              title="Confirm trip and continue"
              style="white"
              icon={<ChevronRight className="stroke-black" />}
              handleClicked={nextPage}
            />
          </div>
          <ConfirmationMessage />
        </div>
      </Wrapper>
      <Footer />
      <RejectModal showModal={showModal} toggleModal={toggleModal} />
    </div>
  );
};
export default EventPage;
const TripDetails = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Trip Details</h1>
      <p className="text-Gray300 max-w-[400px]">
        Details about the trip, benefits, flight, accommodation and matches
        you’re invited to attend.
      </p>
    </div>
  );
};

const TripDates = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold mb-3">Trip Dates</h1>
        <div className="flex items-center">
          <img
            className="mr-1 w-[30px] h-[30px]"
            src={Calendar}
            alt=" calendar"
          />
          <p className=" max-w-[400px]"> Nov/20/2022 - Nov/25/2022</p>
        </div>
      </div>
    </div>
  );
};

const Companions = () => {
  const companions = [
    { name: "John Smith", img: Profile },
    { name: "Jane Doe", img: Profile },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Companions</h1>
      <div className="flex items-center flex-wrap max-sm:gap-7 ">
        {companions.map((_, i) => (
          <div key={i} className="flex mr-5 p-1 md:pl-0 ">
            <img
              className="mr-3 w-[40px] h-[50px]"
              src={Profile}
              alt=" profile_icon"
            />
            <div className="mr-1 ">
              <span className="text-gray-400">{i + 1}st </span>
              <p>Companion</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefitsList = [
    {
      icon: Plane,
      text: "Business Class Flight",
    },
    {
      icon: Bed,
      text: "Private Residence",
    },
    {
      icon: Car,
      text: "Dedicated Car",
    },
    {
      icon: Planed,
      text: "Planned Itinerary",
    },
    {
      icon: SkyBox,
      text: "Skybox Tickets",
    },
    {
      icon: View,
      text: "Exclusive Events",
    },
    {
      icon: Food,
      text: "Formal Dinners",
    },
  ];
  return (
    <>
      <h1 className="text-xl font-bold mb-7 ">Benefits</h1>
      <div>
        <div className="grid grid-cols-2 md:gap-y-5  md:flex md:flex-wrap">
          {benefitsList.map(({ icon, text }, index) => (
            <div
              className={`flex max-sm:mb-5  ${
                index < 3 ? "w-full md:w-1/3" : "w-full md:w-1/4"
              } p-1 pl-0`}
              key={index}
            >
              <img
                className="mr-1 w-[24px] h-[24px]"
                src={icon}
                alt=" profile_icon"
              />
              <div className="mr-1">
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ConfirmationMessage = () => {
  return (
    <p className="text-sm md:text-base text-Gray300 mt-7 md:text-center">
      By confirming your trip, your accommodation will be booked accordingly{" "}
    </p>
  );
};

type RejectModalProps = {
  showModal: boolean;
  toggleModal: () => void;
};

const RejectModal = ({ showModal, toggleModal }: RejectModalProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    textAreaRef.current?.focus();
  }, [showModal]);

  const handleSendFeedback = () => {
    toggleModal();
  };

  return (
    <RejectPopUp
      showModal={showModal}
      toggleModal={toggleModal}
      headerText="We’re sorry to hear that!"
      className="!transition-opacity !duration-500 !ease-in  "
    >
      <h3 className=" mb-4  text-DarkestWhite">
        Let us how we can make it work for you. Share your availability and you
        feedback with the organizers.
      </h3>
      <textarea
        ref={textAreaRef}
        className="bg-blinkDashboard h-[140px] rounded  border-2 border-DarkestWhite outline-none w-full p-4 resize-none placeholder:text-DarkestWhite"
        placeholder="Type details"
        name="reject-details"
      />
      <Button
        title="Send Your Feedback "
        style="white"
        className="w-full mt-[10px]  text-xl font-bold text-blinkDashboard whitespace-nowrap"
        handleClicked={handleSendFeedback}
      />
    </RejectPopUp>
  );
};

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={`my-7 md:my-10 border-b-1 max-w-3xl border-Gray50 md:border-Primary700 ${className}`}
    />
  );
};
