import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


import styles from './Toolbar.module.css';

const toolbar = (props) => {
    return(
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo/>
            <nav className={styles.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default toolbar;