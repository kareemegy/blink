import Logo from "../../assets/images/logo.png";
import GDBImage from "../../assets/images/Home Page/GDB-desktop-main-LD.png";
import ChervronRight from "../../assets/images/Home Page/Chevron right.svg";
import closeBTN from "../../assets/images/Home Page/closeBTN.svg";
import leftArrow from "../../assets/images/Home Page/left-arrow.svg";
import { useState } from "react";
import cn from "classnames";
import "./sytle.css";
import Button from "../../components/Button/Button";
import CopyRight from "../../components/CopyRight/CopyRight";
const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen grid-rows-1 ">
        <div
          className="flex justify-center items-center bg-cover bg-center "
          style={{ backgroundImage: `url("${GDBImage}")` }}
        >
          <img className="hidden sm:block" src={Logo} alt="Blink_Logo" />
        </div>
        <div className="flex flex-col items-center  bg-black text-white md:bg-none w-full md:mx-auto">
          <div className="flex flex-col justify-center mx-5 px-6 md:px-0 pb-3 h-[90%] w-full md:w-[350px]">
            <h1 className="font-bold text-2xl md:text-4xl  leading-10 mb-3">
              Hey [Mr. Bond],
            </h1>
            <div className="hidden md:block">
              <EventMessage toggleModal={toggleModal} />
            </div>
            <div className="md:hidden">
              <MobileMessage />
            </div>
            <Button
              title="Continue"
              icon={ChervronRight}
              style="white"
              nextPage="event"
              className="py-[18px] px-[138px] my-10"
            />
            <CopyRight className="text-start" />
          </div>
        </div>
      </div>
      <SecurityPolicyModal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};
interface EventMessage {
  toggleModal: () => void;
}

const EventMessage = ({ toggleModal }: EventMessage) => {
  return (
    <>
      <p className="text-Gray200 md:text-Gray300 text-sm md:text-base leading-6 mt-4">
        We cordially invite you to [Event Name] in [Location].
      </p>
      <p className="text-Gray200 md:text-Gray300 text-sm md:text-base leading-6 mt-4 ">
        Please RSVP and register to confirm your attendance.
      </p>
      <p
        className=" mt-4 text-sm md:text-base underline cursor-pointer"
        onClick={toggleModal}
      >
        Read our security policy.
      </p>
    </>
  );
};

const MobileMessage = () => {
  return (
    <>
      <p className="text-sm text-Gray200">
        Welcome to bl:nk Doha Retreat 2022, we kindly ask you to register and
        follow the steps below to finish sigining up to our service
      </p>
    </>
  );
};

export default Home;
type SecurityPolicyModalProps = {
  showModal: boolean;
  toggleModal: () => void;
};

const SecurityPolicyModal = ({
  showModal,
  toggleModal,
}: SecurityPolicyModalProps) => {
  return (
    <>
      <div
        className={cn("absolute inset-0 bg-black z-20 h-screen w-screen  ", {
          hidden: showModal,
        })}
      >
        <span
          className=" hidden md:block absolute top-10 right-10 cursor-pointer z-10 "
          onClick={toggleModal}
        >
          <img src={closeBTN} alt="close button" />
        </span>
        <div className="fixed inset-0 flex items-center justify-center mx-3 max-sm:mx-0">
          <div className="py-[52px] px-[46px] md:h-[485px] md:w-[730px]  text-white w-screen  h-screen md:bg-blinkDashboard ">
            <div className="flex align-baseline">
              <span className="mr-5 md:hidden" onClick={toggleModal}>
                <img className="" src={leftArrow} alt="left Arrow" />
              </span>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Security Policy
              </h1>
            </div>
            <h3 className="text-lg md:text-xl  mb-4">
              Malesuada Pulvinar Elementum, Ultrices Mi
            </h3>
            <p className="overflow-y-scroll pr-5 text-base md:h-[280px] scrollbar-style h-[500px]">
              adipiscing mauris lectus enim nullam. Scelerisque congue proin
              cursus eget. Dui ornare vitae, netus sed ultricies. Integer
              imperdiet nunc eget duis diam risus. Lobortis tincidunt nunc,
              lobortis non. Ut tempor, dui in imperdiet netus nisl nibh pulvinar
              curabitur. Amet augue in vitae ut ultrices eu. Ut malesuada
              facilisis arcu id. Dictum vestibulum, at ut arcu, erat. Ipsum
              libero, massa vitae egestas volutpat, lacus at mauris. Mauris urna
              proin posuere purus sed feugiat massa. Purus turpis malesuada
              volutpat eget scelerisque odio at blandit cras. Senectus
              ullamcorper nibh quis metus, dolor vitae, nunc, felis. A diam dis
              sed vitae commodo. Tortor, nec commodo, sit sed donec. Ullamcorper
              sit integer amet egestas ac, risus tortor. Aliquam, sed enim
              ligula odio felis venenatis. Sapien quis vulputate id iaculis
              viverra. Risus maecenas neque sagittis habitasse vitae in
              tristique. Adipiscing pharetra tincidunt varius nulla vestibulum
              odio mauris vitae. Aliquam ac turpis aliquam vestibulum lacinia
              leo vestibulum eget libero. Pharetra, sagittis ut egestas erat
              cursus libero, vulputate magna et. Purus auctor at dictumst leo
              erat mi nascetur feugiat. Fringilla interdum massa neque pretium
              luctus id feugiat cras nibh. Turpis lectus ornare sed faucibus
              aliquam sit amet. Nunc sagittis vitae hendrerit massa pellentesque
              felis. Nunc vel sagittis purus amet nec velit netus. Lacus ornare
              elit senectus cursus. Tristique a volutpat laoreet amet morbi arcu
              metus, ultrices. Non turpis massa enim massa justo massa est.
              Posuere at pretium nunc pharetra dui. Scelerisque felis gravida
              eleifend hac turpis sem nibh id et. cursus libero, vulputate magna
              et. Purus auctor at dictumst leo erat mi nascetur feugiat.
              Fringilla interdum massa neque pretium luctus id feugiat cras
              nibh. Turpis lectus ornare sed faucibus aliquam sit amet. Nunc
              sagittis vitae hendrerit massa pellentesque felis. Nunc vel
              sagittis purus amet nec velit netus. Lacus ornare elit senectus
              cursus. Tristique a volutpat laoreet amet morbi arcu metus,
              ultrices. Non turpis massa enim massa justo massa est. Posuere at
              pretium nunc pharetra dui. Scelerisque felis gravida eleifend hac
              turpis sem nibh id et. Posuere at pretium nunc pharetra dui.
              Scelerisque felis gravida eleifend hac turpis sem nibh id et.
              cursus libero, vulputate magna et. Purus auctor at dictumst leo
              erat mi nascetur feugiat. Fringilla interdum massa neque pretium
              luctus id feugiat cras nibh. Turpis lectus ornare sed faucibus
              aliquam sit amet. Nunc sagittis vitae hendrerit massa pellentesque
              felis. Nunc vel sagittis purus amet nec velit netus. Lacus ornare
              elit senectus cursus. Tristique a volutpat laoreet amet morbi arcu
              metus, ultrices. Non turpis massa enim massa justo massa est.
              Posuere at pretium nunc pharetra dui. Scelerisque felis gravida
              eleifend hac turpis sem nibh id et.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
