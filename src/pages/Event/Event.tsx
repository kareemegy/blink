import Header from "../../components/Header";
import Calendar from "../../assets/images/calendar.svg";
import Profile from "../../assets/images/Profile.svg";
import Plane from "../../assets/images/plane.svg";
import Bed from "../../assets/images/bed.svg";
import Car from "../../assets/images/car.svg";
import Food from "../../assets/images/food.svg";
import Planed from "../../assets/images/planed.svg";
import SkyBox from "../../assets/images/skybox.svg";
import View from "../../assets/images/view.svg";
import ChevronRight from "../../assets/images/Home Page/Chevron right.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

const EventPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const title = "[Event Name]";
  const subtitle = `We cordially invite you to [Event Name] in [Location]. Please read our Security Policy for further information`;

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const nextPage = () => {
    navigate("/info");
  };

  return (
    <>
      <Header />
      <div className={cn(" bg-black  text-white", { hidden: showModal })}>
        <div className="container mx-auto flex flex-col justify-start  items-center max-w-3xl">
          <PageHeader title={title} subtitle={subtitle} />
          <div className="flex flex-col  w-full px-5 md:px-14 py-10  bg-Gray900 md:bg-EventBg md:max-w-[838px]  ">
            <TripDetails />
            <hr className="my-7 md:my-10 border-b-1  max-w-3xl border-Gray50  md:border-Primary700" />
            <TripDates />
            <hr className="my-7 md:my-10 border-b-1  max-w-3xl border-Gray50 md:border-Primary700" />
            <Companions />
            <hr className="my-7 md:my-10 border-b-1  max-w-3xl border-Gray50 md:border-Primary700" />
            <Benefits />
            <hr className="my-7 md:my-10 border-b-1  max-w-3xl border-Gray50 md:border-Primary700" />
            <div className="flex flex-col lg:flex-row gap-3">
              <Button
                title="Reject. I'm not available at this time"
                className="w-full lg:w-1/2 my-3 text-sm md:text-base  font-bold py-5 px-5 rounded"
                style="outline"
                handleClicked={toggleModal}
              />
              <Button
                className="w-full lg:w-1/2 my-3 text-sm md:text-base  font-bold py-5 px-5 rounded"
                title="Confirm trip and continue"
                style="white"
                icon={ChevronRight}
                handleClicked={nextPage}
              />
            </div>
            <ConfirmationMessage />
          </div>
          <Footer />
        </div>
      </div>
      <RejectModal showModal={showModal} toggleModal={toggleModal} />
    </>
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
      <div className="flex items-center flex-wrap ">
        {companions.map((_, i) => (
          <div key={i} className="flex mr-5 p-1 md:pl-0 ">
            <img
              className="mr-1 w-[50px] h-[50px]"
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
      icon: Food,
      text: "Formal Dinners",
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
  ];
  return (
    <>
      <h1 className="text-xl font-bold mb-3 ">Benefits</h1>
      <div>
        <div className="flex flex-wrap">
          {benefitsList.map((benefit, index) => (
            <div className="flex mr-5 p-1 pl-0" key={index}>
              <img
                className="mr-1 w-[24px] h-[24px]"
                src={benefit.icon}
                alt=" profile_icon"
              />
              <div className="mr-1">
                <p>{benefit.text}</p>
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
  const textAreaRef = useRef<any>(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, [showModal]);

  const handleSendFeedback = () => {
    console.log(textAreaRef.current?.value);
  };

  return (
    <Modal
      showModal={showModal}
      toggleModal={toggleModal}
      headerText="We’re sorry to hear that!"
      className="md:w-[530px]"
    >
      <h3 className=" mb-4  text-DarkestWhite">
        Let us how we can make it work for you. Share your availability and you
        feedback with the organizers.
      </h3>
      <textarea
        ref={textAreaRef}
        className="bg-blinkDashboard border-2 border-DarkestWhite outline-none w-full p-4 resize-none placeholder:text-DarkestWhite"
        placeholder="Type details"
        name="reject-details"
        cols={30}
        rows={10}
      />
      <Button
        title=" Send Your Feedback "
        style="white"
        className="w-full mt-[30px] mb-[40px] text-xl font-bold text-blinkDashboard "
        handleClicked={handleSendFeedback}
      />
    </Modal>
  );
};
