import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../components/general/loading';
import PokemonList from '../components/pokedex/pokemon_list';
import PokemonDetail from '../components/pokedex/pokemon_detail';

import { fetchPokemon } from '../actions/index';
import { bindActionCreators } from 'redux';

class Pokedex extends Component {
    componentWillMount() {
        this.props.fetchPokemon();
    }

    render() {
        if (!this.props.all_pokemon) { return ( <Loading/> ); }
        return (
          <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-4 noPadding">
                  <PokemonList all_pokemon={this.props.all_pokemon} selected_pokemon={this.props.pokemon} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9 col-xs-8 noPadding">
                  <PokemonDetail pokemon={this.props.pokemon} />
              </div>
          </div>
        );
    }
}

export default connect(({ all_pokemon, active_pokemon }) => {
    return { all_pokemon, pokemon: active_pokemon };
}, { fetchPokemon })(Pokedex);
