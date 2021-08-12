import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="https://www.tonbebe.jp/">Ton Bébé サイト</Link>
    <ThemeChanger/>
  </nav>
  
)
