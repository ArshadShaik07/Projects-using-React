import { useState, useEffect } from "react";

function useLocalStorage(key, defvalue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defvalue));
    } catch (e) {
      console.log(e);
      currentValue = defvalue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
