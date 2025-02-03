import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='text-center py-4'>
            Here is the about page. Please know better us. <br />
            <button className='btn btn-primary text-center my-4'>
            <Link href={'/about/post'}>See Post</Link>
            </button>
        </div>
    );
};

export default AboutPage;