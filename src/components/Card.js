import React from 'react';
import PropTypes from 'prop-types';

function Card({title, image, text, url}) {

    return (
        <div className="card text-center bg-light animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={image} alt={title} className="card-img-top" />
            </div>
            <div className="card-body text-light">
                
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-outline-dark"
                >
                    Go to this website
                </a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.string,
}

export default Card;