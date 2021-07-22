/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import HelloWorld from './HelloWorld/HelloWorld'
import Video from './Video/Video'
import {videoSrcURL} from "../constants/statikUrls"
import './layout.css'

const Layout = () => {
    const videoTitle = 'YouTube video player'
    const greeting = 'Hello World'
    return (
        <>
            <HelloWorld greeting={greeting}/>
            <Video videoSrcURL={videoSrcURL} videoTitle={videoTitle}/>
        </>
    )
}

export default Layout
