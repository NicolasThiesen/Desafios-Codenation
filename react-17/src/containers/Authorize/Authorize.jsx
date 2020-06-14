import React, {useState,useEffect} from 'react';

import { Loading } from '../../components';
import { Redirect } from 'react-router-dom';

import { getToken } from "../../tools/splitUrl";
import { connect } from "react-redux"
import * as Actions from "../../actions"

import "./Authorize.scss"

const Authorize = ({auth,content, dispatch}) => {
    const [status,setStatus] = useState("Loading");
    useEffect(() => {
        if(window.location.hash !== ""){
            const hash = getToken(window.location.hash);
            dispatch(Actions.setAuth({token_type: hash["token_type"],expires_in: hash["expires_in"], access_token: hash["access_token"], isLogged: true}))
        }
        setStatus("idle");
    }, [])
    
    return (
        
        <div className="callback" data-testid="callback">
            {
            auth.isLogged === true && status === "idle" ? <Redirect to="/dashboard"></Redirect> : auth.isLogged !== false && status === "Loading" ? <Loading text="Autenticando..."></Loading> : <Redirect to={{ pathname:"/", state:{from:window.location.href}}}></Redirect>
            }    
        </div>
    )
}

export default connect(state => ({auth: state.auth, content: state.content,}))(Authorize);
