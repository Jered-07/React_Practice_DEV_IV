import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../../../../styles/Layout.css"

const Layout = () => {
  return (
    <>
      <Navbar/>

      <main className="layout__main">
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

export default Layout
