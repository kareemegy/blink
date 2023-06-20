import { useEffect, useRef } from "react";
import cn from "classnames";
import CloseBTN from "../../assets/images/Home Page/closeBTN.svg";
import "./style.css";
type ModalProps = {
  showModal: boolean;
  toggleModal: () => void;
  headerText: string;
  children: React.ReactNode;
  icon?: string;
  className?: string;
  titleStyle?: string;
};

const Modal = ({
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
        className={cn("fixed  inset-0 bg-black z-20 ", {
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
          {/* bg-blinkDashboard */}
          <div
            className={cn(
              "py-[52px] px-[46px]  md:w-[730px]  text-white bg-blinkDashboard ",
              className
            )}
          >
            <div className="flex align-baseline">
              {icon && (
                <span className="mr-5 md:hidden" onClick={toggleModal}>
                  <img className="" src={icon} alt="left Icon" />
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

export default Modal;

const ModalTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1 className={`text-2xl md:text-4xl font-bold mb-4 ${className}`}>
      {title}
    </h1>
  );
};
