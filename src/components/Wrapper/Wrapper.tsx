import cn from "classnames";

interface Props {
  children: React.ReactNode;
  showModal?: boolean;
  className?: string;
}
const Wrapper = ({ children, showModal, className }: Props) => {
  return (
    <div className={cn("bg-black text-white", { hidden: showModal })}>
      <div
        className={`container mx-auto flex flex-col justify-start items-center max-w-3xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
