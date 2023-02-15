import React from 'react';
import Link from "next/link";
import TheSecondRowInWideScreen from "./TheSecondRowInWideScreen";
import TheSecondRowInSMScreens from "./TheSecondRowInSMScreens";

const TheSecondRow = () => {
    return (
        <>
            <div className="md:hidden">
                <TheSecondRowInSMScreens/>
            </div>
            <div className="hidden md:block">
                <TheSecondRowInWideScreen/>
            </div>
        </>
    );
};

export default TheSecondRow;
