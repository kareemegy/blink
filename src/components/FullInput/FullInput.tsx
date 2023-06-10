type InputProps = {
  id: string;
  placeholder: string;
};

const FullInput = ({ ...props }: InputProps) => {
  const { id, placeholder } = props;
  return (
    <input
      id={id}
      className="hidden md:block md:w-[55%] lg:w-[70%] lg:max-w-[65%] h-[50px] bg-blinkbg border border-inputColor p-3 outline-none"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default FullInput;