import React from 'react'
import SidebarOption from './SidebarOption';
import Search from '@material-ui/icons/Search'
import Home from '@material-ui/icons/Home' 
import LibarayMusic from '@material-ui/icons/LibraryMusic' 
import { useDataLayerValue } from '../ContextRedux/DataLayer';

const Sidebar = () => {

    const [{playlists},dispatch]=useDataLayerValue()

   
    return (
        <div className='sidebar'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQofuFfUyNsuhCROQN6ICgnTOUyJrjiC7sU7w&usqp=CAU"
             alt="" className='sidebar_logo'                 
             />

             <SidebarOption title="Home" Icon={Home}/>
             <SidebarOption title="Search" Icon={Search}/>
             <SidebarOption title="Your Library" Icon={LibarayMusic}/>
             <br/>
            <strong className="sidebar_playlist">
                PlayList
            </strong>
            <hr/>
            {playlists?.items?.map(playlist=>(
                <SidebarOption title={playlist.name} />

            ))}
            <SidebarOption title="hip hop" />
            <SidebarOption title="Solo" />
            <SidebarOption title="Bollywood"/>
            <SidebarOption title="English" />            
            <SidebarOption title="Gazal" />            
            <SidebarOption title="Special 2k20" />            
                        
            
        </div>
    )
}

export default Sidebar
