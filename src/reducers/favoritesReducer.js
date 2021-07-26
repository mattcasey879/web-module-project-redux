import {TOGGLE_FAVS} from '../actions/favoriteActions'

const initialState = {
    favorites: [],
    displayFavs: false
}


export const favoritesReducer = (state = initialState, action) => {
    switch(action.type){

        case(TOGGLE_FAVS): {
            return {
                ...state,
                displayFavs: !displayFavs
            }
        }
        
        default: 
        return state
    }
}
