import React from 'react';
import { Link } from 'react-router-dom';
import { StyledGenreCard } from './GenreCard.styled';

const GenreCard = ({ id, image, name, synopsis, status }) => {
    const synopsisAsText = synopsis
        ? `${synopsis
              .split(' ')
              .slice(0, 15)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No Description Available';

    return (
        <StyledGenreCard>
            <div className="img-wrapper">
                <img src={image} alt="show" />
            </div>

            <h2>{name}</h2>
            <p>{synopsisAsText}</p>
            <p>{status}</p>

            <div className="btns">
                <Link to={`/show/${id}`}>Read more</Link>
                <button type="button">Wishlist</button>
            </div>
        </StyledGenreCard>
    );
};

export default GenreCard;
