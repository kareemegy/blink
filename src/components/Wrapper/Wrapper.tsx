import cn from "classnames";

interface Props {
  children: React.ReactNode;
  showModal?: boolean;
}
const Wrapper = ({ children, showModal }: Props) => {
  return (
    <div className={cn("bg-black text-white", { hidden: showModal })}>
      <div className="container mx-auto flex flex-col justify-start items-center max-w-3xl">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
