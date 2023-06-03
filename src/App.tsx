import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import EventPage from "./pages/EventPage";

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
      element: <EventPage />,
      name: "EventName",
    },
  ];
  const routing = useRoutes(routes);
  return routing;
};

export default App;
