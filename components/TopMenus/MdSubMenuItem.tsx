import React, {FC} from 'react';
import {MdSubMenuItemProps, SubItem} from "../../typing";
import Link from "next/link";

const MdSubMenuItem: FC<MdSubMenuItemProps> = ({items}: MdSubMenuItemProps): JSX.Element => {

    return (
        <div
<<<<<<< HEAD
            className="grid grid-cols-1 text-white mt-2 hidden group-hover/item:block absolute top-5 left-1 z-5 w-[200px]">
=======
            className="grid grid-cols-1 text-white mt-2 hidden group-hover/item:block absolute top-5 left-1 z-10 w-[200px]">
>>>>>>> development
            {items.map((item: SubItem, index: number) => {
                return <Link href={item.link} key={index}
                             className="text-white py-2 hover:text-amber-600 cursor-pointer font-semibold w-full">
                    <div>{item.name}</div>
                </Link>
            })}
        </div>
    );
};

export default MdSubMenuItem;
