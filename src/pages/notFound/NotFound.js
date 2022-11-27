import React from 'react';
import notFound from '../../assets/images/notFound404.webp';
import useTitle from '../../title/title';

const NotFound = () => {
    useTitle('404 Not Found');
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-4xl mt-10 text-orange-500'>404 Page Not Found</h2>
            <div className='flex justify-center items-center'>
                <img src={notFound} alt=''></img>
            </div>
        </div>
    );
};

export default NotFound;