import Button from "../../components/Button";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import Egg from "../../assets/images/egg.svg";
import Dairy from "../../assets/images/dairy.svg";
import Peanut from "../../assets/images/Peanuts.svg";
import TreeNuts from "../../assets/images/treeNuts.svg";
import Fish from "../../assets/images/Fish.svg";
import ShellFish from "../../assets/images/Shellfish.svg";
import Soy from "../../assets/images/Soy.svg";
import SeaSame from "../../assets/images/Seasame.svg";
import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";
import { ReactComponent as Bar } from "../../assets/images/progressBar2.svg";
import Footer from "../../components/Footer/Footer";
const Allergies = () => {
  return (
    <div className=" h-screen bg-black">
      <div className="bg-black">
        <Header />
        <ProgressBar className="hidden md:block md:px-6" type="full"/>
        <div className="container mx-auto">
          <PageHeader
            title="Allergies"
            subtitle="Please choose the foods against which [you’re] allergic "
            className=" md:!px-5"
          />
        </div>
        <div className="bg-black">
          <Wrapper className="bg-black">

            <AllergiesChoices />
          </Wrapper>
        </div>
        <Footer className="md:!h-[300px] mb-6" />
      </div>
    </div>
  );
};

export default Allergies;

interface Allergy {
  text: string;
  icon: string;
}
const AllergiesChoices = () => {
  const navigate = useNavigate();
  const [selectedAllergies, setSelectedAllergies] = useState<Allergy[]>([]);

  const allergies = [
    { text: "No Allergies", icon: "" },
    { text: "Eggs", icon: Egg },
    { text: "Dairy", icon: Dairy },
    { text: "Peanuts", icon: Peanut },
    { text: "Tree Nuts", icon: TreeNuts },
    { text: "Fish", icon: Fish },
    { text: "Shellfish", icon: ShellFish },
    { text: "Soy", icon: Soy },
    { text: "Seasame", icon: SeaSame },
    { text: "Other", icon: "" },
  ];

  const selectAllergies = (allergy: Allergy) => {
    if (allergy.text === "No Allergies") {
      setSelectedAllergies([allergy]);
    } else if (
      allergy.text === "Other" ||
      selectedAllergies.some((a) => a.text === "Other")
    ) {
      setSelectedAllergies([allergy]);
    } else {
      const index = selectedAllergies.findIndex((a) => a.text === allergy.text);
      if (index >= 0) {
        setSelectedAllergies(
          selectedAllergies.filter((a) => a.text !== allergy.text)
        );
      } else {
        setSelectedAllergies([...selectedAllergies, allergy]);
      }
    }
  };

  const goToNotes = () => {
    navigate("/notes");
  };

  const isAllergySelected = (allergy: Allergy) =>
    selectedAllergies.some((a) => a.text === allergy.text);

  return (
    <div className="grid grid-cols-3 gap-3 mx-5">
      {allergies.map((allergy) => (
        <div
          key={allergy.text}
          className={`flex flex-col items-center justify-center h-[105px] w-[98px] md:w-[105px] bg-Darker shadow-lg border-2 max-sm:text-sm ${
            isAllergySelected(allergy)
              ? "border-white text-white font-bold"
              : "border-Darker text-DarkestWhite"
          } ${
            allergy.text === "Other"
              ? "block md:hidden h-[47px] !col-span-3"
              : ""
          }`}
          onClick={() => selectAllergies(allergy)}
        >
          {allergy.icon && (
            <img
              className="h-[47px] w-[47px] mb-1"
              src={allergy.icon}
              alt={allergy.text}
            />
          )}
          <span
            className={`${
              isAllergySelected(allergy) ? "text-white font-bold" : ""
            }`}
          >
            {allergy.text}
          </span>
        </div>
      ))}

      <Bar className="md:hidden w-full mt-10 mb-4 col-span-3" />
      <Button
        title="Next"
        handleClicked={goToNotes}
        style="white"
        className="w-full col-span-3"
        isDisabled={selectedAllergies.length === 0}
      />
    </div>
  );
};
