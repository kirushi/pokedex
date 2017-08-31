import { combineReducers } from 'redux';
import AllPokemonReducer from './reducer_pokemon';
import ActivePokemon from './reducer_active_pokemon';

const rootReducer = combineReducers({
  all_pokemon: AllPokemonReducer,
  active_pokemon: ActivePokemon
});

export default rootReducer;
