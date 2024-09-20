import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
export default function Home() {
  const {colors,dispatch}= useContext(GlobalContext);
  function handleColor (color) {
    dispatch({
      type: "Change_color",
      payload: color,
    });
  }
  
  return (
    <>
      <div className="flex justify-end gap-5 py-5 w-full ">
        {colors.map((color) => {
          return (
            <button
            onClick={ () =>handleColor(color)}
              key={color}
              className="w-5 h-5 rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
            ></button>
          );
        })}
      </div>
    </>
  );
}
