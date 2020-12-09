import React from "react"
import Time from "./Time"



function Header() {

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
      }

    return (
        <header style={headerStyle}>
          <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Personal Finance Dashboard</h1>
          <Time/>
        </header>
      )
}

export default Header