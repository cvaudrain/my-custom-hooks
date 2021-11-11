//Original Sandbox Found at: https://codesandbox.io/s/custom-hooks-t4gs3?file=/src/Components/useLocalStorage.js:0-44

import { useState, useEffect } from "react";
// calling useLocalStorage calls useState but also stores in localstorage

//GET from localStorage- will be called in custom hook to return 1 of 3 options
function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
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

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  //set local storage any time state variable value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}