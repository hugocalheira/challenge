import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from './styles';

const stateKey = process.env.STATE_KEY; // 'spotify_auth_state';
const clientId = process.env.SPOTIFY_CLIENT_ID || false;
const redirectUri = process.env.APP_URL + process.env.URL_CALLBACK;
const scope = 'playlist-read-private playlist-read-collaborative playlist-modify-public user-read-recently-played playlist-modify-private ugc-image-upload user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-email user-top-read user-read-playback-state';

if(!clientId)
throw new Error(
    'You should inform a SPOTIFY_CLIENT_ID in ".env" file.\nMore information: https://developer.spotify.com/dashboard\n'
);

function generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export default function SpotifyAuth() {

    const [accessToken, setAccessToken] = useState()
    const [loading, setLoading] = useState(false)

    function getHashParams() {
        const hashParams = {};
        const r = /([^&;=]+)=?([^&;]*)/g;
        const q = window.location.hash.substring(1);
        let e = r.exec(q);
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }

    useEffect(() => {
        const params = getHashParams();
        console.log(params)

        const { access_token, state } = params;
        const storedState = sessionStorage.getItem(stateKey);

        if (access_token) {
            sessionStorage.setItem('access_token', access_token);
            setAccessToken(access_token)
        }

        if (access_token && (state == null || state !== storedState)) {
            alert('There was an error during the authentication');
        } else {
            sessionStorage.removeItem(stateKey);
        }
    },[])

    function handleRedirect() {
        setLoading(true);
        const state = generateRandomString(16);
        sessionStorage.setItem(stateKey, state);

        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(clientId);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirectUri);
        url += '&state=' + encodeURIComponent(state);

        window.location = url;
    }
    
    return !accessToken ? (
        <Container>
            <button className={loading ? 'loading' : ''} onClick={handleRedirect}>{ !loading ? 'Conecte ao Spotify' : 'conectando...' }</button>
        </Container>
    ) : (
        <Redirect to='/' />
    )
}
