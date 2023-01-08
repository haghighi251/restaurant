import React, {FC} from 'react';
import {SmTopMenuRoot, SubItem} from "../../typing";
import Link from "next/link";
import SmSubMenuItem from "./SmSubMenuItem";

const SmRootMenus : FC<SmTopMenuRoot> = ({rootItems, updaterCallback}: SmTopMenuRoot)=> {

    if(rootItems === undefined)
        return <></>

    return (<>
            <Link href={rootItems.link} onClick={() => updaterCallback(rootItems.name)}
                  className='flex justify-between block px-2 py-1 mt-2 rounded text-white
                  font-semiBold hover:text-amber-600 z-10'>
                {rootItems.name}
                {rootItems.hasSubitem && <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
                    </svg>
                </>
                }
            </Link>
        {rootItems.clicked && rootItems.subitems !== undefined && <SmSubMenuItem subitems={rootItems.subitems} /> }
        </>);
};

export default SmRootMenus;
