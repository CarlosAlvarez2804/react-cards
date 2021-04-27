import React from 'react';
import PropTypes from 'prop-types';

function Card({title, image, text, url}) {

    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={image} alt={title} className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'Falta información de la tarjeta'
                    }
                </p>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-outline-secondary rounded-0"
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