import { idImageMapper } from '../utilities/utilties_reducers';

export default function( state = null, action ) {
    switch(action.type) {
        case 'SELECTED_POKEMON':
            let result = action.payload.data;
            result = idImageMapper(result)
            return result;
    }
    return state;
}
