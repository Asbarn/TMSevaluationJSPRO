import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

let posX1, posX2, posInit, posFin;

function pagesSlide(videoCont, inputValue, dispatch, myPressedPage, myCurrentPage, myMaxPage, pages) {

  let posInit = videoCont.offsetLeft;
  let posPage = pages.offsetLeft;
  let pageDifference = myPressedPage - myCurrentPage;
  if (pageDifference > 0) {
    if (myCurrentPage >= myMaxPage - 2) {
      dispatch({ type: 'FETCH_MORE', query: inputValue }); dispatch({ type: 'MOVE_FORWARD_PAGE', query: myPressedPage });
      videoCont.style.left = (posInit - (videoCont.clientWidth * Math.abs(pageDifference))) + "px";
      if (myCurrentPage == 1 && myPressedPage == 3) { pages.style.left = (posPage - 25 * Math.abs(pageDifference)) + "px"; }
      else if (!(myCurrentPage == 1 && myPressedPage == 2)) { pages.style.left = (posPage - 50 * Math.abs(pageDifference)) + "px"; }
    }
    else {
      dispatch({ type: 'MOVE_FORWARD_PAGE', query: myPressedPage });
      videoCont.style.left = (posInit - (videoCont.clientWidth * Math.abs(pageDifference))) + "px";
      console.log(myCurrentPage, myPressedPage, myCurrentPage == 1 && myPressedPage != 2);
      if (myCurrentPage == 1 && myPressedPage == 3)
        pages.style.left = (posPage - 25 * Math.abs(pageDifference)) + "px";
      else if (!(myCurrentPage == 1 && myPressedPage == 2)) {
        pages.style.left = (posPage - 50 * Math.abs(pageDifference)) + "px";
      }
    }
  } else if (pageDifference < 0) {
    if (!(myCurrentPage == 1)) {
      dispatch({ type: 'MOVE_BACK_PAGE', query: myPressedPage });
      videoCont.style.left = (posInit + (videoCont.clientWidth * Math.abs(pageDifference))) + "px";
      if (myPressedPage != 1)
        pages.style.left = (posPage + 50 * Math.abs(pageDifference)) + "px";
    }

  }

}


function shiftSlide(dir, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages) {

  let posInit = videoCont.offsetLeft;
  let posPage = pages.offsetLeft;

  if (dir == 1) {
    if (myCurrentPage >= myMaxPage - 2) {
      dispatch({ type: 'FETCH_MORE', query: inputValue });
      videoCont.style.left = (posInit - (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 1)
        pages.style.left = (posPage - 50) + "px";
    }
    else {
      dispatch({ type: 'MOVE_FORWARD' });
      videoCont.style.left = (posInit - (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 1)
        pages.style.left = (posPage - 50) + "px";
    }
  } else if (dir == -1) {
    if (!(myCurrentPage == 1)) {
      dispatch({ type: 'MOVE_BACK' });
      videoCont.style.left = (posInit + (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 2)
        pages.style.left = (posPage + 50) + "px";
    }

  }
}





function touchStart(e, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages) {
  e.preventDefault();
  posInit = videoCont.offsetLeft;
  posX1 = e.clientX;
  //console.log("MOVE_STARTED");
  videoCont.onmousemove = (e) => { touchAction(e, videoCont) };
  videoCont.onmouseup = (e) => { touchEnd(e, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages) };

}
function touchAction(e, videoCont) {
  posX2 = posX1 - e.clientX;
  posX1 = e.clientX;
  videoCont.style.left = (videoCont.offsetLeft - posX2) + "px";
}
function touchEnd(e, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages) {
  e.preventDefault();
  posFin = videoCont.offsetLeft;
  if (posFin - posInit < -10) {
    if (myCurrentPage >= myMaxPage - 2) {
      dispatch({ type: 'FETCH_MORE', query: inputValue });
      videoCont.style.left = (posInit - (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 1)
        pages.style.left = (pages.offsetLeft - 50) + "px";

    }
    else {
      dispatch({ type: 'MOVE_FORWARD' });
      videoCont.style.left = (posInit - (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 1)
        pages.style.left = (pages.offsetLeft - 50) + "px";

    }

    // shiftSlide(1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages);
    // console.log(videoCont.style.left);
    // videoCont.style.left = (videoCont.offsetLeft - (videoCont.clientWidth-(videoCont.offsetLeft - posX2))) + "px";
    // console.log(videoCont.style.left);

  } else if (posFin - posInit > 10) {
    if (!(myCurrentPage == 1)) {
      dispatch({ type: 'MOVE_BACK' });
      videoCont.style.left = (posInit + (videoCont.clientWidth)) + "px";
      if (myCurrentPage != 2)
        pages.style.left = (pages.offsetLeft + 50) + "px";
    }
    else {
      videoCont.style.left = "0px";
    }
    // shiftSlide(-1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages);
    // videoCont.style.left += (posFin - posInit) + "px";
  } else {
    console.log("MOVE_ERROR");
    videoCont.style.left = videoCont.offsetLeft + "px";
  }
  //console.log("MOVE_ENDED");
  videoCont.onmouseup = null;
  videoCont.onmousemove = null;
}


export function Carousel({ children, videoCont, inputValue }) {
  const dispatch = useDispatch();
  let myCurrentPage = useSelector(state => state.currentPage);
  let myMaxPage = useSelector(state => state.maxPage);
  const [pages, setPages] = useState(0);
  const refPages = React.createRef();
  useEffect(() => {
    setPages(refPages.current)
  })
  let pagNumbs = [];
  for (var i = 1; i <= myMaxPage; i++) {
    pagNumbs.push(i);
  }


  return (
    <div className={styles.carousel}>
      <div
        onMouseDown={(e) => { touchStart(e, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages) }}
        className={styles.carouselContainer}>
        {children}
      </div>
      <div className={styles.myButtons}>
        <button className={styles.arrowButton} onClick={(e) => {
          shiftSlide(-1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages)
        }}> <FontAwesomeIcon icon={faArrowLeft} /></button>
        <div className={styles.pagesContainer}>
          <div ref={refPages} className={styles.pages}>
            {pagNumbs.map((elem, index) => <div onClick={() => { pagesSlide(videoCont, inputValue, dispatch, elem, myCurrentPage, myMaxPage, pages) }}
              className={((index + 1) == myCurrentPage ? styles.arrowButtonActive : styles.arrowButton)}> {elem} </div>)}
          </div>
        </div>

        <button className={styles.arrowButton}
          onClick={(e) => {
            shiftSlide(1, videoCont, inputValue, dispatch, myCurrentPage, myMaxPage, pages)
          }}> <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>

  )
}