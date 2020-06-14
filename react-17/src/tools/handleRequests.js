import axios from "axios"

import {config} from "../config"

const {spotify} = config;

const api = axios.create({
    baseURL: spotify.webAPI,
})


export const getProfileUser =  (accesToken) =>{
    return  api.get("/me",{headers:{"Authorization":`Bearer ${accesToken}`}});
}

export const getCategories = (accesToken) =>{
    return api.get("/browse/categories?country=BR&locale=pt_BR",{headers:{"Authorization":`Bearer ${accesToken}`}})
}

export const getCategoryPlaylists = (categoryId,accesToken) =>{
    return api.get(`/browse/categories/${categoryId}/playlists`,{headers:{"Authorization":`Bearer ${accesToken}`}})
}

export const getPlayListsTracks = (playlistId,accesToken) => {
    return api.get(`/playlists/${playlistId}/tracks`,{headers:{"Authorization":`Bearer ${accesToken}`}})
}
