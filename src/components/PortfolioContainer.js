import React from "react"

class PortfolioContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stocks: [
                {id:1, ticker:'XSP', name:'S&P500', price:33}
            ]
        }
    }

    renderTableData() {
        return this.state.stocks.map((stock, index) => {
           const { id, ticker, name, price } = stock
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{ticker}</td>
                 <td>{name}</td>
                 <td>{price}</td>
              </tr>
           )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.stocks[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render(){
        return(
            <div>
                <table id='stocks'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PortfolioContainer