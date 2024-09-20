import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Navbar() {
   const {navColor} = useContext(GlobalContext)
   console.log(navColor);
  
  return (
    <div className=" py-5" style={{backgroundColor: navColor}}>
      <div className="flex items-center justify-between align-container">
        <Link className="text-3xl font-bold" to="/">
          Logo
        </Link>

        <nav className="hidden md:flex ">
          <ul className="flex gap-5">
            <li className="item">
              <Link className="font-medium" to="/">
                Home
              </Link>
            </li>
            <li className="item">
              <Link className="font-medium" to="/about">
                About
              </Link>
            </li>
            <li className="item">
              <Link
                className="font-medium"
                to="/c
            ontact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden">Show</button>
      </div>
    </div>
  );
}
