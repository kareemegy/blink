
import classnames from "classnames";
import React, { useState } from "react";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  style: "white" | "outline";
  className?: string;
  isDisabled?: boolean;
  handleClicked?: () => void;
}

const Button = ({
  title,
  icon,
  style,
  className,
  isDisabled,
  handleClicked,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonClassName = classnames(
    "flex justify-center items-center font-extrabold px-[30px] py-[13px] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all ease-in",
    className,
    {
      "bg-white text-Gray1000 border-2 hover:bg-black hover:text-white hover:border-white":
        style === "white",
    },
    {
      "bg-gray-Gray50 text-white border-2 hover:bg-white hover:text-black hover:border-black":
        style === "outline",
    }
  );

  const iconClassName = classnames(
    (icon as React.ReactElement).props.className,
    {
      "stroke-black": style === "white" && !isHovered,
      "stroke-white": style === "outline" && !isHovered,
      "stroke-white hover:stroke-black": style === "white" && isHovered,
      "stroke-black hover:stroke-white": style === "outline" && isHovered,
    }
  );

  return (
    <button
      onClick={handleClicked}
      disabled={isDisabled}
      className={buttonClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          className: iconClassName,
        })}
    </button>
  );
};

export default Button;
