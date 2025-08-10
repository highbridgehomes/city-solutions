import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = {};

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const path = location.pathname + location.search;

    if (navigationType === "POP") {
      const y = scrollPositions[path] || 0;
      window.scrollTo(0, y);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      scrollPositions[path] = window.scrollY;
    };
  }, [location, navigationType]);

  return null;
}
