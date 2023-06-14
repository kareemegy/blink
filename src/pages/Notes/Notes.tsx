import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SelectLabel from "../../components/SelectLabel/SelectLabel";
import Wrapper from "../../components/Wrapper/Wrapper";
import Bar from "../../assets/images/progressBar2.svg";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/alldone");
  };
  return (
    <div className="h-screen bg-black flex flex-col">
      <Header className="flex-none" />
      <div className="flex-grow overflow-y-auto">
        <div className="container mx-auto">
          <ProgressBar className="hidden md:block" />
          <PageHeader
            title="Notes"
            subtitle="Let us know if there are any other notes you’d like us to know."
          />
          <Wrapper className="mt-20">
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
            </div>
          </Wrapper>
        </div>
      </div>
      <img
        className="md:hidden w-full  px-10  "
        src={Bar}
        alt="progress bar"
      />
      <Footer className="flex-none" />
    </div>
  );
};

export default Notes;
