/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react';
import GenreCard from './GenreCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const GenreGrid = ({ data }) => {
    return (
        <div>
            {data.map(item => (
                <GenreCard
                    key={item._id}
                    id={item._id}
                    name={item.title}
                    image={item.image ? item.image : IMAGE_NOT_FOUND}
                    synopsis={item.synopsis}
                    status={item.status}
                />
            ))}
        </div>
    );
};

export default GenreGrid;
