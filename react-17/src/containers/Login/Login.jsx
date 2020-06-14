import React from 'react';

import './Login.scss';

import Logo from "../../assets/logos/spotify-logo-green.svg"

import {config} from "../../config/index";

const {spotify} = config;


const Login = () => (
    <main className="login" data-testid="login">
        <div className="container">
            <img className="spotify-brand" data-testid="logo" src={Logo} alt="logo"/>
            <h1 className="login__microcopy">
                Faça do seu dia um pouco melhor... 
                <strong>
                    Com música
                    <span>💘</span>
                </strong>
            </h1>
            <a className="login__auth-button" href={`${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`}>Entrar no Spotify</a>
        </div>
    </main>);

export default Login;
