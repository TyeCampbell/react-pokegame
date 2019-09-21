import React, { Component } from 'react';
import Pokedex from './Pokedex';


class Pokegame extends Component {
    
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    
    render() {
     
        let hand1 = [];
        let hand2 = [...this.props.pokemon];

        while (hand2.length > hand1.length) {
            const randomPoke = hand2[Math.floor(Math.random() * hand2.length)];
            hand1.push(randomPoke);
            hand2 = hand2.filter(poke => poke !== randomPoke);
        }

        let hand1TotalXP = hand1.reduce((total, poke) => total + poke.base_experience, 0);  
        let hand2TotalXP = hand2.reduce((total, poke) => total + poke.base_experience, 0);

        return(
            <div>
                <div>
                    <Pokedex 
                    hand = {hand1} 
                    expTotal = {hand1TotalXP}
                    isWinner = {hand1TotalXP > hand2TotalXP}
                    />
                </div>

                <div>
                    <Pokedex 
                    hand = {hand2} 
                    expTotal = {hand2TotalXP}
                    isWinner = {hand2TotalXP > hand1TotalXP}
                    />
                </div>
            </div>
        )
    }
}



export default Pokegame;