import React from 'react';

const page = ({params}) => {
    console.log({params})
    return (
        <div className='h-screen'>
            <p>{params.features[1]}</p>
            <p>{params.features[2]}</p>
            <p>This is bull sheet.</p>
        </div>
    );
};

export default page;