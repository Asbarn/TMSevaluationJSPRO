import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function pagesSlide(videoCont, inputValue, dispatch, myPressedPage, myCurrentPage, myMaxPage, pageswidth) {

  let posInitial = videoCont.offsetLeft;
  let posPage = pageswidth.offsetLeft;
  let pageDifference = myPressedPage - myCurrentPage;
  if (pageDifference > 0) {
    if (myCurrentPage >= myMaxPage - 2) {
      dispatch({ type: 'FETCH_MORE', query: inputValue }); dispatch({ type: 'MOVE_FORWARD_PAGE', query: myPressedPage });
      videoCont.style.left = (posInitial - (videoCont.clientWidth * Math.abs(pageDifference))) + "px";
      if (myCurrentPage == 1 && myPressedPage == 3) { pageswidth.style.left = (posPage - 25 * Math.abs(pageDifference)) + "px"; }
      else if (!(myCurrentPage == 1 && myPressedPage == 2)) { pageswidth.style.left = (posPage - 50 * Math.abs(pageDifference)) + "px"; }
    }
    else {
      dispatch({ type: 'MOVE_FORWARD_PAGE', query: myPressedPage });
      videoCont.style.left = (posInitial - (videoCont.clientWidth * Math.abs(pageDifference))) + "px";
      console.log(myCurrentPage, myPressedPage, myCurrentPage == 1 && myPressedPage != 2);
      if (myCurrentPage == 1 && myPressedPage == 3)
        pageswidth.style.left = (posPage - 25 * Math.abs(pageDifference)) + "px";
      else if (!(myCurrentPage == 1 && myPressedPage == 2)) {
        pageswidth.style.left = (posPage - 50 * Math.abs(pageDifference)) + "px";
      }
    }
    //index++;      
  } else if (pageDifference < 0) {
    if (!(myCurrentPage == 1)) {
      dispatch({ type: 'MOVE_BACK_PAGE', query: myPressedPage });
      videoCont.style.left = (posInitial + (videoCont.clientWidth * Math.abs(pageDifference))) + "px";
      if (myPressedPage != 1)
        pageswidth.style.left = (posPage + 50 * Math.abs(pageDifference)) + "px";
    }

  }

}


function shiftSlide(dir, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth) {

  let posInitial = videoCont.offsetLeft;
  let posPage = pageswidth.offsetLeft;

  if (dir == 1) {
    if (myCurrentPage >= myMaxPage - 2) {
      dispatch({ type: 'FETCH_MORE', query: inputValue });
      videoCont.style.left = (posInitial - (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 1)
        pageswidth.style.left = (posPage - 50) + "px";
    }
    else {
      dispatch({ type: 'MOVE_FORWARD' });
      videoCont.style.left = (posInitial - (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 1)
        pageswidth.style.left = (posPage - 50) + "px";
    }
  } else if (dir == -1) {
    if (!(myCurrentPage == 1)) {
      dispatch({ type: 'MOVE_BACK' });
      videoCont.style.left = (posInitial + (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 2)
        pageswidth.style.left = (posPage + 50) + "px";
    }

  }
}


function dragEnd(e, videoCont, posInitial, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth) {
  e.preventDefault();
  let posFinal = videoCont.offsetLeft;
  console.log(posInitial, posFinal);
  if (posFinal - posInitial < -100) {
    shiftSlide(1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth);

  } else if (posFinal - posInitial > 100) {
    shiftSlide(-1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth);
  } else {
    console.log("MOVE_ERROR");
  }
  videoCont.style.left = videoCont.offsetLeft + "px";
  videoCont.onmouseup = null;
  videoCont.onmousemove = null;
}
function dragAction(e, videoCont, posX, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth) {

  let posX1 = posX, posX2;

  posX2 = posX1 - e.clientX;
  posX1 = e.clientX;

  videoCont.style.left = (videoCont.offsetLeft - posX2) + "px";
}

function touchStart(e, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth) {
  e.preventDefault();
  let posInitial = videoCont.offsetLeft;
  let posX1;
  if (e.type == 'touchstart') {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;
  }
  videoCont.onmousemove = (e) => { dragAction(e, videoCont, posX1, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth) };
  videoCont.onmouseup = (e) => { dragEnd(e, videoCont, posInitial, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth) };

}



export function Carousel({ children, videoCont, inputValue }) {
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


  return (
    <div className={styles.carousel}>
      <div
        onMouseDown={(e) => { touchStart(e, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth) }}
        className={styles.carouselContainer}>
        {children}
      </div>
      <div className={styles.myButtons}>
        <button className={styles.arrowButton} onClick={(e) => {
          shiftSlide(-1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth)
        }}> <FontAwesomeIcon icon={faArrowLeft} /></button>
        <div className={styles.pagesContainer}>
          <div ref={refPages} className={styles.pages}> {pagNumbs.map((elem, index) => <div onClick={() => { pagesSlide(videoCont, inputValue, dispatch, elem, myCurrentPage, myMaxPage, pageswidth) }}
            className={((index + 1) == myCurrentPage ? styles.arrowButtonActive : styles.arrowButton)}> {elem} </div>)}
          </div>
        </div>

        <button className={styles.arrowButton}
          onClick={(e) => {
            shiftSlide(1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pageswidth)
          }}> <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>

  )
}