import React from 'react';
import Nav from './Nav';
import Title from './Title';

const mainPageLayout = ({ children }) => {
    return (
        <div>
            <Title
                mainTitle="BOX OFFICE"
                subtitle="Are you looking for a movie or an actor ?"
            />
            <Nav />
            {children}
        </div>
    );
};

export default mainPageLayout;
