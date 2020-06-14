import {createStore} from "redux";

const INITIAL_STATE = {
    app : {
        environment: "production",
        name: "react-spotify",
        version: "0.1.0"
    },
    auth: {
       accessToken: "", 
       errorMessage: "",
       expirationTime: "",
       expiresIn: "",
       isLogged: null,
       tokenType: ""
    },
    content: {
        categories: [],
        playlists: [],
        tracks: [],
        playingNowId: null,
        playingNowTrack: null,
        playerHeigh: 0,
        status: "idle",
        errorMessage:""
    },
    user: {
        email: "",
        errorMessage:"",
        name: "",
        status: null,
        thumb: "",
    },
    page: {
        currentPage: ""
    }
};


function reducer(state= INITIAL_STATE, action){
    const {payload} = action;
    switch (action.type) {
        case "SET_USER":
            return  {...state, user: {...state.user, email: payload.email, name: payload.name, status: "success", thumb: payload.thumb} }
        case "SET_AUTH":
            return  {...state, auth: {...state.auth, accessToken: payload.access_token, expiresIn: payload.expires_in, tokenType: payload.token_type, isLogged:payload.isLogged} }  
        case "CHANGE_STATUS":
            return {...state, content: {...state.content , status: payload} }
        case "USER__LOGOUT":
            return INITIAL_STATE;
        case "LOGIN__ERROR":
            return {...state, user: {...state.user, errorMessage: payload}}
        case "GET_CATEGORIES_SUCCESS":
            return {...state, content: {...state.content, categories: payload, status: "success", errorMessage: "" }}
        case "GET_PLAYLISTS_SUCCESS":
            return {...state, content: {...state.content, playlists: payload.items, status: "success", errorMessage: "" }}
        case "GET_TRACKS_SUCCESS":
                return {...state, content: {...state.content, tracks: payload ,status: "success", errorMessage: "" }}
        case "GET_CATEGORIE_ERROR":
            return {...state, content: {...state.content, status: "error", errorMessage: payload }}
        case "REMOVE_TRACK_PLAYER":
            return {...state, content: {...state.content, playingNowId: null,playingNowTrack: null, playerHeight: 0, }}
        case "ADD_TRACK_PLAYER":
            return {...state, content: {...state.content, playingNowId: payload.id, playingNowTrack: payload, }}
        case "SET_PLAYER_HEIGHT":
            return {...state, content: {...state.content, playerHeigh: payload }}
        default:
            return state;
    }
    
}

const store = createStore(reducer);
export default store;