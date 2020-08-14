import React from 'react'
import Header from './Header'
import { useDataLayerValue } from '../ContextRedux/DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'


const Body = ({spotify}) => {
    const [{discover_weekly,user},dispatch]=useDataLayerValue()
    return (
        <div className='body'>
            <Header spotify={spotify}/>
            <div className="body_info">
                <img 
                src={user?.images[0]?.url} alt=""/>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    {discover_weekly?<p>{discover_weekly?.description}</p> :<p>Man Photos. Find the Man or Men you are looking for in our photo collection.
                     All our pictures are of high quality and can be used for your blog or article - for free.</p>}
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="suffer"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>

                {/* list of songs */}
                {/* {discover_weekly?.track.items.map(item=>(
                    <SongRow track={item.track}/>
                ))} */}
                <SongRow/>
                <SongRow/>
                <SongRow/>
                <SongRow/>
                <SongRow/>
                <SongRow/>

            </div>

        </div>
    )
}

export default Body
