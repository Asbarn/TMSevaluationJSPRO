import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'





export function Video({ data }) {

    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${data.id.videoId}&key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo`).then(response => response.json()).then(videos => {
        ///console.log(videos.items)

    })
    return (
        <div className={styles.video}>
        <div className={styles.videoInfo}>
            <div className={styles.frontVideo}>
                <div className={styles.videoTop} style={{ backgroundImage: `url(${data.snippet.thumbnails.default.url})`, backgroundSize: `100% 100%` }} >
                    <div className={styles.videoTopTitle}>
                        {data.snippet.title}
                    </div>
                </div>
                <div className={styles.videoCenter}>
                    <div className={styles.videoCenterTitle}>
                        {data.snippet.channelTitle}
                    </div>
                    <div className={styles.videoCenterTitle}>
                        {data.snippet.channelTitle}
                    </div>
                    <div className={styles.videoCenterTitle}>
                        {data.snippet.channelTitle}
                    </div>
                    <div className={styles.videoCenterTitle}>
                        {data.snippet.channelTitle}
                    </div>
                    <div className={styles.videoCenterTitle}>
                        {data.snippet.channelTitle}
                    </div>
                </div>
                <button className={styles.videoButton} 
                onClick={(e)=>{(e.target.parentNode.parentNode.classList.toggle(`${styles.flipped}`)  );
               // console.log(e.target.parentNode.parentNode);
                
                }}>
                Description <FontAwesomeIcon icon={faArrowRight} />
                 </button>

            </div>
            <div className={styles.backVideo}>
            HERE MUST BE Description OF VIDEO!
            </div>
            </div>
        </div>
    )

}

//style={{background:url(`${data.snippet.thumbnails.default.url}`)}}