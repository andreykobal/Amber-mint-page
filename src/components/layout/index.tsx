import * as React from "react"
// import "./layout.scss"
import Banner from "../banner"
import Navbar from "../nav"
import Footer from "../footer"
// import * as css from "./layout.module.css"

const Layout: React.FC<{ style?: React.CSSProperties }> = ({
  style,
  children,
}) => {
  return (
    <div className="relative">
      <div>
        <Banner />
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
