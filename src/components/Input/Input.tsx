import cn from "classnames";

type InputProps = {
  id: string;
  placeholder: string;
  type: string;
  className?: string;
};
const Input = ({ ...props }: InputProps) => {
  const { id, placeholder, type, className } = props;
  return (
    <input
      id={id}
      className={cn(
        "bg-gray400 border border-bdwhite  text-gray-500 placeholder:text-gray500 w-full outline-none lg:max-w-[380px]  h-[50px]  mt-2 p-3",
        className
      )}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
