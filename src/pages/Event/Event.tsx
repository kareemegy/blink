import Header from "../../components/Header/Header";
import Calendar from "../../assets/images/calendar.svg";
import Profile from "../../assets/images/profile.svg";
import Plane from "../../assets/images/plane.svg";
import Bed from "../../assets/images/bed.svg";
import Car from "../../assets/images/car.svg";
import Food from "../../assets/images/food.svg";
import Planed from "../../assets/images/planed.svg";
import SkyBox from "../../assets/images/skybox.svg";
import View from "../../assets/images/view.svg";
import CloseBTN from "../../assets/images/Home Page/closeBTN.svg";
import LeftArrow from "../../assets/images/Home Page/left-arrow.svg";
import ChevronRight from "../../assets/images/Home Page/Chevron right.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Modal from "../../components/Modal/Modal";
const EventPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const title = "Event Name";
  const subtitle = `We cordially invite you to [Event Name] in [Location]. Please read our Security Policy for further information`;

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleContinue = () => {
    navigate("/info");
  };

  return (
    <>
      <Header />
      <div
        className={cn(
          " bg-black  flex flex-col justify-center items-center  text-white  ",
          { hidden: showModal }
        )}
      >
        <div className="container mx-auto mb-6 flex flex-col  items-center">
          <PageHeader title={title} subtitle={subtitle} />

          <div className="mt-7 bg-blinkDashboard  w-full  md:max-w-[830px]  mx-5 p-10">
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
              <button
                onClick={toggleModal}
                className="w-full mb-3 font-bold md:mb-0 mr-3 text-sm py-[18px] px-[15px] border-2 md:w-[50%]"
              >
                Reject. I'm not available at this time
              </button>
              <button
                onClick={handleContinue}
                className="flex items-center font-bold justify-center w-full mb-3 md:mb-0 text-sm text-black bg-white py-[18px] px-[15px] md:w-[50%]"
              >
                Confirm trip and continue
                <img src={ChevronRight} alt="ChevronRight" />
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <RejectModal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default EventPage;

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
    console.log(textAreaRef.current?.value);
  };

  return (
    <Modal
      showModal={showModal}
      toggleModal={toggleModal}
      headerText="We’re sorry to hear that!"
    >
      <h3 className="text-lg md:text-xl  mb-4 ml-9 md:ml-0">
        Let us how we can make it work for you. Share your availability and you
        feedback with the organizers.
      </h3>
      <textarea
        ref={textAreaRef}
        className="bg-blinkDashboard border-2 border-gray-600 outline-none w-full p-4 resize-none"
        placeholder="Type detials"
        name="reject-detials"
        cols={30}
        rows={10}
      />
      <button
        className="w-full mb-3 font-bold text-lg md:text-xl md:mb-0 mr-3  py-[18px] px-[15px] border-2 mt-3 bg-white text-blinkDashboard "
        onClick={handleSendFeedback}
      >
        Send Your Feedback
      </button>
    </Modal>
  );
};
// const RejectModal = ({ showModal, toggleModal }: SecurityPolicyModalProps) => {
//   const textAreaRef = useRef<HTMLTextAreaElement>(null);
//   useEffect(() => {
//     textAreaRef.current?.focus();
//   }, [showModal]);
//   return (
//     <>
//       <div
//         className={cn("absolute inset-0 bg-black z-20 h-screen w-screen  ", {
//           hidden: showModal,
//         })}
//       >
//         <span
//           className=" hidden md:block absolute top-10 right-10 cursor-pointer z-10 "
//           onClick={toggleModal}
//         >
//           <img src={CloseBTN} alt="close button" />
//         </span>
//         <div className=" fixed inset-0 flex items-center justify-center mx-3 max-sm:mx-0">
//           <div className="py-[52px] px-[46px] md:h-[570px] md:w-[730px]  text-white w-screen  h-screen md:bg-blinkDashboard ">
//             <div className="flex align-baseline">
//               <span className="mr-5 md:hidden" onClick={toggleModal}>
//                 <img className="" src={LeftArrow} alt="left Arrow" />
//               </span>
//               <h1 className="text-2xl md:text-4xl font-bold mb-4">
//                 We’re sorry to hear that!
//               </h1>
//             </div>
//             <h3 className="text-lg md:text-xl  mb-4 ml-9 md:ml- 0">
//               Let us how we can make it work for you. Share your availability
//               and you feedback with the organizers.
//             </h3>
//             <textarea
//               ref={textAreaRef}
//               className="bg-blinkDashboard border-2 border-gray-600 outline-none w-full p-4 resize-none"
//               placeholder="Type detials"
//               name="reject-detials"
//               cols={30}
//               rows={10}
//             />
//             <button className="w-full mb-3 font-bold text-lg md:text-xl md:mb-0 mr-3  py-[18px] px-[15px] border-2 mt-3 bg-white text-blinkDashboard ">
//               Send Your Feedback
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
