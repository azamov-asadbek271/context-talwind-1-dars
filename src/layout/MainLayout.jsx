import {Outlet} from "react-router-dom"
import { Footer, Navbar } from "../components"
export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <main className="align-container"> 
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
