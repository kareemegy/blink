import cn from "classnames";
import { CSSProperties } from "react";

const Home = () => {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage:
      'url("src/assets/images/Home Page/GDB-desktop-main-LD.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="grid grid-cols-2 h-screen max-sm:grid-cols-1 max-sm:grid-rows-1 ">
        <div
          className="flex justify-center items-center  "
          style={backgroundImageStyle}
        >
          <img
            className="max-sm:hidden"
            src="src/assets/images/Home Page/logo.png"
            alt="Blink_Logo"
          />
        </div>
        <div
          className={cn(
            "flex justify-center items-center bg-black max-[996px]:bg-none text-white max-sm:items-end",
            {}
          )}
        >
          <div className="px-6 max-[996px]:px-0 max-[996px]:mx-auto max-[996px]:max-w-md max-sm:pb-3   ">
            <h1 className="font-bold text-4xl max-[996px]:text-2xl  leading-10">
              Hey [Mr. Bond],
            </h1>
            <p className="text-gray-400 text-2xl max-[996px]:text-lg  mt-4 leading-6">
              We cordially invite you to [Event Name] in [Location].{" "}
            </p>
            <p className="text-gray-400 text-2xl max-[996px]:text-lg  mt-4 leading-6">
              Please RSVP and register to confirm your attendance.
            </p>
            <p className="mt-4 text-2xl underline">Read our security policy.</p>
            <button className="flex justify-center items-center mt-5 font-bold text-2xl max-[996px]:text-lg  bg-white text-gray-800 px-7 py-5 rounded-sm w-full ">
              Continue{" "}
              <span className="pl-4 pt-2">
                {" "}
                <img
                  src="src/assets/images/Home Page/Chevron right.svg"
                  alt="Chevron right"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
