import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Icon from "../../assets/images/icon.svg";
import Upload from "../../assets/images/upload.svg";
const Info = () => {
  const title = "Personal Info";
  const subtitle = `To provide you with the most comfortable experience,  we ask you to
    kindly fill out your companion’s info in the form. Please read our Security Policy for further information`;
  return (
    <div className="bg-black h-[9000px]">
      <Header />
      <div className="container mx-auto grid grid-cols-1 justify-items-center gap-y-5">
        <PageHeader title={title} subtitle={subtitle} />
        <div className=" bg-blinkbg p-5 md:px-[52px] md:py-[60px] w-[100%] md:w-[70%] md:ml-7 text-white ">
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
          <div className="mt-10 md:grid md:grid-cols-3 md:justify-items-start">
            <h1 className="text-xl text-gray200 font-bold col-span-1 ">
              Portrait<span className="text-error font-normal">*</span>
            </h1>
            <div className="flex flex-col items-center  col-span-2">
              <img
                className="mx-auto  mb-[20px] w-[180px]"
                src={Icon}
                alt="user photo"
              />
              <button className="flex justify-center items-center w-full md:max-w-[250px]  text-white  font-bold border-2 px-[10px] py-[5px] ">
                <span>Browse photos</span>
                <img className="p-3" src={Upload} alt="user photo" />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-xl text-gray200 font-bold">
              Passport Photo<span className="text-error font-normal">*</span>
            </h1>
            <label className="text-sm underline mt-2">
              Upload Passport (your data will be extracted automatically)
            </label>
            <div className="flex justify-between flex-wrap mt-4">
              <input
                className="hidden md:block  md:w-[60%] lg:max-w-[65%] h-[50px] bg-blinkbg border p-3"
                type="text"
                placeholder="passport.jpge"
              />
              <button className="flex justify-center items-center w-full h-[50px]  md:max-w-[30%]  text-white  font-bold border-2 px-[10px] py-[5px] md:text-sm ">
                <span>Browse photos</span>
                <img className="p-3" src={Upload} alt="user photo" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
