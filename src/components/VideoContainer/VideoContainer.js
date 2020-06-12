import React from 'react'
import styles from './styles.module.css'


export function VideoContainer({children}){
    return(
    <div className={styles.videoContainer}>
    {children}
    </div>
    )
}