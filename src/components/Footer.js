import React from "react"

function Footer() {

    const footerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
      }

    return (
        <footer style={footerStyle}>
          <p style={{ fontSize: "12px" }}>
            Developped by Luca Castelli.
          </p>
        </footer>
      )
}

export default Footer