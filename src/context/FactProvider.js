import React, { createContext, useState } from 'react';

const FactContext = createContext(null);

function FactProvider({ children }) {
  const [factOverview, setfactOverview] = useState([]);
  const [selectedKpi, setSelectedKpi] = useState("Total Sales");
  const [dateGroup, setdateGroup] = useState("Year");
  const [sortOption, setsortOption] = useState("Date");

  return (
    <FactContext.Provider
      value={{
        factOverview,
        setfactOverview,
        selectedKpi,
        setSelectedKpi,
        dateGroup,
        setdateGroup,
        sortOption,
        setsortOption
      }}
    >
      {children}
    </FactContext.Provider>
  );
}

export { FactProvider, FactContext };

