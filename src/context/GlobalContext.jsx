import { useReducer } from "react";
import { createContext } from "react";

export const GlobalContext = createContext()


let colors = ["#EAD8B1", "#00CCDD", "#ED3EF7"];

const changeState = (state,action) => {
   switch(action.type) {
      case "Change_color":
      return {...state,navColor: action.payload};
      default:
         return state
   }
}
 export function GlobalContextProvider ({children}) {
   const [state, dispatch] = useReducer(changeState, {
     navColor: "#E9EFEC",
   });
 return (
   <GlobalContext.Provider value={{ colors, ...state, dispatch }}>
     {children}
   </GlobalContext.Provider>
 );
}