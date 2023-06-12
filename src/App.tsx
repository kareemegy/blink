import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import Event from "./pages/Event";
import Info from "./pages/Info/Info";
import InfoCheck from "./pages/InfoCheck/InfoCheck";
import FoodChoices from "./pages/FoodChoices/FoodChoices";

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
  ];
  const routing = useRoutes(routes);
  return routing;
};

export default App;
