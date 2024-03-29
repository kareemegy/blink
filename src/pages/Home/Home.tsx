import Logo from "../../assets/images/logo.png";
import GDBDeskTopImage from "../../assets/images/Home Page/GDB-desktop-main-LD.png";
import GDBMobileImage from "../../assets/images/GDB_mobile_main_D.png";
import { ReactComponent as ChervronRight } from "../../assets/images/Home Page/Chevron right.svg";
import leftArrow from "../../assets/images/Home Page/left-arrow.svg";
import { useState } from "react";
import Button from "../../components/Button/Button";
import CopyRight from "../../components/CopyRight/CopyRight";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const nextPage = () => {
    navigate("/event");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:auto-rows-[1fr] auto-rows-[2fr]">
      <div
        className={`flex justify-center items-center bg-cover bg-center max-md:h-[67vh]`}
        style={{
          backgroundImage: `url(${
            window.innerWidth >= 768
              ? `'${GDBDeskTopImage}'`
              : `'${GDBMobileImage}'`
          })`,
        }}
      >
        <img className="hidden sm:block" src={Logo} alt="Blink_Logo" />
        <div className="sm:hidden min-[452px]:hidden  flex w-full h-full justify-start items-end px-5  ">
          <h1 className=" font-bold text-2xl md:text-4xl  text-white   leading-10 ">
            Hey [Mr. Bond],
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center bg-black  text-white w-full">
        <div className="flex flex-col justify-start md:justify-center mx-5  md:px-0  h-full  md:w-[350px]">
          <h1 className=" hidden  min-[452px]:block font-bold text-2xl md:text-4xl leading-10 mb-3">
            Hey [Mr. Bond],
          </h1>

          <div className="hidden md:block ">
            <EventMessage toggleModal={toggleModal} />
          </div>
          <div className="mt-2  md:hidden">
            <MobileMessage />
          </div>
          <Button
            title="Continue"
            icon={<ChervronRight className="stroke-black" />}
            style="white"
            handleClicked={nextPage}
            className="py-[18px] px-[138px] my-10"
          />
          <CopyRight className="w-full self-start  md:hidden mb-6" />
        </div>
        <CopyRight className=" hidden md:block self-start  md:self-center mb-5 md:mt-auto md:mb-10" />
      </div>
      <SecurityPolicyModal showModal={showModal} toggleModal={toggleModal} />
    </div>
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
        className=" mt-4 text-sm md:text-base underline cursor-pointer font-bold"
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
    <Modal
      showModal={showModal}
      toggleModal={toggleModal}
      headerText="Security Policy"
      icon={leftArrow}
      className="max-md:!bg-black"
    >
      <h3 className="text-lg  md:text-xl  mb-4 font-bold">
        Malesuada Pulvinar Elementum, Ultrices Mi
      </h3>
      <p className=" md:overflow-y-scroll pr-5 text-sm text-GraySecondary md:h-[280px] scrollbar-style h-[500px]">
        Adipiscing mauris lectus enim nullam. Scelerisque congue proin cursus
        eget. Dui ornare vitae, netus sed ultricies. Integer imperdiet nunc eget
        duis diam risus. Lobortis tincidunt nunc, lobortis non. Ut tempor, dui
        in imperdiet netus nisl nibh pulvinar curabitur. Amet augue in vitae ut
        ultrices eu. Ut malesuada facilisis arcu id. Dictum vestibulum, at ut
        arcu, erat. Ipsum libero, massa vitae egestas volutpat, lacus at mauris.
        Mauris urna proin posuere purus sed feugiat massa. Purus turpis
        malesuada volutpat eget scelerisque odio at blandit cras. Senectus
        ullamcorper nibh quis metus, dolor vitae, nunc, felis. A diam dis sed
        vitae commodo. Tortor, nec commodo, sit sed donec. Ullamcorper sit
        integer amet egestas ac, risus tortor. Aliquam, sed enim ligula odio
        felis venenatis. Sapien quis vulputate id iaculis viverra. Risus
        maecenas neque sagittis habitasse vitae in tristique. Adipiscing
        pharetra tincidunt varius nulla vestibulum odio mauris vitae. Aliquam ac
        turpis aliquam vestibulum lacinia leo vestibulum eget libero. Pharetra,
        sagittis ut egestas erat cursus libero, vulputate magna et. Purus auctor
        at dictumst leo erat mi nascetur feugiat. Fringilla interdum massa neque
        pretium luctus id feugiat cras nibh. Turpis lectus ornare sed faucibus
        aliquam sit amet. Nunc sagittis vitae hendrerit massa pellentesque
        felis. Nunc vel sagittis purus amet nec velit netus. Lacus ornare elit
        senectus cursus. Tristique a volutpat laoreet amet morbi arcu metus,
        ultrices. Non turpis massa enim massa justo massa est. Posuere at
        pretium nunc pharetra dui. Scelerisque felis gravida eleifend hac turpis
        sem nibh id et.
      </p>
    </Modal>
  );
};
