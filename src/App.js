import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, VideoContainer, Video } from "./components"
import { useSelector, useDispatch } from 'react-redux'

function renderVideoContainer(myVideos) {

  if (!myVideos) {

    return (
      <div></div>
    )
  }
  else {
        return (<VideoContainer>
      {
        myVideos.map((elem) => <Video data={elem} />)
      }
    </VideoContainer>)
  }

}


function App() {


  const myVideos = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');



  return (
    <div className="App">
      <Form
        value={inputValue} onChange={setInputValue}
        onSubmit={(e) => {
          if (e !== undefined) {
            e.preventDefault();
          }
          dispatch({ type: 'FETCH', query: inputValue });
        }}
        text="Find"
      />
      {renderVideoContainer(myVideos)}
    </div>
  );
}

export default App;
