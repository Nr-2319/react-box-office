import React from 'react';
import { Link } from 'react-router-dom';

const GenreCard = ({ id, image, name, synopsis, status }) => {
    const synopsisAsText = synopsis
        ? `${synopsis
              .split(' ')
              .slice(0, 15)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No Description Available';

    return (
        <div>
            <div>
                <img src={image} alt="show" />
            </div>

            <h1>{name}</h1>
            <p>{synopsisAsText}</p>
            <p>{status}</p>

            <div>
                <Link to={`/show/${id}`}>Read more</Link>
                <button type="button">Wishlist</button>
            </div>
        </div>
    );
};

export default GenreCard;
