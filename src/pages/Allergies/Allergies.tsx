import Button from "../../components/Button";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Wrapper from "../../components/Wrapper/Wrapper";
import Bar from "../../assets/images/bar.svg";
import Check from "../../assets/images/check.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Egg from "../../assets/images/egg.svg";
import Dairy from "../../assets/images/dairy.svg";
import Peanut from "../../assets/images/peanuts.svg";
import TreeNuts from "../../assets/images/treeNuts.svg";
import Fish from "../../assets/images/Fish.svg";
import ShellFish from "../../assets/images/Shellfish.svg";
import Soy from "../../assets/images/soy.svg";
import SeaSame from "../../assets/images/Seasame.svg";

const Allergies = () => {
  return (
    <>
      <Header />
      <Wrapper className="h-screen">
        <PageHeader
          title="Allergies"
          subtitle="Please choose the foods against which [you’re] allergic "
        />
        <AllergiesChoices />
      </Wrapper>
    </>
  );
};

export default Allergies;

interface Allergy {
  name: string;
  icon: string;
}

const AllergiesChoices = () => {
  const navigate = useNavigate();

  const goToNotes = () => {
    navigate("/notes");
  };

  const [selectedAllergy, setSelectedAllergy] = useState<Allergy | null>(null);

  const handleAllergyClick = (allergy: Allergy) => {
    if (allergy === selectedAllergy) {
      setSelectedAllergy(null);
    } else {
      setSelectedAllergy(allergy);
    }
  };

  const allergies = [
    {
      text: "Eggs",
      icon: Egg,
    },
    {
      text: "Dairy",
      icon: Dairy,
    },
    {
      text: "Peanuts",
      icon: Peanut,
    },
    {
      text: "Tree Nuts",
      icon: TreeNuts,
    },
    {
      text: "Fish",
      icon: Fish,
    },
    {
      text: "Shellfish",
      icon: ShellFish,
    },
    {
      text: "Soy",
      icon: Soy,
    },
    {
      text: "Seasame",
      icon: SeaSame,
    },
  ];

  return (
    <>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allergies.map((allergy) => (
            <div
              key={allergy.text}
              className={`flex flex-col items-center justify-center p-4 text-center bg-Darker transition-all h-[120px] border rounded-lg ${
                allergy.text ? "cursor-pointer" : ""
              } ${
                selectedAllergy === allergy
                  ? "border-white bg-white"
                  : "border-transparent"
              }`}
              onClick={() =>
                allergy.text
                  ? handleAllergyClick(allergy)
                  : setSelectedAllergy(null)
              }
            >
              <img
                src={allergy.icon}
                alt={`${allergy.text} icon`}
                className="w-16 h-16 mb-2"
              />
              <p>{allergy.text || "No Allergies"}</p>
              {selectedAllergy === allergy && (
                <img src={Check} alt="check" className="w-6 h-6 mt-2" />
              )}
            </div>
          ))}
        </div>
        {/* <img
          className="md:hidden w-full mt-10 mb-4"
          src={ProgressBar}
          alt="progress bar"
        /> */}
        <Button
          title="Next"
          style="white"
          className="w-full md:w-[350px]"
          isDisabled={selectedAllergy === null}
          handleClicked={goToNotes}
        />
      </div>
    </>
  );
};
