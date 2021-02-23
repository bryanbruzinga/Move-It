import { Profiler } from "react"

import styles from '../styles/components/Profile.module.css'

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/bryanbruzinga.png" alt="Bryan da Silva Bruzinga"/>
            <div>
                <strong>Bryan da Silva Bruzinga</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}