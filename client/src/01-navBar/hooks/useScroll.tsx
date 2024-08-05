import { useEffect, useState } from "react";

function useHandleScroll() {
  const [scrolling, setScrolling] = useState(false);

  function handleScroll() {
    
    if (window.scrollY >= 300) {
      setScrolling(true);
    } 
    else{
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrolling,
  };
}

export default useHandleScroll;