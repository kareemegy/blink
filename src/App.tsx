import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import Event from "./pages/Event";
import Info from "./pages/Info/Info";

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
  ];
  const routing = useRoutes(routes);
  return routing;
};

export default App;
