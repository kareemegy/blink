import Button from "../../components/Button";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import Egg from "../../assets/images/egg.svg";
import Dairy from "../../assets/images/dairy.svg";
import Peanut from "../../assets/images/peanuts.svg";
import TreeNuts from "../../assets/images/treeNuts.svg";
import Fish from "../../assets/images/Fish.svg";
import ShellFish from "../../assets/images/Shellfish.svg";
import Soy from "../../assets/images/soy.svg";
import SeaSame from "../../assets/images/Seasame.svg";
import ProgressBar from "../../components/ProgressBar";
const Allergies = () => {
  return (
    <div className="bg-black">
      <Header />
      <ProgressBar className="hidden md:block" />
      <div className="container mx-auto">
        <PageHeader
          title="Allergies"
          subtitle="Please choose the foods against which [you’re] allergic "
        />
      </div>
      <Wrapper className="h-screen">
        <AllergiesChoices />
      </Wrapper>
    </div>
  );
};

export default Allergies;

interface Allergy {
  text: string;
  icon?: string;
}

const AllergiesChoices = () => {
  const navigate = useNavigate();

  const goToNotes = () => {
    navigate("/notes");
  };

  const allergies: Allergy[] = [
    {
      text: "No Allergies",
    },
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
      <div></div>
    </>
  );
};
