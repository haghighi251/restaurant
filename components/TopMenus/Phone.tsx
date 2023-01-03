import React from 'react';
import Link from "next/link";

const Phone = () => {
    return (
        <div className='flex text-white justify-center items-center space-x-5'>
            <div className="rounded-full p-2 text-amber-600 cursor-pointer
            border border-amber-600 hover:border-amber-800
            hover:text-white hover:bg-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                </svg>
            </div>
            <div className="grid grid-rows-2 -space-y-1">
                <div className="text-sm text-amber-600 font-boldItalic">Call Now</div>
                <div className="text-lg font-semiBold hover:text-amber-600">
                    <a href={`tel:${process.env.support_phone}`} id='TopMenuPhoneNumber'>{process.env.support_phone}</a>
                </div>
            </div>
            <div className="px-4 py-2 bg-amber-400 rounded cursor-pointer
            text-white font-boldItalic text-lg
            hover:bg-amber-500 border border-amber-600 hover:border-white">
                <Link href='/contact'>Contact Now</Link>
            </div>
        </div>
    );
};

export default Phone;
