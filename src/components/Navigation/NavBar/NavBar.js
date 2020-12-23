import React from 'react';
import NavItem from './NavItem/NavItem';

const navBar = () => {
    return (
        <nav>
            <ul>
                <NavItem link='/'>Home</NavItem>
            </ul>
        </nav>
    );
}

export default navBar;