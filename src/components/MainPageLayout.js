import React from 'react';
import Nav from './Nav';
import Title from './Title';

const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title
                mainTitle="ANIME OFFICE"
                subtitle="Are you looking for an Anime ?"
            />
            <Nav />
            {children}
        </div>
    );
};

export default MainPageLayout;
