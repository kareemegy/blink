import Logo from "../../assets/images/Home Page/logo.png";
import GDBImage from "../../assets/images/Home Page/GDB-desktop-main-LD.png";
import ChervronRight from "../../assets/images/Home Page/Chevron right.svg";

const Home = () => {
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
          <div className="flex flex-col justify-center mx-5 px-6 md:px-0 pb-3 h-[90%]">
            <h1 className="font-bold text-2xl md:text-4xl leading-10">
              Hey [Mr. Bond],
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl leading-6 mt-4">
              We cordially invite you to [Event Name] in [Location].
            </p>
            <p className="text-gray-400 text-lg md:text-2xl leading-6 mt-4">
              Please RSVP and register to confirm your attendance.
            </p>
            <p className="mt-4 text-lg md:text-2xl underline">
              Read our security policy.
            </p>
            <button className="flex justify-center max-w-[550px] items-center mt-5 font-bold text-lg md:text-2xl bg-white text-gray-800 px-7 py-5 rounded-sm ">
              Continue{" "}
              <span className="pl-4">
                <img
                  className="text-sm"
                  src={ChervronRight}
                  alt="Chevron right"
                />
              </span>
            </button>
          </div>
          <div>
            <p className="mt-1 text-xs md:text-base">
              Copyright © 2023 bl:nk™. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
