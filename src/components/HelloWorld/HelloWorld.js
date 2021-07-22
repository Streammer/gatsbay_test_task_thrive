import * as React from "react"
import './styles.scss'
const HelloWorld = () => {
    return (
        <a className='hello-world'
            href='https://www.google.com'
            target='_blank'
            rel='noreferrer'
            style={{textDecoration: 'none'}}
        >
            <h1 className='hello-world__capture'
                style={{
                    color: 'red',
                    textAlign: 'center'
                }}
            >Hello World</h1>
        </a>
    );
};

export default HelloWorld;
