/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({ id, image, name, synopsis, status, genresIncluded }) => {
    const synopsisAsText = synopsis
        ? `${synopsis
              .split(' ')
              .slice(0, 15)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No Description Available';

    return (
        <StyledShowCard>
            <div className="img-wrapper">
                <img src={image} alt="show" />
            </div>

            <h2>{name}</h2>
            <p>{synopsisAsText}</p>
            <p>{status}</p>
            <div className="animeGenres">
                {genresIncluded.map(element => (
                    <i>{element}&ensp;</i>
                ))}
            </div>
            <div className="btns">
                <Link to={`/show/${id}`}>Read more</Link>
                <button type="button">Wishlist</button>
            </div>
        </StyledShowCard>
    );
};

export default ShowCard;
