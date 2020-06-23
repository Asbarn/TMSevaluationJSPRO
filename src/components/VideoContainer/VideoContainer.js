import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { Video } from '../Video'
export function VideoContainer({ children, inputValue,refer }) {
   
    return (
        <div ref={refer} className={styles.videoContainer}>
            {children}
        </div>
    )
}