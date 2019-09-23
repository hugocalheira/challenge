export async function authenticate() {
    const urlCallback = `${process.env.APP_URL + process.env.URL_CALLBACK}`;
    const clientId = process.env.SPOTIFY_CLIENT_ID || false;

    if (!clientId)
        throw new Error(
            'You should inform a SPOTIFY_CLIENT_ID in ".env" file.\nMore information: https://developer.spotify.com/dashboard\n'
        );

    const hashParams = {};
    let e;
    const regularExpression = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);

    // eslint-disable-next-line no-cond-assign
    while ((e = regularExpression.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
        window.location.replace(
            `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${urlCallback}`
        );
    } else {
        sessionStorage.setItem('access_token', hashParams.access_token);
    }
}

export const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('access_token');
    if (!accessToken) {
        authenticate();
    }
    return accessToken || false;
};

export const getHeadersAuthorization = () => {
    const accessToken = sessionStorage.getItem('access_token');
    return {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
};
