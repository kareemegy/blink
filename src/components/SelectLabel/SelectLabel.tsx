import cn from "classnames";

type SelectLabelProps = {
  title: string;
  className?: string;
};
const SelectLabel = ({ title, className }: SelectLabelProps) => {
  return (
    <label className={cn("text-gray200 font-bold", className)} htmlFor={title}>
      {title}
      <span className="text-error font-normal">*</span>
    </label>
  );
};

export default SelectLabel;
