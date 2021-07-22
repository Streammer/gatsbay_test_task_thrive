import React from 'react'
import './style.scss'

const Video = ({videoSrcURL, videoTitle}) => (
    <div className='video'>
        <iframe
            width='560'
            height='315'
            src={videoSrcURL}
            title={videoTitle}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
        />
    </div>
)

export default Video
