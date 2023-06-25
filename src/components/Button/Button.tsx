import cn from "classnames";
import React from "react";
import { useState } from "react";
interface ButtonProps {
  title: string;
  icon?: any;
  style: "white" | "outline";
  className?: string;
  isDisabled?: boolean;
  handleClicked?: () => void;
  isHover?: boolean;
}
const Button = ({ ...props }: ButtonProps) => {
  const { title, icon, style, className, handleClicked, isDisabled, isHover } =
    props;
  const [isHovering, setIsHovering] = useState(false);
  const whiteStyleClasses = {
    "bg-white text-Gray1000": !isHover,
    " bg-white text-Gray1000 hover:bg-black hover:text-white": isHover,
  };

  const outlineStyleClasses = {
    "bg-bg-gray-Gray50 text-white border-2": !isHover,
    "bg-bg-gray-Gray50 text-white border-2 hover:bg-white hover:text-black":
      isHover,
  };
  const iconClasses = {
    "stroke-white": style === "white" && isHovering,
    "stroke-black": style === "outline" && isHovering,
  };
  const styleClasses =
    style === "white" ? whiteStyleClasses : outlineStyleClasses;

  return (
    <button
      onClick={handleClicked}
      disabled={isDisabled}
      className={cn(
        "flex justify-center items-center  font-extrabold px-[30px] py-[13px] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all ease-in ",
        className,
        styleClasses
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {title}
      {icon && (
        <span>
          {React.cloneElement(icon, {
            className: cn(icon.props.className, iconClasses),
          })}
        </span>
      )}
    </button>
  );
};

export default Button;
