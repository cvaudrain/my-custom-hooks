//logs value of a state variable when its state changes
import { useEffect } from "react";

export default function useStateLogger(val) {
  useEffect(() => {
    console.log(val);
  }, [val]);
}