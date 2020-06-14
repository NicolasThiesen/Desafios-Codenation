import React, {useEffect} from 'react';
import {Switch,useRouteMatch} from "react-router-dom"

import * as Actions from "../actions";

import {connect} from 'react-redux';

import {Dashboard,Topbar,Categories, PrivateRoute} from '../containers';
import {WelcomeBox} from '../components';
import {getProfileUser,getCategories} from "../tools/handleRequests"

import PlaylistRoute from './PlaylistRoute';

import TrackRoute  from './TrackRoute';


const DashboardRoute = ({content,user,auth,dispatch}) => {
    const { url, path } = useRouteMatch()
    useEffect(() => {
        async function getUser(){
            const {images,email,display_name,} = await getProfileUser(auth.accessToken)
                .then(res => res.data)
                .catch(error => 
                    {
                        if(error === 401){
                            return dispatch(Actions.logout)
                        } 
                        dispatch(Actions.loginError(error))})
            dispatch(Actions.setUser({email: email, name: display_name, thumb: images[0].url}))
        }
        getUser()
    }, [auth,dispatch])
    useEffect(() => {
        async function setCategories(){
            const {categories} = await getCategories(auth.accessToken)
                .then(res=>res.data)
                .catch(error=> {
                    if(error ===401){
                        dispatch(Actions.logout);
                        return
                    }
                    dispatch(Actions.setCategorieError(error))
                })
            dispatch(Actions.getCategoriesSuccess(categories.items))
        }
        setCategories();
    }, [auth,dispatch])
    return (
        <Dashboard>
            <Topbar></Topbar>
            <Switch>
                <PrivateRoute exact path={path}>
                    <WelcomeBox name={user.name}/>
                    <Categories data={content.categories} url={url} isLoading={content.status ==="succes" }></Categories>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/:categoryId`}>
                    <PlaylistRoute path={path}></PlaylistRoute>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
                    <TrackRoute></TrackRoute>
                </PrivateRoute>
            </Switch>
        </Dashboard>
    )
}
export default connect(state => ({user: state.user, auth: state.auth, content: state.content}))(DashboardRoute)