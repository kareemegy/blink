import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SelectLabel from "../../components/SelectLabel/SelectLabel";
import Wrapper from "../../components/Wrapper/Wrapper";
import Bar from "../../assets/images/bar.svg";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/alldone");
  };
  return (
    <div className="bg-black h-screen">
      <Header />
      <ProgressBar className="hidden md:block" type="allergies" />
      <div className="container mx-auto">
        <PageHeader
          title="Notes"
          subtitle="Let us know if there are any other notes you’d like us to know."
        />
      </div>
      <Wrapper className=" mt-20">
        <div>
          <SelectLabel title="Other notes" className="text-Gray200" />
          <Input
            type="text"
            id="notes"
            placeholder="Type here..."
            className="bg-inputBg"
          />
          <Button
            title="Next"
            style="white"
            className="w-full mt-10"
            handleClicked={nextPage}
          />
          <img
            className="md:hidden w-full mt-10 mb-4"
            src={Bar}
            alt="progress bar"
          />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Notes;
