import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function fetchingVideoStats(videoStats={}, { data }){
   return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo&id=${data.id.videoId}&part=snippet,statistics`).then(response => response.json()).then(videos => {
         console.log(videos.items[0])
        
    videoStats.channel=videos.items[0].snippet.channelTitle;
    videoStats.viewCount=videos.items[0].statistics.viewCount;
    videoStats.uploadDate=videos.items[0].snippet.publishedAt;
    videoStats.description=videos.items[0].snippet.localized.description;
    videoStats.likes=videos.items[0].statistics.likeCount;
    videoStats.dislikes=videos.items[0].statistics.dislikeCount;
    console.log(videoStats);
     });
}




export function Video({ data }) {
    let videoStats={};

    fetchingVideoStats(videoStats, { data }).catch(()=>fetchingVideoStats(videoStats, { data }));
    return (
        <div className={styles.video}>
        <div className={styles.videoInfo}>
            <div className={styles.frontVideo}>
                <div className={styles.videoTop} style={{ backgroundImage: `url(${data.snippet.thumbnails.high.url})`, backgroundSize: `100% 100%`, }} >
                    <div className={styles.videoTopTitle}>
                        {data.snippet.title}
                    </div>
                </div>
                <div className={styles.videoCenter}>
                    <div className={styles.videoCenterTitle}>
                    <ul>
                       <li> {data.snippet.channelTitle}      </li>             
                       <li>{videoStats.viewCount}</li>
                       <li> {videoStats.uploadDate}</li>
                       <li> {videoStats.likes}</li>
                       <li> {videoStats.dislikes}</li>
                        </ul>
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
            <div className={styles.descriptionVideo}>
            Description
            <p>{videoStats.description}</p>
            </div>
            <button className={styles.videoButton} 
                onClick={(e)=>{
                    (e.target.parentNode.parentNode.classList.toggle(`${styles.flipped}`)  );
               // console.log(e.target.parentNode.parentNode);
                
                }}>
                <FontAwesomeIcon icon={faArrowLeft} />  Back 
                 </button>
            </div>
            </div>
        </div>
    )

}

//style={{background:url(`${data.snippet.thumbnails.default.url}`)}}