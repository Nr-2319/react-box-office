/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ShowGrid = ({ data }) => {
    return (
        <div>
            {data.map(item => (
                <ShowCard
                    key={item._id}
                    id={item._id}
                    name={item.title}
                    image={item.image ? item.image : IMAGE_NOT_FOUND}
                    synopsis={item.synopsis}
                    status={item.status}
                    genresIncluded={item.genres}
                />
            ))}
        </div>
    );
};

export default ShowGrid;
