import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader";
import Icon from "../../assets/images/icon.svg";
import Upload from "../../assets/images/upload.svg";
import SelectLabel from "../../components/SelectLabel";
import SelectOptions from "../../components/SelectOptions";
import FullInput from "../../components/FullInput";
import Input from "../../components/Input/Input";
import SmallSelect from "../../components/SmallSelect";
import Footer from "../../components/Footer";
import ChervronRight from "../../assets/images/Home Page/Chevron right.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
const Info = () => {
  const title = "Personal Info";
  const subtitle = `To provide you with the most comfortable experience,  we ask you to
    kindly fill out your companion’s info in the form. Please read our Security Policy for further information`;
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/info-check");
  };
  return (
    <div className="bg-black">
      <Header />
      <div className="container mx-auto grid grid-cols-1 justify-items-center gap-y-5 xl:max-w-[1280px] ">
        <PageHeader title={title} subtitle={subtitle} className="md:w-[70%]" />
        <div className=" bg-blinkbg p-5 md:px-[52px] md:py-[60px] w-[100%] md:w-[70%] md:ml-7 text-white">
          <h1 className="text-xl font-bold">Documents</h1>
          <div className="flex items-center mt-3">
            <input
              className="w-[20px] h-[20px] appearance-none bg-gray400 border checked:bg-gray300 text-sm md:text-base   "
              type="checkbox"
              name="documents"
            />
            <p className="text-sm md:text-base ml-3 w-[90%]">
              I have reviewed the{" "}
              <span className="underline">
                Instructions to Upload my Personal Photo and Passport
              </span>
            </p>
          </div>
          <PortraitSection />
          <PassportPhotoSection />
          <div className="mt-10 mb-5">
            <IdentificationInfoSection />
            <PersonalInfoSection />
            <ContactInfoSection />
          </div>
          <Button
            handleClicked={nextPage}
            title="Save"
            style="white"
            className="w-full text-lg mt-10 mb-5"
            icon={ChervronRight}
          />
          <p className="text-Gray300">
            *Due to high demand, requested arrival & departure dates are subject
            to change based on availability
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Info;

const PortraitSection = () => {
  return (
    <div className="mt-10 md:grid md:grid-cols-3 md:justify-items-start">
      <h1 className="text-xl text-gray200 font-bold col-span-1 ">
        <span className="text-Gray200">Portrait</span>
        <span className="text-error font-normal">*</span>
      </h1>
      <div className="flex flex-col items-center  col-span-2">
        <img
          className="mx-auto  mb-[20px] w-[180px]"
          src={Icon}
          alt="user photo"
        />
        <Button title="Browse photos" icon={Upload} style="outline" />
      </div>
    </div>
  );
};

const PassportPhotoSection = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl text-gray200 font-bold">
        <span className="text-Gray200">Passport Photo</span>
        <span className="text-error font-normal">*</span>
      </h1>
      <label htmlFor="passport" className="text-sm underline mt-2">
        Upload Passport (your data will be extracted automatically)
      </label>
      <div className="flex justify-between flex-wrap mt-4">
        <FullInput id="passport" placeholder="passport.jpge" />
        <button className="flex justify-center items-center w-full h-[50px] md:w-[40%]  lg:max-w-[30%]  text-white  font-bold border-2 px-[10px] py-[5px] md:text-sm ">
          <span>Browse photos</span>
          <img className="p-3" src={Upload} alt="user photo" />
        </button>
      </div>
    </div>
  );
};

const IdentificationInfoSection = () => {
  return (
    <>
      <h1 className="text-2xl mt-10 mb-8 font-bold">Identification Info</h1>
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-Gray200">
          <div>
            <SelectLabel title="ID Type" />
            <SelectOptions
              title="ID Type"
              id="ID Type"
              placeHolder="Select..."
              options={["option1", "option2", "option3"]}
            />
          </div>

          <div>
            <SelectLabel title="Nationality" />
            <SelectOptions
              title="Nationality"
              id="nationality"
              placeHolder="Select..."
              options={["option1", "option2", "option3"]}
            />
          </div>
          <div>
            <SelectLabel title="Passport Type" />
            <SelectOptions
              title="Passport Type"
              id="Passport Type"
              placeHolder="Select..."
              options={["option1", "option2", "option3"]}
            />
          </div>
          <div>
            <SelectLabel title="Passport Number" />
            <Input type="text" id="passportNumber" placeholder="000000000" />
          </div>
          <div>
            <SelectLabel title="Issuing Authority" />
            <Input type="text" id="issuingAuthority" placeholder="QT.." />
          </div>
          <div>
            <SelectLabel title="Expiration Date" />
            <SelectOptions
              title="Expiration Date"
              id="expirationDate"
              placeHolder="YYYY - MM - DD"
              options={["option1", "option2", "option3"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const PersonalInfoSection = () => {
  return (
    <>
      <h1 className="text-2xl mt-10 mb-8 font-bold">Personal Info</h1>
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-Gray200">
          <div>
            <div>
              <SelectLabel title="First Name" />
            </div>
            <Input type="text" id="First Name" placeholder="John" />
          </div>
          <div>
            <div>
              <SelectLabel title="Last Name" />
            </div>
            <Input type="text" id="lastName" placeholder="Doe" />
          </div>
          <div>
            <SelectLabel title="Gender" />
            <SelectOptions
              title="Gender"
              id="gender"
              placeHolder="Select..."
              options={["option1", "option2", "option3"]}
            />
          </div>
          <div>
            <SelectLabel title="Date of Birth" />
            <SelectOptions
              title="DOB"
              id="DOB"
              placeHolder="YYYY - MM - DD"
              options={["option1", "option2", "option3"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ContactInfoSection = () => {
  return (
    <>
      <h1 className="text-2xl mt-10 mb-8 font-bold">Contact Info</h1>
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-Gray200">
          <div>
            <div>
              {" "}
              <SelectLabel title="Email" />
            </div>
            <Input type="email" id="Email" placeholder="jhondoe@company.com" />
          </div>
          <div>
            <div className="flex items-center   ">
              <div>
                <SelectLabel title="Contact" className="text-sm" />
                <div>
                  <SmallSelect
                    options={["option1", "option2", "option3"]}
                    className="self-center relative"
                    left={true}
                  />
                </div>
              </div>

              <div className="self-end w-full ml-4  ">
                <Input type="text" id="No" placeholder="000 0000 000" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 text-Gray200">
          <div>
            <div>
              {" "}
              <SelectLabel title="Label" />
            </div>
            <Input type="email" id="Email" placeholder="Placeholder" />
          </div>
          <div>
            <div className="flex items-center   ">
              <div>
                <SelectLabel title="Contact" className="text-sm" />
                <div>
                  <SmallSelect
                    options={["option1", "option2", "option3"]}
                    className="self-center relative"
                    left={true}
                  />
                </div>
              </div>

              <div className="self-end w-full ml-4 ">
                <Input type="text" id="No" placeholder="Place Holder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
