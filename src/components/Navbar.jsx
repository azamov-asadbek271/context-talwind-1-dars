import { Link } from "react-router-dom";
// context


export default function Navbar() {
  
  return (
    <div className="bg-slate-200 py-5">
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
