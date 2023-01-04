import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
    // const { id } = useParams();

    useEffect(() => {
        apiGet();
    }, []);

    return <div>This is a SHow PAge</div>;
};

export default Show;
