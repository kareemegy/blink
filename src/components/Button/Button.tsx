import cn from "classnames";
interface ButtonProps {
  title: string;
  icon?: any;
  style?: "white" | "outline";
  className?: string;
  isDisabled?: boolean;
  handleClicked?: () => void;
}
const Button = ({ ...props }: ButtonProps) => {
  const { title, icon, style, className, handleClicked, isDisabled } = props;

  return (
    <button
      onClick={handleClicked}
      disabled={isDisabled}
      className={cn(
        "flex justify-center items-center  font-bold px-[30px] py-[13px] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed ",
        className,
        { "bg-white text-Gray1000": style === "white" },
        { "bg-gray-Gray50 text-white border": style === "outline" }
      )}
    >
      {title}
      {icon && icon}
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
