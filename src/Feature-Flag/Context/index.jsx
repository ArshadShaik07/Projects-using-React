import { useState, createContext, useEffect } from "react";
import apiDummyCall from "../data.js";

export const DataContext = createContext(null);

function FeatureFlagsGlobal({ children }) {
  let name = "Arshad";
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchEnableFlags() {
    try {
      const response = await apiDummyCall();
      setEnabledFlags(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEnableFlags();
  }, []);

  return (
    <DataContext.Provider value={{ enabledFlags }}>
      {children}
    </DataContext.Provider>
  );
}

export default FeatureFlagsGlobal;
