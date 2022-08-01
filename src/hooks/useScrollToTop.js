import { useLayoutEffect } from "react";

const useScrollToTop = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
