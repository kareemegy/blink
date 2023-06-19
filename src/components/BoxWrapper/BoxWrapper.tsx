interface Props {
  children: React.ReactNode;
  className?: string;
}
const BoxWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`flex flex-col  w-full px-5 md:px-14 py-10  bg-Gray900 md:bg-EventBg md:max-w-[838px] ${className} `}
    >
      {children}
    </div>
  );
};

export default BoxWrapper;
