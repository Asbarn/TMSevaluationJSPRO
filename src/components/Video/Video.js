import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faEye, faThumbsDown, faThumbsUp, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'



function getShorterText(text, maxLength) {
    return (text.length > maxLength) ? text.substr(0, maxLength - 1) + '...' : text;
}

export function Video({ data }) {

    const [info, setInfo] = useState(0);
    const refInfo = React.createRef();
    useEffect(() => {
        setInfo(refInfo.current)
    })
    return (
        <div className={styles.video}>
            <div ref={refInfo} className={styles.videoInfo}>
                <div className={styles.frontVideo}>
                    <div className={styles.videoTop} style={{ backgroundImage: `url(${data.snippet.thumbnails.high.url})`, backgroundSize: `100% 100%`, }} >
                        <div className={styles.videoTopTitle}>
                            <a href={`https://www.youtube.com/watch?v=${data.id}`}> {data.snippet.channelTitle} </a>

                        </div>
                    </div>
                    <div className={styles.videoCenter}>
                        <div className={styles.videoCenterTitle}>
                            <ul>
                                <li> <div className={styles.liButton}><FontAwesomeIcon icon={faUser} /></div> <div className={styles.liText}> {getShorterText(data.snippet.channelTitle, 15)} </div>     </li>
                                <li> <div className={styles.liButton}><FontAwesomeIcon icon={faEye} />  </div> <div className={styles.liText}> {data.statistics.viewCount} </div></li>
                                <li> <div className={styles.liButton}><FontAwesomeIcon icon={faCalendarAlt} /> </div> <div className={styles.liText}>{(new Date(data.snippet.publishedAt)).toDateString()}  </div> </li>
                                <li> <div className={styles.liButton}><FontAwesomeIcon icon={faThumbsUp} /></div> <div className={styles.liText}> {data.statistics.likeCount} </div> </li>
                                <li> <div className={styles.liButton}><FontAwesomeIcon icon={faThumbsDown} /></div> <div className={styles.liText}> {data.statistics.dislikeCount} </div> </li>
                            </ul>
                        </div>
                    </div>
                    <button className={styles.videoButton}
                        onClick={(e) => {
                            (info.classList.toggle(`${styles.flipped}`));
                        }}>
                        Description <FontAwesomeIcon icon={faArrowRight} />
                    </button>

                </div>
                <div className={styles.backVideo}>
                    <div className={styles.descriptionVideo}>
                        <h3> Description</h3>
                        <p>{getShorterText(data.snippet.description, 250)}</p>
                    </div>
                    <button className={styles.videoButton}
                        onClick={(e) => {
                            (e.target.parentNode.parentNode.classList.toggle(`${styles.flipped}`));
                        }}>
                        <FontAwesomeIcon icon={faArrowLeft} />  Back
                 </button>
                </div>
            </div>
        </div >
    )

}