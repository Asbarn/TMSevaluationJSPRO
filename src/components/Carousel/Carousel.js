import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'



function shiftSlide(dir, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth) {
  console.log(pageswidth.offsetLeft, pageswidth.clientWidth);

  //console.log(videoCont.clientWidth, videoCont.offsetLeft, videoCont.style.left);
  //videoCont.classList.add(`${styles.shifting}`)
  //if (allowShift) {
  let posInitial = videoCont.offsetLeft;
  let posPage = pageswidth.offsetLeft;
  //}

  if (dir == 1) {
    if (myCurrentPage == myMaxPage - 1) {
      dispatch({ type: 'FETCH_MORE', query: inputValue });
      videoCont.style.left = (posInitial - (videoCont.clientWidth)) + "px";
      pageswidth.style.left = ( - 40) + "px";
    }
    else {
      dispatch({ type: 'MOVE_FORWARD' });
      videoCont.style.left = (posInitial - (videoCont.clientWidth)) + "px";
      pageswidth.style.left = ( - 40) + "px";
    }
    //index++;      
  } else if (dir == -1) {
    if (!(myCurrentPage == 1)) {
      dispatch({ type: 'MOVE_BACK' });
      videoCont.style.left = (posInitial + (videoCont.clientWidth)) + "px";
      pageswidth.style.left = (  40) + "px";
    }
    //index--;      
  }
  //};

  //allowShift = false;
}

// function touchStart(e,videoCont,posX1){
//   e = e || window.event;
//   e.preventDefault();
//   videoCont.offsetLeft = videoCont.offsetLeft;

//   if (e.type == 'touchstart') {
//     posX1 = e.touches[0].clientX;
//   } else {
//     posX1 = e.clientX;
//     document.onmouseup = onTouchEnd;
//     document.onmousemove = touchMove(e,videoCont,posX1,posX2);
//   }
// }

function touchMove(e, videoCont, posX1, posX2) {
  e = e || window.event;

  if (e.type == 'dragmove') {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }
  videoCont.style.left = (videoCont.offsetLeft - posX2) + "px";
}

function touchEnd(e, videoCont, posFinal) {
  posFinal = videoCont.offsetLeft;
  if (posFinal - videoCont.offsetLeft < -100) {
    shiftSlide(1, 'drag');
  } else if (posFinal - videoCont.offsetLeft > 100) {
    shiftSlide(-1, 'drag');
  } else {
    videoCont.style.left = (videoCont.offsetLeft) + "px";
  }

  document.onmouseup = null;
  document.onmousemove = null;
}

export function Carousel({ children, videoCont, inputValue }) {
  //console.log(videoCont);
  let posX1 = 0, posX2 = 0, posFinal;
  const dispatch = useDispatch();
  let myCurrentPage = useSelector(state => state.currentPage);
  let myMaxPage = useSelector(state => state.maxPage);
  const [pageswidth, setPagesWidth] = useState(0);
  const refPages = React.createRef();
  useEffect(() => {
    setPagesWidth(refPages.current)
  })
  let pagNumbs = [];
  for (var i = 1; i <= myMaxPage; i++) {
    pagNumbs.push(i);
  }
  console.log(pageswidth.offsetLeft)


  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        {children}
      </div>
      <div className={styles.myButtons}>
        <button className={styles.arrowButton} onClick={(e) => {
          shiftSlide(-1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth)
        }}> <FontAwesomeIcon icon={faArrowLeft} /></button>

        <div ref={refPages} className={styles.pages}> {pagNumbs.map((elem) => {
          return (<div className={styles.arrowButton}> {elem} </div>)

        })} </div>


        <button className={styles.arrowButton}
          onClick={(e) => {
            shiftSlide(1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth)
          }}> <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>

  )
}