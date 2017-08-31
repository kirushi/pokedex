import { urlImageMapper } from '../utilities/utilties_reducers';

export default function( state = null, action ) {
    switch(action.type) {
        case 'FETCH_POKEMON':
            const results = action.payload.data.results;
            results.map( (result) => {
                result = urlImageMapper(result);
            })
            return results;
    }
    return state;
}

// function pad(n, length) {
//   var len = length - (''+n).length;
//   return (len > 0 ? new Array(++len).join('0') : '') + n
// }


// export default function() {
//     return [
//         { id: 1, name: 'Bulbasaur', image: '../../assets/001.png' },
//         { id: 2, name: 'Ivysaur', image: '../../assets/002.png' },
//         { id: 3, name: 'Venosaur', image: '../../assets/003.png' },
//         { id: 4, name: 'Charmander', image: '../../assets/004.png' },
//         { id: 5, name: 'Charmeleon', image: '../../assets/005.png' },
//         { id: 6, name: 'Charizard', image: '../../assets/006.png' },
//         { id: 7, name: 'Squirtle', image: '../../assets/007.png' },
//         { id: 8, name: 'Wartortle', image: '../../assets/008.png' },
//         { id: 9, name: 'Blastoise', image: '../../assets/009.png' }
//     ]
// }
