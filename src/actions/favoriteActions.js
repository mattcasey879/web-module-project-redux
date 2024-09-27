export const ADD_FAV = 'ADD_FAV';
export const TOGGLE_FAVS = 'TOGGLE_FAVS';
export const REMOVE_FAV = 'REMOVE_FAV'

export const addFavMovie = (movie) => {
    return ({type: ADD_FAV, payload: movie})
}

export const toggleFavorites = () => {
    return ({type: TOGGLE_FAVS})
}

export const removeFav = (id) => {
    return ({type: REMOVE_FAV, payload: id})
}