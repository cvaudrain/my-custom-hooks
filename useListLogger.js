/*accepts an array as an arg, and logs value of each state variable
in  array when any of their states change (best used to side-by-side compare
 related state values in a group) */
import { useEffect } from "react";

export default function useUpdateLogger(array) {
  useEffect(() => {
    array.forEach((val, ind) => {
      console.log(val);
    });
  }, [array]);
}