import cn from "classnames";
import arrowDown from "../../assets/images/arrowDown.svg";
import Qatar from "../../assets/images/Qatar.svg";
type SelectProps = {
  title?: string;
  id?: string;
  placeHolder?: string;
  options: string[];
  className?: string;
  left?: boolean;
};

const SmallSelect = ({ ...props }: SelectProps) => {
  const { title, id, placeHolder, options, className, left } = props;
  return (
    <div>
      <div className="relative ">
        <select
          id={id}
          name={title ? title : ""}
          className={cn(
            "appearance-none bg-gray400 border border-bdwhite  text-gray500 w-[80px] outline-none   h-[50px]  mt-2 p-3",
            className
          )}
        >
          <option className="text-gray-500" disabled selected hidden>
            {placeHolder}
          </option>
          {options.map((option, i) => (
            <option key={i} className="text-gray-500" value={option}>
              {option}
            </option>
          ))}
        </select>
        <ArrowDown className={left} />
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none left-[7px] top-[7px]">
          <img src={Qatar} alt="ArrowDown" className="h-6  w-6 text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default SmallSelect;

type ArrowDownProps = {
  className?: boolean;
};
const ArrowDown = ({ className }: ArrowDownProps) => {
  return (
    <div
      className={cn(
        "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none   top-[9px]",
        { "min-[1280px]:left-[339px]": !className },
        { "left:[55px]": className }
      )}
    >
      <img src={arrowDown} alt="ArrowDown" className="h-4 w-4 text-gray-700" />
    </div>
  );
};
