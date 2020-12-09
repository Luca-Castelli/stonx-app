import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import PortfolioContainer from "./PortfolioContainer"
import StockPrice from "./StockPrice"

class MainContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <PortfolioContainer/>
        <StockPrice/>
        <Footer/>
      </div>
    )
  }
}

export default MainContainer