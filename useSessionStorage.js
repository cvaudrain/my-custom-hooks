import { useState, useEffect } from "react";
// useState but holds in sessionStorage

//GET from sessionStorage- will be called in custom hook to return 1 of 3 options
function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(sessionStorage.getItem(key));
  //1 If already saved to the entered key
  if (savedValue) {
    return savedValue;
  }
  if (initialValue instanceof Function) {
    //2 if stored value is a function rather than a primitive or object
    return initialValue();
  }
  return initialValue; //3 else if not a function, return without function call
}

export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  //set local storage any time state variable value changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
    console.log(sessionStorage.getItem(key));
  }, [value]);

  return [value, setValue];
}