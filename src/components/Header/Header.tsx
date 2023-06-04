import Logo from "../../assets/images/logo.png";
import Bill from "../../assets/images/bill.svg";
import SignOutIcon from "../../assets/images/signOut-icon.svg";

const Header = () => {
  return (
    <header className="flex justify-around items-center  bg-black">
    <div className="w-[50%]">
      <img className="w-[300px]" src={Logo} alt="BLink Logo" />
    </div>
    <div className="flex items-center py-3">
      <span className="mr-3">
        <img src={Bill} alt="Bill Notification" />
      </span>
      <button className="hidden md:block text-white border-2 px-[30px] py-[12px]">
        Sign Out
      </button>
      <button className="md:hidden mr-3">
        <img
          className="h-[50px] w-[50px]"
          src={SignOutIcon}
          alt="Bill Notification"
        />
      </button>
    </div>
  </header>
  )
}

export default Header
