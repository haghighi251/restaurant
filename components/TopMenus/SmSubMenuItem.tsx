import React, {FC} from 'react';
import {SubItem, SubMenuProps} from "../../typing";
import Link from "next/link";

const SmSubMenuItem: FC<SubMenuProps> = ({subitems}: SubMenuProps): JSX.Element => {
    if (subitems.length < 1 || subitems === undefined)
        return <></>;

    return (
        <div className='flex flex-col px-6 z-20'>
            {subitems.map((item: SubItem, index: number) => (
                <Link href={item.link} key={index} className="text-white py-1 cursor-pointer
                 font-medium hover:text-amber-600 ">
                   {item.name}
                </Link>
            ))}
        </div>
    );
};

export default SmSubMenuItem;
