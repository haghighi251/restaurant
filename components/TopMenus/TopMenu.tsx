'use client'
import React, {FC, useState} from 'react';
import Link from "next/link";
import {TopMenuRoot} from "../../typing";
import {MenuSubItems} from "./SubItems";
import SmRootMenus from "./SmRootMenus";
import MdRootMenus from "./MdRootMenus";
import Phone from "./Phone";
import TopSearcher from "../TopSearcher";
import FirstRow from "./FirstRow";
import SmView from "./SmView";

const TopMenu: FC = (): JSX.Element => {

    // This state will control sub menu showing after clicking on the menu button on sm screen's.
    const [smButton, setSmButton] = useState<boolean>(false)
    // Root menu of the site.
    const [rootMenus, setRootMenus] = useState<TopMenuRoot[]>([
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Menu', link: '/#', hasSubitem: true, subitems: MenuSubItems, clicked: false},
        {name: 'Blog', link: '/blog'},
        {name: 'Contact', link: '/contact'},
    ])

    // The updater method for "smButton" state.
    const smButtonUpdater = () => {
        setSmButton(!smButton);
    }

    // The updater of the click status of the menus which have sub items.
    const subMenuUpdater = (name: string) => {
        const updatedData = rootMenus.map(item => {
            if (item.name === name)
                item.clicked = !item.clicked
            return item;
        })
        setRootMenus(updatedData)
    }

    return (
        <header className='bg-gray-800 '>
            {/* First row. Opening hours and contact information */}
            <FirstRow/>

            {/* The second row. Top menu bar. For sm screen, We do have a different component. */}
            <div className='flex justify-between md:justify-evenly md:grid md:grid-cols-4 items-center px-4 py-3 border-t border-gray-700 z-10'>
                {/* site logo */}
                <div className='text-white '>
                    <Link href='/'>
                        <img src='logo.png' className='h-10' alt={process.env.SITE_TITLE}/>
                    </Link>
                </div>

                {/* Top searcher */}
                <div className="md:justify-self-stretch w-2/3"><TopSearcher/></div>

                {/* root menu for screens bigger than sm size */}
                <div className="hidden md:block"><MdRootMenus items={rootMenus}/></div>

                {/* Phone part in the top menu */}
                <div className="hidden md:block justify-self-end"><Phone/></div>

                {/* sm menu button */}
                <button className='block text-gray-500 hover:text-white focus:outline-none md:hidden'
                        onClick={smButtonUpdater}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                    </svg>
                </button>
            </div>

            {/* sm screen view. All of these props just will be used on sm screen, not in bigger screen sizes. */}
            <SmView smButton={smButton} smButtonUpdater={smButtonUpdater} rootMenus={rootMenus} subMenuUpdater={subMenuUpdater} />
        </header>
    );
};

export default TopMenu;
