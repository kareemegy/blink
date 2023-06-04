import Header from "../../components/Header/Header";
import LeftArrow from "../../assets/images/Home Page/left-arrow.svg";
const EventPage = () => {
  return (
    <>
      <Header />
      <div className="bg-black">
        <div className="  flex flex-col justify-center items-center  text-white ">
          <div className="mt-7">
            <div className="flex">
              <img src={LeftArrow} alt="Left_Arrow" />
              <h1 className="ml-3 text-base md:text-3xl">[Event Name]</h1>
            </div>
            <div className="ml-7 my-3">
              <p className="text-base text-gray-500">
                We cordially invite you to [Event Name] in [Location].
              </p>
              <p className="text-base text-gray-500">
                Please review the details of your date and confirm your
                availability below.
              </p>
            </div>
          </div>

          <div className="bg-blinkDashboard"></div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
