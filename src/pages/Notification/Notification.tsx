import PageHeader from "../../components/PageHeader/PageHeader";
import Wrapper from "../../components/Wrapper/Wrapper";

const Notification = () => {
  return (
    <div className="bg-black h-screen">
      <div className="container mx-auto">
        <div className="">
          <PageHeader title="Notifications" className="mt-0" />
          <Wrapper>
            <div>
              <span>Nov / 15 / 2022</span>
              
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Notification;
