import { useNavigate } from "react-router-dom";
import cn from "classnames";
interface ButtonProps {
  title: string;
  icon?: string;
  style?: "white" | "outline";
  className?: string;
  nextPage: string;
}
const Button = ({ ...props }: ButtonProps) => {
  const { title, icon, style, className, nextPage } = props;
  const navigate = useNavigate();
  const next = (pageName: string) => {
    navigate(`/${pageName}`);
  };
  return (
    <button
      onClick={() => next(nextPage)}
      className={cn(
        "flex justify-center items-center  font-bold md:text-lg  px-[30px] py-[13px] rounded-sm ",
        className,
        { "bg-white text-Gray1000": style === "white" },
        { "bg-gray-Gray50 text-white border": style === "outline" }
      )}
    >
      {title}
      <Icon icon={icon} alt={title} />
    </button>
  );
};

export default Button;
interface IconProps {
  icon?: string;
  alt?: string;
}
const Icon = ({ icon, alt }: IconProps) => {
  if (!icon) return null;
  return <img className="text-sm pl-4" src={icon} alt={alt} />;
};
