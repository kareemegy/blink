// import cn from "classnames";
// import React from 'react';
// interface ButtonProps {
//   title: string;
//   icon?: any;
//   style: "white" | "outline";
//   className?: string;
//   isDisabled?: boolean;
//   handleClicked?: () => void;
// }
// const Button = ({ ...props }: ButtonProps) => {
//   const { title, icon, style, className, handleClicked, isDisabled } = props;

//   return (
//     <button
//       onClick={handleClicked}
//       disabled={isDisabled}
//       className={cn(
//         "flex justify-center items-center  font-extrabold px-[30px] py-[13px] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all ease-in ",
//         className,
//         {
//           "bg-white text-Gray1000 border-2   hover:bg-black hover:text-white hover:border-white  ":
//             style === "white",
//         },
//         {
//           "bg-gray-Gray50 text-white border-2   hover:bg-white hover:text-black hover:border-black  ":
//             style === "outline",
//         }
//       )}
//     >
//       {title}
//       {/* {icon && icon} */}
//       {icon && React.cloneElement(icon as React.ReactElement, {
//         className: cn(
//           (icon as React.ReactElement).props.className,
//           {
//             "stroke-black": style === "white",
//             "stroke-white": style === "outline",
//           },
//         ),
//       })}
//     </button>
//   );
// };

// export default Button;

import cn from "classnames";
import { ReactComponent as ChevronRight } from "./ChevronRight.svg";
import React, { useState } from "react";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  style: "white" | "outline";
  className?: string;
  isDisabled?: boolean;
  handleClicked?: () => void;
}

const Button = ({ ...props }: ButtonProps) => {
  const { title, icon, style, className, handleClicked, isDisabled } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={handleClicked}
      disabled={isDisabled}
      className={cn(
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
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          className: cn((icon as React.ReactElement).props.className, {
            "stroke-black": style === "white" && !isHovered,
            "stroke-white": style === "outline" && !isHovered,
            "stroke-white hover:stroke-black": style === "white" && isHovered,
            "stroke-black hover:stroke-white": style === "outline" && isHovered,
          }),
        })}
    </button>
  );
};
export default Button;
