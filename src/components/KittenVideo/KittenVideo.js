import React from 'react';

const KittenVideo = () => {
    return (
        <div className='kitten-video'>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kr4g2h5YmnU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                >
            </iframe>
        </div>
    );
};

export default KittenVideo;
