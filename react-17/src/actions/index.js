export const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
}
export const setAuth = (auth) =>{
    return {
        type: "SET_AUTH",
        payload:  auth
    }
}
export const changeStatus = (content) =>{
    return {
        type: "CHANGE_STATUS",
        payload:  content
    }
} 

export const logout = () => {
    return {
        type: "USER__LOGOUT"
    }
}

export const loginError = (error) =>{
    return {
        type: "LOGIN__ERROR",
        payload: error
    }
}

export const getCategoriesSuccess = (items)=>{
    return {
        type: "GET_CATEGORIES_SUCCESS",
        payload: items
    }
}

export const getPlaylistsSuccess = (playlists) => {
    return {
        type: "GET_PLAYLISTS_SUCCESS",
        payload: playlists
    }
}

export const setCategorieError = (error) => {
    return {
        type: "GET_CATEGORIE_ERROR",
        payload: error
    }
}

export const removeTrackToPlayer = () => {
    return {
        type: "REMOVE_TRACK_PLAYER",
    }
}

export const addTrackPlayer = (track) => {
    return {
        type: "ADD_TRACK_PLAYER",
        payload: track
    }
}

export const getTracksSuccess = (track) => {
    return {
        type: "GET_TRACKS_SUCCESS",
        payload: track
    }
}
export const setPlayerHeight = (height) => {
    return {
        type: "SET_PLAYER_HEIGHT",
        payload: height
    }
}