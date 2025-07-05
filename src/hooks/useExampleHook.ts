import { useEffect } from "react";

const useExampleHook = (word: string) => {
  useEffect(() => {
    console.log(word, " 출력");
  }, []);
};

export default useExampleHook;
