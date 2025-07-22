import Plausible from "plausible-tracker";
import { useEffect } from "react";

export const useAnalytics = () => {
  useEffect(() => {
    const plausible = Plausible({
      domain: "zk-lokomotive",
    });
    const cleanupAutoPageviews = plausible.enableAutoPageviews();
    return () => {
      cleanupAutoPageviews();
    };
  }, []);
};
