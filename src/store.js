import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const videoState = {
    data: [],
    loading: false,
}

function videoReducer(state = videoState, action) {
    switch (action.type) {
        case `SUCCESS`:
            return {
                ...state,
                data: action.data,
                loading: true,
            }
        case `FAILURE`:
            alert("ERROR");
            return {
                ...state,
            }
        case `FETCH`:
            return {
                ...state,
                loading: false,
            }
        default: return state
    }

}
const myMiddleware = store => next => action => {
    try {
        if (action.type == "FETCH") {

            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${action.query}&key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo`).then(response => response.json()).then(data => {
               //console.log(data.items)    //show fetched videos    
                store.dispatch({ type: "SUCCESS", data: data.items });
            })
        }
    }
    catch (err) {
        store.dispatch({ type: "FAILURE" })
    }
    next(action);
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(videoReducer, composeWithDevTools(
    applyMiddleware(myMiddleware)
))


//GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1
//`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo&id=nq4aU9gmZQk&part=snippet,statistics&type=video&q=javascript`
///youtube API: AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo