import { useContext } from "react";
import Context from "./Context";
import { useRef, useEffect } from "react";

export const useStore= () =>{
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}


export const useAutoFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef;
};