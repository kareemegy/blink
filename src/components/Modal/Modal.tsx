import { useEffect, useRef } from "react";
import cn from "classnames";
import CloseBTN from "../../assets/images/Home Page/closeBTN.svg";
import "./style.css";
type ModalProps = {
  showModal: boolean;
  toggleModal: () => void;
  headerText: string;
  children: React.ReactNode;
  leftIcon?: string;
  className?: string;
};

const Modal = ({
  showModal,
  toggleModal,
  headerText,
  children,
  leftIcon,
  className,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      toggleModal();
    }
  };

  return (
    <>
      <div
        ref={modalRef}
        className={cn("absolute inset-0 bg-black z-20 h-screen w-screen  ", {
          hidden: !showModal,
        })}
        onClick={handleModalClick}
      >
        <span
          className={cn(
            " hidden md:block absolute top-10 right-10 cursor-pointer z-10 "
          )}
          onClick={toggleModal}
        >
          <img src={CloseBTN} alt="close button" />
        </span>
        <div className=" fixed inset-0 flex items-center justify-center mx-3 max-sm:mx-0">
          <div
            className={cn(
              "py-[52px] px-[46px] md:h-[570px] md:w-[730px]  text-white w-screen  h-screen md:bg-blinkDashboard",
              className
            )}
          >
            <div className="flex align-baseline">
              {leftIcon && (
                <span className="mr-5 md:hidden" onClick={toggleModal}>
                  <img className="" src={leftIcon} alt="left Icon" />
                </span>
              )}
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                {headerText}
              </h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
