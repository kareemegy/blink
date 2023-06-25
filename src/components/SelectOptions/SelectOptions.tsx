import cn from "classnames";
import arrowDown from "../../assets/images/arrowDown.svg";

type SelectProps = {
  title?: string;
  id?: string;
  placeHolder: string;
  options: string[];
  wSize?: string;
};

const SelectOptions = ({ ...props }: SelectProps) => {
  const { title, id, placeHolder, options } = props;
  return (
    <div>
      <div className="relative ">
        <select
          id={id}
          name={title ? title : ""}
          className={cn(
            "appearance-none bg-transparent border border-bdwhite  text-gray500 w-full outline-none lg:max-w-[380px]  h-[50px]  mt-2 p-3"
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
        <ArrowDown />
      </div>
    </div>
  );
};

export default SelectOptions;

const ArrowDown = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none  min-[1280px]:left-[339px] top-[9px]">
      <img src={arrowDown} alt="ArrowDown" className="h-4 w-4 text-gray-700" />
    </div>
  );
};
