import React from 'react';

const Title = ({ mainTitle, subtitle }) => {
    return (
        <div>
            <h1>{mainTitle}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Title;
