import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPokemon } from '../../actions/index';
import { bindActionCreators } from 'redux';

require('../../../style/modules/pokemon_list.less');

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '', pokemonList: this.props.all_pokemon };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.filterPokemonList(event.target.value);
    }
    filterPokemonList(value) {
        let filteredArray = this.props.all_pokemon.filter( (pokemon) => {
            return this.containsTerm(pokemon.name, value);
        })
        if (!filteredArray) {
            filteredArray = this.props.all_pokemon;
        }
        this.setState( { pokemonList: filteredArray } );
    }
    onFormSubmit(event) {
        event.preventDefault();
    }
    containsTerm(text, term) {
        let transformText = text.toUpperCase();
        let searchTerm = term.toUpperCase();
        return transformText.indexOf(searchTerm) > -1;
    }
    isActive(pokemon) {
        if (this.props.selected_pokemon) {
            return pokemon.id === this.props.selected_pokemon.id
        }
    }
    renderSearch() {
        return (
            <div className="pokemonList__search">
                <form>
                    <input
                        id="js-searchPokemon"
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        placeholder="Search Kanto Pokemon..."
                    />
                <input className="hidden" type="submit"/>
                </form>
            </div>
        );
    }
    renderList() {
        return this.state.pokemonList.map( (pokemon) => {
            return (
                <li key={pokemon.id} onClick={() => this.props.selectPokemon(pokemon)} className={this.isActive(pokemon) ? 'active' : ''}>
                    <div className="row is-flex">
                        <div className="col-md-3">
                            <img className="img-responsive" src={pokemon.image} alt={pokemon.name} />
                        </div>
                        <div className="col-md-9 centerAll">
                            <h4 className="pokemonList__title">{pokemon.name}</h4>
                        </div>
                    </div>
                </li>
            );
        })
    }

    render() {
        return (
            <div className="pokemonListContainer">
                { this.renderSearch() }
                <ul className="pokemonList">
                  { this.renderList() }
                </ul>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { selectPokemon: selectPokemon }, dispatch)
}

export default connect( null, mapDispatchToProps )( PokemonList );
