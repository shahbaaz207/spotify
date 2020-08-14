import React from 'react'

const SongRow = ({track})=> {
    return (
        <div className="songRow">
            {/* <img src={track.album.images[0].url} className="songRow_album" alt=""/>
            <div className="songRow_info">
               {track? <h1>{track.name}</h1>:
                <h1>Capturing Wind</h1>}
                <p>{
                    track.artists.map((artist)=>artist.name
                    ).join(" ,")}-""
                    {track.album.name}
                </p>
                <p>Jipps Brams-Capturing Wind</p>
            </div> */}

            <img src="https://image.shutterstock.com/image-photo/portrait-sexy-smiling-male-model-260nw-439389172.jpg" className="songRow_album" alt=""/>
            <div className="songRow_info">
              
                <h1>Capturing Wind</h1>
                <p>Jipps Brams-Capturing Wind</p>
            </div>
        </div>
    )
}

export default SongRow
