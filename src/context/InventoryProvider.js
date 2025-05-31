import React, { createContext, useState } from 'react';
const InventoryContext = createContext(null);

function InventoryProvider({ children }) {
    const [products,setproducts] = useState([])
  return (
    <InventoryContext.Provider value={{products,setproducts}}>
        {children}
    </InventoryContext.Provider>
  )
}

export {InventoryContext,InventoryProvider}
