import React from 'react';

const TopSearcher = () => {
    return (
        <div>
            <input type='text' name='search' placeholder='Search here ...'
                   className='rounded hover:focus:outline-none w-full text-sm md:text-lg
                   ring-1 ring-gray-700 focus:ring-sky-600 font-semiBoldItalic'/>
        </div>
    );
};

export default TopSearcher;
