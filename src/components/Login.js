import React from 'react'
import {loginUrl} from './Spotify'
const Login = () => {
    return (
        <div className='login'>
            <img src='https://web.ist.utl.pt/~ist172680/img/spotify-logo-alt.jpg' 
            alt=""
             className="logo"   
            />
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login
