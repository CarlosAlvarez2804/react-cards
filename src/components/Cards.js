import React, { Fragment } from 'react';
import Card from './Card';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

import './Cards.css'

const cards = [
    {
        id: 1,
        title: 'Requiez',
        image: image1,
        url: 'https://requiez.com/',
    },
    {
        id: 2,
        title: 'Labenze',
        image: image2,
        url: 'https://labenze.com/',
    },
    {
        id: 3,
        title: 'Okamura',
        image: image3,
        url: 'https://okamuramexico.com/',
    },
]

function Cards() {
    return (
        <Fragment>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row justify-content-center" >
                    {
                        cards.map(card => (
                            <div className="col-md-3" key={card.id}>
                                <Card title={card.title} image={card.image} url={card.url} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Cards;
