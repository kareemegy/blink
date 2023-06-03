import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageRouteName } from "../helpers/getPageTitle";
export function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageRouteName(location.pathname);
    const documentTitle = pageTitle ? `Blink | ${pageTitle}` : "Blink | Home";
    document.title = documentTitle;
  }, [location.pathname]);
}
