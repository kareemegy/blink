interface Props {
  children: React.ReactNode;
}
const BoxWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col  w-full px-5 md:px-14 py-10  bg-Gray900 md:bg-EventBg md:max-w-[838px]">
      {children}
    </div>
  );
};

export default BoxWrapper;
