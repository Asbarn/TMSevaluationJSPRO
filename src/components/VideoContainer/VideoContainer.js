import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { Video } from '../Video'
export function VideoContainer({ children }, inputValue) {
    const dispatch = useDispatch();
    //console.log(inputValue);
    return (
        <div>
            <div className={styles.videoContainer}>
                {//children

                    children
                }

            </div>
            <div className={styles.myButtons}>
                <div className={styles.arrowButton}>
                    <button onClick={() => { dispatch({ type: 'MOVE_BACK', query: inputValue }) }}> <FontAwesomeIcon icon={faArrowLeft} /></button>
                </div>
                <div className={styles.arrowButton}>
                    <button onClick={() => { dispatch({ type: 'FETCH_MORE', query: inputValue }) }}> <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    )
}