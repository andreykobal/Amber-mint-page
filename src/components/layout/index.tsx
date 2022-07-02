import * as React from "react"
import "./layout.scss"
import Banner from "../banner"
import Navbar from "../nav/index"
import Footer from "../footer"
import * as css from "./layout.module.css"

const Layout: React.FC<{ style?: React.CSSProperties }> = ({
  style,
  children,
}) => {
  return (
    <div style={style} className={css.wrap}>
      <div>
        <Banner />
        <Navbar />
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
