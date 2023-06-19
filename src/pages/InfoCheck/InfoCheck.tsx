import BoxWrapper from "../../components/BoxWrapper/BoxWrapper";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Wrapper from "../../components/Wrapper/Wrapper";
import Protrait from "../../assets/images/Protrait.png";
import Passport from "../../assets/images/Passport.png";
import Button from "../../components/Button";
import { ReactComponent as ChevronRight } from "../../assets/images/Home Page/Chevron right.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const InfoCheck = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/food-choices");
  };
  const backToInfo = () => {
    navigate("/info");
  };
  return (
    <>
      <div className="bg-black">
        <Header />
        <Wrapper>
          <PageHeader
            title="Personal Info Check"
            subtitle="Please check your information and make sure its all correct. Please read our Security Policy for further information"
          />
          <BoxWrapper className="max-sm:bg-black">
            <Documents />
            <hr className="border-Lightest my-7 md:my-9 border-b-1  max-w-3xl" />
            <IdentificationInfo />
            <hr className="border-Lightest my-7 md:my-9 border-b-1  max-w-3xl" />
            <PersonalInfo />
            <hr className="border-Lightest my-7 md:my-9 border-b-1  max-w-3xl" />
            <ContactInfo />
            <hr className="border-Lightest my-7 md:my-9 border-b-1  max-w-3xl" />
            <p className="text-DarkestWhite mb-5">
              Please make sure that your information is correct before you
              submit
            </p>
            <div className="flex flex-col md:flex-row gap-10">
              <Button
                handleClicked={backToInfo}
                title="Back to edit"
                style="outline"
                className="w-full"
              />
              <Button
                title="Submit"
                style="white"
                icon={<ChevronRight className="stroke-black" />}
                className="w-full"
                handleClicked={nextPage}
              />
            </div>
          </BoxWrapper>
        </Wrapper>
        <Footer />
      </div>
    </>
  );
};

export default InfoCheck;

const Documents = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl mb-10 font-bold">Documents </h1>
      <div className="flex flex-col md:flex md:flex-row gap-5">
        <div>
          <p className="text-Gray200 mb-2">Portrait Photo</p>
          <img src={Protrait} alt="Portrait Photo" />
        </div>
        <div>
          <p className="text-Gray200 mb-2">Passport Photo</p>
          <img src={Passport} alt="Portrait Photo" />
        </div>
      </div>
    </>
  );
};

const IdentificationInfo = () => {
  return (
    <>
      <h1 className="text-2xl mt-10 mb-8 font-bold">Identification Info</h1>
      <div className="grid gap-5 max-sm:grid-cols-1 md:grid-cols-2 ">
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">ID Type</h4>
          <h1 className="text-xl">Passport</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Passport Type</h4>
          <h1 className="text-xl">Regular Passport</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Issuing Authority*</h4>
          <h1 className="text-xl">USA</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">ID Type</h4>
          <h1 className="text-xl">Passport</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Passport Type</h4>
          <h1 className="text-xl">Regular Passport</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Issuing Authority*</h4>
          <h1 className="text-xl">USA</h1>
        </div>
      </div>
    </>
  );
};
const PersonalInfo = () => {
  return (
    <>
      <h1 className="text-2xl mt-10 mb-8 font-bold">Personal Info</h1>
      <div className="grid gap-5 max-sm:grid-cols-1 md:grid-cols-2 ">
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">First Name</h4>
          <h1 className="text-xl">John</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Gender</h4>
          <h1 className="text-xl">Male</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Last Name</h4>
          <h1 className="text-xl">Lewadofsky</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Date of Birth</h4>
          <h1 className="text-xl">1989 - 15 -10</h1>
        </div>
      </div>
    </>
  );
};
const ContactInfo = () => {
  return (
    <>
      <h1 className="text-2xl mt-10 mb-8 font-bold">Contact Info</h1>
      <div className="grid gap-5 max-sm:grid-cols-1 md:grid-cols-2 ">
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Email</h4>
          <h1 className="text-xl">johnlevadofskybla@gmail.com</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Emergency Contact Full Name </h4>
          <h1 className="text-xl">Marry brown</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Phone Number</h4>
          <h1 className="text-xl">+1 553 5485 55</h1>
        </div>
        <div className="mb-5">
          <h4 className="text-sm text-Gray200">Emergency Contact Number</h4>
          <h1 className="text-xl">+1 536 5655 45</h1>
        </div>
      </div>
    </>
  );
};
