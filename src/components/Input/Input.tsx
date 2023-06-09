type InputProps = {
  id: string;
  placeholder: string;
  type: string;
};
const Input = ({ ...props }: InputProps) => {
  const { id, placeholder, type } = props;
  return (
    <input
      id={id}
      className="bg-gray400 border border-bdwhite  text-gray-500 placeholder:text-gray500 w-full outline-none lg:max-w-[380px]  h-[50px]  mt-2 p-3"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
