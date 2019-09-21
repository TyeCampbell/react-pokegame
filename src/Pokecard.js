import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {

    render(props){
              
        // const pokeList = Pokelist;

        // function selectRandomPoke(list) {
        //     const itemSelected = list[Math.floor(Math.random() * list.length)];
        //     list = list.filter(poke => poke !== itemSelected);
        //     console.log(list);
        //     return itemSelected;

        // }

        // let randomPoke = selectRandomPoke(pokeList);

        // let randomPoke = remainingPokedex[Math.floor(Math.random() * remainingPokedex.length)];
        // remainingPokedex = remainingPokedex.filter(poke => poke !== randomPoke);

        const pokeFromPokedex = this.props.character;

        function idToImgString(id) {
            
            if (id <= 9) {
                return id = POKE_API + '00' + id + '.png';
            } else if (id <= 99) {
                return id = POKE_API + '0' + id + '.png';
            } else {
                return id = POKE_API + id + '.png';
            }
        }

            return (
                <div className='Pokecard'>
                    <h2 className='Pokecard-h2'>{pokeFromPokedex.name}</h2>
                    <div className='Pokecard-img'>
                        <img alt={pokeFromPokedex.name} src={idToImgString(pokeFromPokedex.id)}/>
                    </div>
                    <p className='Pokecard-p'>Type: {pokeFromPokedex.type}</p>
                    <p className='Pokecard-p'>EXP: {pokeFromPokedex.base_experience}</p>
                </div>


        );
    }
}

export default Pokecard;