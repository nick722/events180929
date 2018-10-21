import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem';


const NavigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem
            link="/"
            active
        >
            All Tasks
        </NavigationItem>
        <NavigationItem
            link="/"
        >
            Personal
        </NavigationItem>
    </ul>
);

export default NavigationItems;
