import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Wrapper from "../../components/Wrapper/Wrapper";
import Bar from "../../assets/images/bar.svg";
import Check from "../../assets/images/check.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Footer from "../../components/Footer/Footer";
const Preferences = () => {
  return (
    <div className="bg-black">
      <Header />
      <ProgressBar className="hidden md:block" />
      <div className="container mx-auto">
        <PageHeader
          title="Preferences"
          subtitle="Let’s start with food preference, which of these practices do you follow?"
        />
      </div>
      <Wrapper>
        <PreferencesChoices />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Preferences;
type Preferences =
  | "No Preference"
  | "Vegan"
  | "Vegetarian"
  | "Pescatarian"
  | "Other";

const PreferencesChoices = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/allergies");
  };
  const choices: Preferences[] = [
    "No Preference",
    "Vegan",
    "Vegetarian",
    "Pescatarian",
    "Other",
  ];

  const [selected, setSelected] = useState<Preferences | null>(null);

  const handlePreferenceClick = (preference: Preferences) => {
    if (preference === selected) {
      setSelected(null);
    } else {
      setSelected(preference);
    }
  };

  const isButtonDisabled = selected === null;

  return (
    <>
      <div className="w-[90%]  flex flex-col items-center">
        {choices.map((choice) => {
          const isSelected = choice === selected;
          return (
            <div
              key={choice}
              className={`flex justify-between items-center mb-5 bg-Darker w-full md:w-[350px] transition-all h-[60px] border ${
                isSelected ? "border-white" : "border-none"
              } cursor-pointer`}
              onClick={() => handlePreferenceClick(choice)}
            >
              <p className="ml-8">{choice}</p>
              {isSelected && (
                <img
                  className="w-[20px] h-[20px] mr-7"
                  src={Check}
                  alt="check"
                />
              )}
            </div>
          );
        })}
        <img
          className="md:hidden w-full mt-10 mb-4"
          src={Bar}
          alt="progress bar"
        />
        <Button
          title="Next"
          style="white"
          className="w-full md:w-[350px]"
          isDisabled={isButtonDisabled}
          handleClicked={nextPage}
        />
      </div>
    </>
  );
};
