import React from 'react'
import {Link} from 'react-router-dom'

//import batman from '../../assets/dc-batman.jpg'; importar imagen estatica
const heroImages = require.context('../../assets');
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    //const imgPath = `/assets/${id}.jpg`;
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            className="card-img"
                            alt={superhero} 
                            //src={imgPath}
                            //src={batman} imagen estatica 
                            src = {heroImages(`./${id}.jpg`).default}
                            >
                        </img>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                <p className ="text-muted">{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                ..Mas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
