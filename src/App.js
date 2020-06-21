import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, VideoContainer, Video } from "./components"
import { useSelector, useDispatch, useStore } from 'react-redux'



function App() {  
  let myVideos = useSelector(state => state.data);
  let myCurrentPage=useSelector(state => state.currentPage);
  //myVideos=store.getState().data;
  
  //store.subscribe(()=>{myVideos=store.getState().data;console.log( store.getState().data)});
  // myVideos = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  

  // useEffect(() => {
  //   console.log("!", myVideos);
  //  });
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
        text="Find"
      />
     { myVideos ? <VideoContainer inputValue={inputValue}> {myVideos.map((elem,index) => {if(index < myCurrentPage*4 && index>=(myCurrentPage-1)*4) return <Video data={elem} />})}  </VideoContainer> : null }
    </div>
  );
}

export default App;
