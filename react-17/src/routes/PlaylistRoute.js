import React,{useEffect} from 'react'
import {connect} from 'react-redux';

import {useParams} from 'react-router-dom';

import { Playlists } from "../containers";

import * as Actions from '../actions'

import {getCategoryPlaylists} from '../tools/handleRequests'

const PlaylistRoute = ({path,auth,content,dispatch}) => {
    const { categoryId } = useParams();
    useEffect(() => {
        async function getPlaylist(){
            const { playlists } = await getCategoryPlaylists(categoryId,auth.accessToken)
                .then(res=> res.data)
                .catch(erro=>{
                    if(erro ===401){
                        dispatch(Actions.logout);
                        return
                    }
                    dispatch(Actions.setCategorieError(erro));
                }) 
            dispatch(Actions.getPlaylistsSuccess(playlists));
        }
        getPlaylist();
    }, [])
    return (
        <Playlists 
            categoryId={categoryId}
            categoryName={content.categories.find(categorie => categoryId === categorie.id)} 
            data={content.playlists} 
            isLoading={content.status==="success"} 
            path={path}>

        </Playlists>
    )
}

export default connect(state => ({auth: state.auth, content: state.content}))(PlaylistRoute)
