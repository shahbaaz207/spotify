import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img alt="" 
                className="footer_logo"
                src="https://image.shutterstock.com/image-photo/portrait-sexy-smiling-male-model-260nw-439389172.jpg"/>
                <div className="footer_songInfo">
                <h4>Yeah</h4>
                <p>Ushers</p>
                </div>  
            </div>

            <div className='footer_center'>
                <RepeatIcon  className="footer_green"/ >
                <SkipPreviousIcon className="music_icon"/>
                <PlayCircleOutlineIcon className="music_icon"/>
                <SkipNextIcon className="music_icon"/>
                <ShuffleIcon className="footer_green"/>
            </div>

            <div className='footer_right'>
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlayIcon/>
                        </Grid>
                        <Grid item>
                            <VolumeDownIcon/>
                        </Grid>

                        <Grid item xs>
                            <Slider/>
                        </Grid>
                    </Grid>
                </div>

        </div>
    )
}

export default Footer