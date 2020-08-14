import React, { useEffect} from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromResponse } from "./components/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./ContextRedux/DataLayer";

const spotify = new SpotifyWebApi();

export default function App() {
  const [{ user,token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    
    if (_token) {
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then(playlists=>{
      dispatch({
        type:'SET_PLAYLIST',
        playlists:playlists
      })
    })

    spotify.getPlaylist("37i9DQZEVcIJazRV9iSoM").then(res=>{
      dispatch({
        type:"SET_WEEKLY",
        discover_weekly:res
      })
    })
  }, [user,dispatch]);
  
   console.log("user",user)
  return <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}
