import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import Event from "./pages/Event";
import Info from "./pages/Info/Info";
import InfoCheck from "./pages/InfoCheck/InfoCheck";
import FoodChoices from "./pages/FoodChoices/FoodChoices";
import Preferences from "./pages/Preferences/Preferences";
import Allergies from "./pages/Allergies/Allergies";
import Notes from "./pages/Notes/Notes";
import AllDone from "./pages/AllDone/AllDone";

const App = () => {
  useDocumentTitle();
  const routes = [
    {
      path: "/",
      element: <Home />,
      name: "Home",
    },
    {
      path: "/event",
      element: <Event />,
      name: "EventName",
    },
    {
      path: "/info",
      element: <Info />,
      name: "Info",
    },
    {
      path: "/info-check",
      element: <InfoCheck />,
      name: "Info Check",
    },
    {
      path: "/food-choices",
      element: <FoodChoices />,
      name: "Food Choices",
    },
    {
      path: "/preferences",
      element: <Preferences />,
      name: "Preferences",
    },
    {
      path: "/allergies",
      element: <Allergies />,
      name: "Allergies",
    },
    {
      path: "/notes",
      element: <Notes />,
      name: "Notes",
    },
    {
      path: "/alldone",
      element: <AllDone />,
      name: "All Done",
    },

  ];
  const routing = useRoutes(routes);
  return routing;
};

export default App;
