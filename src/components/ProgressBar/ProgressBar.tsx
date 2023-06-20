import LGBar from "../../assets/images/lg-progressBar.svg";
import AllergiesBar from "../../assets/images/allergiesBar.svg";
interface ProgressBarProps {
  className?: string;
  type?: string;
}

const ProgressBar = ({ className, type }: ProgressBarProps) => {
  return (
    <div className={`container mx-auto my-6 ${className}`}>
      {type == "full" ? (
        <img src={AllergiesBar} alt="progress bar" className="w-full" />
      ) : (
        <img src={LGBar} alt="progress bar" className="w-full" />
      )}
    </div>
  );
};

export default ProgressBar;
