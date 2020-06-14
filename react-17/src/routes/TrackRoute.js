import React,{useEffect} from 'react'
import {connect} from 'react-redux';

import {useParams} from 'react-router-dom';

import { Tracks } from "../containers";

import * as Actions from '../actions'

import {getPlayListsTracks} from '../tools/handleRequests'

const TrackRoute = ({path,auth,content,dispatch}) => {
    const { categoryId, playlistId  } = useParams();
    useEffect(() => {
        async function getPlaylist(){
            const { items } = await getPlayListsTracks(playlistId,auth.accessToken)
                .then(res=> res.data)
                .catch(erro=>{
                    if(erro ===401){
                        dispatch(Actions.logout);
                        return
                    }

                    dispatch(Actions.setCategorieError(erro));
                }) 
                dispatch(Actions.getTracksSuccess(items));
        }
        getPlaylist();
    }, [])
    return (
        <Tracks 
            categoryName={content.categories.find(categorie => categoryId === categorie.id)} 
            data={content.tracks} 
            isLoading={content.status==="success"} 
            path={path}>
        </Tracks>
    )
}

export default connect(state => ({auth: state.auth, content: state.content}))(TrackRoute)
