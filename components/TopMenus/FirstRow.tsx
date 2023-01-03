import React from 'react';

const FirstRow = () => {
    return (<div className="flex mx-auto container justify-center md:justify-between px-10 py-2">
        <div className="flex font-semiBoldItalic md:font-boldItalic">
            <div className="text-amber-600">Opening Hour:</div>
            <div className="text-white pl-3 text-md hover:text-amber-600">{process.env.work_hours}</div>
        </div>
        <div className="hidden md:block md:flex gap-8 text-white font-boldItalic">
            <div className="flex gap-x-1 text-amber-600 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
                <a href={`mailto:${process.env.support_email}`} id='supportEmail'
                   className="text-white font-boldItalic text-lg hover:text-amber-600">{process.env.support_email}</a>
            </div>
            <div className="flex gap-x-1 text-amber-600 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
                <span className="text-white hover:text-amber-600" id='supportAddress'>{process.env.address}</span>
            </div>
        </div>
    </div>);
};

export default FirstRow;
