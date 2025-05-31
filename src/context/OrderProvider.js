import React,{createContext,useState} from 'react'
const OrderContext = createContext(null);
function OrderProvider({children}) {
    const [order,setOrder] = useState([]);
  return (
    <OrderContext.Provider value={{order,setOrder}}>
        {children}
    </OrderContext.Provider>
  )
}

export {OrderContext,OrderProvider}
