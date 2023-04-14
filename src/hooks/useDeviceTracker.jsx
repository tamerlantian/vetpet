import { useEffect, useState } from "react";
import { useScreenSize } from "./useScreenSize";

export const useDeviceTracker = (size) => {
  const [isMobile, setIsMobile] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize <= size) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenSize]);

  return isMobile;
};
