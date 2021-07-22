/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import {useEffect, useState} from 'react'
import HelloWorld from './HelloWorld/HelloWorld'
import Video from './Video/Video'
import {getRequest} from '../services/requests'
import './layout.css'

const greeting = 'Hello World'

const Layout = () => {
    const [videos, SetVideos] = useState([])

    useEffect(() => {
        getRequest()
            .then((response) => SetVideos(response))
    }, []);

    return (
        <>
            <HelloWorld greeting={greeting}/>
            {
                videos.map(it => (
                    <Video key={it.id} videoSrcURL={it.url} videoTitle={it.title}/>
                ))
            }
        </>
    )
}

export default Layout
