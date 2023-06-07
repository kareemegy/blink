import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
const Info = () => {
  
  return (
    <div
      className="
    bg-black h-[9000px]"
    >
      <Header />
      <PageHeader
        title="Personal Info"
        subtitle="To provide you with the most comfortable experience, we ask you to kindly fill out your companion’s info in the form.
Please read our Security Policy for further information"
      />
    </div>
  );
};

export default Info;
