import React from 'react'
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar () {
    return (
        <aside className={styles.container}>
            <img className={styles.logoSidebar} src="./logo-sidebar.svg" alt="Move.It"/>
        </aside>
    )
}
