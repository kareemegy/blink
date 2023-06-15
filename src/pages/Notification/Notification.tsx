import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Wrapper from "../../components/Wrapper/Wrapper";
import { ReactComponent as RightArrow } from "../../assets/images/Home Page/Chevron right.svg";
import { ReactComponent as Document } from "../../assets/images/document.svg";
const Notification = () => {
  return (
    <>
      <div className=" md:hidden">
        <Header />
      </div>
      <div className="bg-black ">
        <div className="container mx-auto">
          <div className="">
            <PageHeader title="Notifications" className="pt-7 !mt-0" />
            <Wrapper className="!items-start max-sm:px-6">
              <NotificationDate month="Nov" day="15" year="2023" />
              <NotificationBody>
                <NotificationTitle
                  title="Trip Update"
                  msg="You’ve been invited to a new trip"
                />
                <NotificationMsg />
              </NotificationBody>
              <NotificationBody>
                <NotificationTitle
                  title="Document added"
                  msg="Your entry permit document is read to download"
                  document
                />
                <NotificationMsg />
              </NotificationBody>
              <NotificationBody>
                <NotificationTitle
                  title="Review Issues"
                  msg="There seems to be some issues with your personal info and documents, if you’d be kind to review them"
                />
                <NotificationMsg />
              </NotificationBody>
              <NotificationDate month="Nov" day="16" year="2023" />
              <NotificationBody>
                <NotificationTitle
                  title="Trip Update"
                  msg="You’ve been invited to a new trip"
                />
                <NotificationMsg />
              </NotificationBody>
              <NotificationBody>
                <NotificationTitle
                  title="Document added"
                  msg="Your entry permit document is read to download"
                  document
                />
                <NotificationMsg />
              </NotificationBody>
              <NotificationBody>
                <NotificationTitle
                  title="Review Issues"
                  msg="There seems to be some issues with your personal info and documents, if you’d be kind to review them"
                />
                <NotificationMsg />
              </NotificationBody>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
interface INotificationDate {
  month: string;
  day: string;
  year: string;
}
const NotificationDate = ({ month, day, year }: INotificationDate) => {
  return (
    <span className="text-DarkestWhite mb-5 ">
      {month} / {day} / {year}
    </span>
  );
};
interface INotificationBody {
  children: React.ReactNode;
}
const NotificationBody = ({ children }: INotificationBody) => {
  return (
    <div className="bg-Darker px-7 pt-7 pb-5 w-full  mb-10 ">{children}</div>
  );
};
interface INotificationTitle {
  document?: boolean;
  title?: string;
  msg?: string;
}
const NotificationTitle = ({ document, title, msg }: INotificationTitle) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-sm md:text-base text-DarkestWhite mb-4">{title}</p>
        <h1 className="text-sm md:text-base mb-4">{msg}</h1>
      </div>
      {document && <Document />}
    </div>
  );
};
const NotificationMsg = () => {
  return (
    <div className="flex items-baseline">
      <span
        className=" w-full  border-b border-Lightest pb-2"
        style={{
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      />

      <p className=" text-sm md:text-base whitespace-nowrap  text-DarkestWhite flex mx-3">
        tap to view
        <RightArrow />
      </p>
      <span
        className="w-full border-b border-Lightest pb-2 "
        style={{
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      />
    </div>
  );
};
