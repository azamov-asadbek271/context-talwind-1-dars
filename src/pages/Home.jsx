import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
export default function Home() {
  const { colors } = useContext(GlobalContext);
  console.log(colors);
  return <>
  <div className="flex justify-end gap-5 py-5 w-full ">
    {colors.map((color) => {
      console.log(color);
      return <button key={color} className="w-5 h-5 rounded-full cursor-pointer" style={{backgroundColor: color}}></button>;
    })}
    </div>
    </>;
}
