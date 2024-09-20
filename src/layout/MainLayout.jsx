import {Outlet} from "react-router-dom"
import { Footer, Navbar } from "../components"
export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <main> 
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
