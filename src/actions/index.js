import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';
export const SELECTED_POKEMON = 'SELECTED_POKEMON';

const POKEMON_URL = 'http://pokeapi.co/api/v2';

export function fetchPokemon() {
    const request = axios.get(`${POKEMON_URL}/pokemon?limit=151`);
    return {
        type: FETCH_POKEMON,
        payload: request
    }
}

export function selectPokemon(pokemon) {
    const request = axios.get(pokemon.url);
    return {
        type: SELECTED_POKEMON,
        payload: request
    }
}
