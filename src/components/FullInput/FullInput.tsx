type InputProps = {
  id: string;
  placeholder: string;
};

const FullInput = ({ ...props }: InputProps) => {
  const { id, placeholder } = props;
  return (
    <input
      id={id}
      className="bg-transparent hidden md:block md:w-[55%] lg:w-[68%] h-[50px] bg-blinkbg border border-inputColor p-3 outline-none"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default FullInput;
