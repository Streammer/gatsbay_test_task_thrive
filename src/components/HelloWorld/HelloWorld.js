import * as React from 'react'
import {linkToGoogle} from '../../constants/statikUrls'
import './style.scss'

const HelloWorld = ({greeting}) => (
    <a className='hello-world'
       href={linkToGoogle}
       target='_blank'
       rel='noreferrer'
    >
        <h1 className='hello-world__capture'>{greeting}</h1>
    </a>
)

export default HelloWorld
