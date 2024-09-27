import {TOGGLE_FAVS,ADD_FAV, REMOVE_FAV} from '../actions/favoriteActions'

const initialState = {
    favorites: [],
    displayFavs: true
}


export const favoritesReducer = (state = initialState, action) => {
    switch(action.type){

        case(TOGGLE_FAVS): {
            return {
                ...state,
                displayFavs: !state.displayFavs
            }
        }

        case(ADD_FAV): {
            return {
                ...state,
               favorites: [...state.favorites, action.payload ]
            }
        }
        
        case(REMOVE_FAV): {
            return {
                favorites: state.favorites.filter(item => action.payload !== item.id)
            }
        }
        default: 
        return state
    }
}
