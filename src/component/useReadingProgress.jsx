import { useState, useEffect } from "react";
const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight =
        document.getElementById("contentBlog").scrollHeight +
        document.getElementById("billboard").scrollHeight -
        window.innerHeight;
        console.log((currentProgress / scrollHeight).toFixed(4));
      if (currentProgress / scrollHeight < 1) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(4)) * 100
        );
      }
    };
    window.addEventListener("scroll", updateScrollCompletion);
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
};
export default useReadingProgress;
