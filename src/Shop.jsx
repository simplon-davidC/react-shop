import React, {Component} from 'react';
import './Shop.css';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            achats: [
                {
                    "article": "T-Shirt",
                    "quantite": 2,
                    "prixHT": 15
                }
            ]
        }
    }
    render(){
        return (
            <div className="App-panier">
                <h1>Panier</h1>
                <table>
                    <thead id="head">
                        <tr>
                            <td>Nom</td>
                            <td>Quantité</td>
                            <td>Prix HT</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.achats.map( (a, key) =>
                        <tr key={key}>
                            <td>{a.article}</td>
                            <td>{a.quantite}</td>
                            <td>{a.prixHT}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Cart;
