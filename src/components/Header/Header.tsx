import Bill from "../../assets/images/bill.svg";
import BillSm from "../../assets/images/BillSM.svg";
import SignOutIcon from "../../assets/images/signOut-icon.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Frame.svg";
import Button from "../Button/Button";
interface HeaderProps {
  className?: string;
  bg?: string;
}
const Header = ({ className, bg }: HeaderProps) => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  const handleGoNotification = () => {
    navigate("/notification");
  };
  return (
    <div className={`bg-black ${bg}`}>
      {/* max-[768px]:px-5  */}
      <header
        className={`${className} container mx-auto grid grid-cols-2  pt-5 `}
      >
        <div className=" ml-6">
          <img
            onClick={handleGoHome}
            className="w-[100px] md:w-[150px] cursor-pointer "
            src={Logo}
            alt="BLink Logo"
          />
        </div>
        <div className="flex justify-end  ">
          <div className=" flex justify-center  items-center border-2 border-white w-[40px] h-[40px] mr-3 md:hidden">
            <img
              className=" w-[20px] h-[20px]   "
              src={BillSm}
              alt="Bill Notification"
              onClick={handleGoNotification}
            />
          </div>
          <img
            className="mr-3  hidden  md:block w-[50px] h-[50px]  cursor-pointer "
            src={Bill}
            alt="Bill Notification"
            onClick={handleGoNotification}
          />
          <Button
            title=" Sign Out"
            style="outline"
            className="hidden md:mr-6  md:block text-white border-2 px-[30px] py-[5px]"
          />
          <button className="md:hidden mr-3">
            <img
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]  "
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
