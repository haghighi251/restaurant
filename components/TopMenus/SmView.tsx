import React, {FC, memo} from 'react';
import Link from "next/link";
import SmRootMenus from "./SmRootMenus";
import {SmViewProps} from "../../typing";

const SmView: FC<SmViewProps> = ({smButton, smButtonUpdater, rootMenus, subMenuUpdater}: SmViewProps) : JSX.Element => {
    return (
        <div
            className={`px-2 pt-2 pb-4 ${smButton ? 'visible' : 'hidden'} bg-gray-800 absolute left-0 top-0 right-12`}>
            <div className='flex justify-between px-4 py-3'>
                {/* site logo in sm screen */}
                <div className='text-white'>
                    <Link href='/'>
                        <img src='logo.png' className='h-8' alt={process.env.SITE_TITLE}/>
                    </Link>
                </div>
                <div className='text-gray-400 hover:text-white focus:text-white cursor-pointer md:hidden'
                     onClick={smButtonUpdater}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
            </div>
            {rootMenus && rootMenus.map((item, index) => {
                return <SmRootMenus rootItems={item} updaterCallback={subMenuUpdater} key={index}/>
            })}
        </div>
    );
};

export default memo(SmView);
