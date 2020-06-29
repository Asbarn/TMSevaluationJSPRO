import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, VideoContainer, Video, Carousel } from "./components"
import { useSelector, useDispatch, useStore } from 'react-redux'



function App() {
  let myVideos = useSelector(state => state.data);
  let myCurrentPage = useSelector(state => state.currentPage);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  //vCont
  const [videoCont, setVideoCont] = useState(0);
  const ref = React.createRef();
  useEffect(() => {
    setVideoCont(ref.current)
  })
  return (
    <div className="App">
      <Form
        value={inputValue} onChange={setInputValue}
        onSubmit={(e) => {
          if (e != undefined) {
            e.preventDefault();
          }
          dispatch({ type: 'FETCH', query: inputValue });

        }}
        text="Search"
      />
      {
        myCurrentPage ?
          <Carousel videoCont={videoCont} inputValue={inputValue}>
            <VideoContainer refer={ref} > {myVideos.map((elem) => <Video data={elem} />)}  </VideoContainer>
          </Carousel> : <div className={StyleSheet.nullCarousel}> </div>
      }

    </div>
  );
}

export default App;
