import { createContext } from "react";

export const GlobalContext = createContext()
let colors = ["#EAD8B1", "#00CCDD", "#ED3EF7"];
 export function GlobalContextProvider ({children}) {
 return <GlobalContext.Provider value={{colors}}>
    {children}
 </GlobalContext.Provider>
}