import LGBar from "../../assets/images/lg-progressBar.svg";

interface ProgressBarProps {
  className?: string;
}

const ProgressBar = ({ className }: ProgressBarProps) => {
  return (
    <div className="container mx-auto my-6 ">
      <img
        className={` ml-3 h-4 " src={LGBar} alt="progress Bar ${className}`}
        src={LGBar}
      />
    </div>
  );
};

export default ProgressBar;
