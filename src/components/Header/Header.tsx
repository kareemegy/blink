import Bill from "../../assets/images/bill.svg";
import SignOutIcon from "../../assets/images/signOut-icon.svg";
import { useNavigate } from "react-router-dom";
import Frame from "../../assets/images/Frame.svg";
const Header = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className=" bg-black ">
      <header className="container mx-auto grid grid-cols-2  items-center pt-5 ">
        <div
          className="cursor-pointer ml-3 pl-[20px] md:pl-0 "
          onClick={handleGoHome}
        >
          <img
            className=" w-[100px] md:w-[150px] "
            src={Frame}
            alt="BLink Logo"
          />
        </div>
        <div className="flex justify-end">
          <img
            className="mr-3 w-[40px] h-[40px] md:w-[50px] md:h-[50px] "
            src={Bill}
            alt="Bill Notification"
          />
          <button className="hidden md:block text-white border-2 px-[30px] py-[12px]">
            Sign Out
          </button>
          <button className="md:hidden mr-3">
            <img
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] "
              src={SignOutIcon}
              alt="Bill Notification"
            />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
