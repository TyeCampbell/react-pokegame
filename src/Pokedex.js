import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    

    render(props) {
        
        let winnerStatus;

        if (this.props.isWinner == true){
           winnerStatus = <span className='Pokedex-winner'>--Winner!</span>
         } else {
            winnerStatus = <span className='Pokedex-loser'>--Looser!</span>
         }

        return (
            <div className='Pokedex-wrapper'>
                <div className='Pokedex-cards'>
                {this.props.hand.map(i => <Pokecard character={i}/>)}
                </div>
                <div>
                    <p>Total Experience: {this.props.expTotal} {winnerStatus}</p>
                </div>
            </div>
        )
    }
}

export default Pokedex;