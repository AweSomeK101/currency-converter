import React, { createContext, useState } from "react";

const initial = {
  currencyFrom: "USD",
  currencyTo: "INR",
  amount: 0,
  rate: 0,
  flag: false,
  chart: true,
};

export const GlobalContext = createContext(initial);

export function GlobalProvider({ children }) {
  const [state, setState] = useState(initial);
  return (
    <GlobalContext.Provider
      value={{
        setState,
        state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
