// import { useEffect, useRef } from "react";
// import cn from "classnames";
// import CloseBTN from "../../assets/images/Home Page/closeBTN.svg";
// type ModalProps = {
//   showModal: boolean;
//   toggleModal: () => void;
//   headerText: string;
//   children: React.ReactNode;
//   icon?: string;
//   className?: string;
//   titleStyle?: string;
// };

// const RejectPopUp = ({
//   showModal,
//   toggleModal,
//   headerText,
//   children,
//   icon,
//   className,
//   titleStyle,
// }: ModalProps) => {
//   const modalRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [showModal]);

//   const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === modalRef.current) {
//       toggleModal();
//     }
//   };

//   return (
//     <>
//       <div
//         ref={modalRef}
//         className={cn("fixed  inset-0 bg-black bg-opacity-80  z-20 ", {
//           hidden: !showModal,
//         })}
//         onClick={handleModalClick}
//       >
//         <span
//           className={cn(
//             " hidden md:block absolute top-10 right-10 cursor-pointer z-10 "
//           )}
//           onClick={toggleModal}
//         >
//           <img src={CloseBTN} alt="close button" />
//         </span>
//         <div className="fixed inset-0 flex items-center justify-center  w-[350px]">
//           <div
//             className={cn(
//               "py-[52px] px-[46px]  md:w-[730px]  text-white bg-blinkDashboard ",
//               className
//             )}
//           >
//             <div className="flex align-baseline">
//               {icon && (
//                 <span className="mr-5 md:hidden" onClick={toggleModal}>
//                   <img className="" src={icon} alt="left Icon" />
//                 </span>
//               )}
//               <ModalTitle title={headerText} className={titleStyle} />
//             </div>
//             {children}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RejectPopUp;

// const ModalTitle = ({
//   title,
//   className,
// }: {
//   title: string;
//   className?: string;
// }) => {
//   return (
//     <h1 className={`text-2xl w-full font-bold mb-4 ${className}`}>
//       {title}
//     </h1>
//   );
// };

import { useEffect, useRef } from "react";
import cn from "classnames";

type ModalProps = {
  showModal: boolean;
  toggleModal: () => void;
  headerText: string;
  children: React.ReactNode;
  icon?: string;
  className?: string;
  titleStyle?: string;
};

const RejectPopUp = ({
  showModal,
  toggleModal,
  headerText,
  children,
  icon,
  className,
  titleStyle,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== modalRef.current) {
      toggleModal();
    }
  };

  return (
    <>
      <div
        ref={modalRef}
        className={cn("fixed inset-0 bg-black bg-opacity-80 z-20 ", {
          hidden: !showModal,
        })}
        onClick={handleModalClick}
      >
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <div
            className={cn(
              "py-[30px] px-[40px] w-[380px] text-white bg-blinkDashboard rounded-md",
              className,
              {
                "!opacity-0": !showModal,
                "!opacity-100": showModal,
                "!transition-opacity duration-500 ease-in": true,
              }
            )}
          >
            <div className="flex align-baseline">
              {icon && (
                <span className="mr-5 md:hidden" onClick={toggleModal}>
                  <img src={icon} alt="left Icon" />
                </span>
              )}
              <ModalTitle title={headerText} className={titleStyle} />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default RejectPopUp;

const ModalTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1 className={`text-2xl w-full font-bold mb-4 ${className}`}>{title}</h1>
  );
};
