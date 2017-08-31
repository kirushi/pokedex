import React, { Component } from 'react';
import { pad } from '../../utilities/utilties_reducers';

require('../../../style/modules/pokemon_detail.less');
require('../../../style/modules/tile.less');

export default class PokemonDetail extends Component {
    render() {
        if (!this.props.pokemon) {
            return (
                <div className="loadingPokemon">
                    <div>
                        <ul className="pokeballsList">
                            <li className="block text-center"><i className="pokeball"></i></li>
                        </ul>
                        <h6 className="text-center">Select a pokemon to continue...</h6>
                    </div>
                </div>
            );
        }
        return (
            <div className="pokemonDetail">
                <div className="pokemonDetail__image">
                    <img className="img-responsive" src={this.props.pokemon.image} alt={this.props.pokemon.name} />
                </div>
                <div className="pokemonDetail__description">
                    <p>{`#${pad(this.props.pokemon.id)} ${this.props.pokemon.name}`}</p>
                </div>
                <hr />
                <div className="pokemonDetail__map">
                    <h3 className="pokemonDetail__map__title">Locations</h3>
                    <div className="tile tile--white">
                        <div className="tile__content">
                            <div className="pokemonDetail__mapItem">
                                <span className="fa fa-map-marker pokemonDetail__mapIcon"></span>
                                <h4>Mt. Wellington, Auckland, NZ</h4>
                                <span className="pokemonDetail__mapDistance">0.5kms</span>
                            </div>
                        </div>
                    </div>
                    <div className="tile tile--white">
                        <div className="tile__content">
                            <div className="pokemonDetail__mapItem">
                                <span className="fa fa-map-marker pokemonDetail__mapIcon"></span>
                                <h4>Ellerslie, Auckland, NZ</h4>
                                <span className="pokemonDetail__mapDistance">0.2kms</span>
                            </div>
                        </div>
                    </div>
                    <div className="tile tile--white">
                        <div className="tile__content">
                            <div className="pokemonDetail__mapItem">
                                <span className="fa fa-map-marker pokemonDetail__mapIcon"></span>
                                <h4>Mission Bay, Auckland, NZ</h4>
                                <span className="pokemonDetail__mapDistance">2.3kms</span>
                            </div>
                        </div>
                    </div>
                    <div className="tile tile--white">
                        <div className="tile__content">
                            <div className="pokemonDetail__mapItem">
                                <span className="fa fa-map-marker pokemonDetail__mapIcon"></span>
                                <h4>Penrose, Auckland, NZ</h4>
                                <span className="pokemonDetail__mapDistance">0.8kms</span>
                            </div>
                        </div>
                    </div>
                    <div className="tile tile--white">
                        <div className="tile__content">
                            <div className="pokemonDetail__mapItem">
                                <span className="fa fa-map-marker pokemonDetail__mapIcon"></span>
                                <h4>Otahuhu, Auckland, NZ</h4>
                                <span className="pokemonDetail__mapDistance">3.2kms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
