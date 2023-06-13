export const getPageRouteName = (pathname: string): string => {
  // Map route names to page titles
  const pageRouteMap: Record<string, string> = {
    "/": "Home",
    "/event": "Event Name",
    "/info": "info",
    "/info-check": "Info Check",
    "/food-choices": "Food Choices",
    "/preferences": "Preferences",
    "/allergies": "Allergies",
    "/notes": "Notes",
    "/alldone": "All Done",
  };
  const routeName = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const pageRouteName = pageRouteMap[routeName];

  return pageRouteName || "";
};
