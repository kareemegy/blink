type SelectLabelProps = {
    title: string;
};
const SelectLabel = ({ title }:SelectLabelProps ) => {
  return (
    <label className="text-gray200 font-bold" htmlFor={title}>
      {title}
      <span className="text-error font-normal">*</span>
    </label>
  );
};

export default SelectLabel;
