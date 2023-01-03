import React, {FC} from 'react';
import {MdRootMenusProps, TopMenuRoot} from "../../typing";
import Link from "next/link";
import MdSubMenuItem from "./MdSubMenuItem";

const MdRootMenus: FC<MdRootMenusProps> = ({items}: MdRootMenusProps): JSX.Element => {
    if (items === undefined)
        return <></>

    return (<div className='flex gap-x-1 text-white font-bold text-lg justify-center items-center'>
                {items && items.map((item: TopMenuRoot, index: number) => {
                    return <div className="group/item relative" key={index}>
                        <Link href={item.link}
                              className={`grid grid-cols-2 gap-x-0.5  font-boldItalic hover:text-amber-600 cursor-pointer items-center`}>
                            {item.name}
                            {item.hasSubitem !== undefined && <label className="md:px-1 lg:px-0.5 mr-1 ml-2 md:ml-0 pt-1 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </label>}
                        </Link>
                        {/* Sub menu items */}
                        {item.hasSubitem !== undefined && item.subitems !== undefined && <div className="hidden group-hover/item:block" id={`${item.name}SubItems`}>
                            <MdSubMenuItem items={item.subitems} />
                        </div> }
                    </div>
                })}
            </div>
    );
};

export default MdRootMenus;
