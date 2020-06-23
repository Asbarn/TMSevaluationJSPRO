import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const videoState = {
    data: [],
    nextPageToken: "",
    currentPage: 0,
    maxPage: 0,
};
function fetchVideos(fetchedVideos, maxResults, query, nextPageToken) {
    if (!nextPageToken) {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&key=AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A&type=video`).
            then(response => response.json()).
            then(data => { nextPageToken = data.nextPageToken; return data.items }).
            then(videos => {

                return Promise.all(videos.map((element) => fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A&id=${element.id.videoId}&part=snippet,statistics`)
                    .then((response) => response.json())
                    .then(res => {
                        fetchedVideos.push(res.items[0]);
                    })
                )
                )
            })
    }
    else {

        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&key=AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A&type=video&pageToken=${nextPageToken}`).
            then(response => response.json()).
            then(data => { nextPageToken = data.nextPageToken; return data.items }).
            then(videos => {
                return Promise.all(videos.map((element) => fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A&id=${element.id.videoId}&part=snippet,statistics`)
                    .then((response) => response.json())
                    .then(res => {
                        fetchedVideos.push(res.items[0]);
                    })
                )
                )
            })
    }
}

function videoReducer(state = videoState, action) {
    switch (action.type) {
        case `SUCCESS`:

            return {
                ...state,
                data: action.data,
                nextPageToken: action.nextPageToken,
                currentPage: action.currentPage,
                maxPage: action.maxPage
            };
        case `FAILURE`:
            alert("ERROR IN FETCHING");
            return {
                ...state,
            };
        // case `FETCH`:
        //     console.log(state.currentPage);
        //     return {
        //         ...state,
        //         data: action.data,
        //         nextPageToken: action.nextPageToken,
        //         currentPage: action.currentPage
        //     }
        case `ADD_DATA`:
            //console.log("CurPage: ",action.currentPage);
            return {
                ...state,
                data: [...state.data, ...action.data],
                nextPageToken: action.nextPageToken,
                currentPage: action.currentPage,
                maxPage: action.maxPage
            };
        case `MOVE_NEXT`:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case `MOVE_PREV`:
            console.log(action.currentPage);
            return {
                ...state,
                currentPage: action.currentPage
            };
        default: return state;
    }

}
const myMiddleware = store => next => action => {
    const maxResults = 8;
    let fetchedVideos = [];
    let nextPageToken = store.getState().nextPageToken;
    let currentPage = store.getState().currentPage;
    let maxPage = store.getState().maxPage;
    try {
        if (action.type == "FETCH") {
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${action.query}&key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo&type=video`).
                then(response => response.json()).
                then(data => { nextPageToken = data.nextPageToken; return data.items }).
                then(videos => {
                    return Promise.all(videos.map((element) => fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo&id=${element.id.videoId}&part=snippet,statistics`)
                        .then((response) => response.json())
                        .then(res => {
                            fetchedVideos.push(res.items[0]);
                        })
                    )
                    )
                })
                .then(() => {
                    store.dispatch({
                        type: `SUCCESS`, data: fetchedVideos, nextPageToken: nextPageToken, currentPage: 1, maxPage: (maxResults/4),
                    })
                }
                )
        }
        else if (action.type == "FETCH_MORE") {
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${action.query}&key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo&type=video&pageToken=${nextPageToken}`).
                then(response => response.json()).
                then(data => { nextPageToken = data.nextPageToken; return data.items }).
                then(videos => {
                    return Promise.all(videos.map((element) => fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo&id=${element.id.videoId}&part=snippet,statistics`)
                        .then((response) => response.json())
                        .then(res => {
                            fetchedVideos.push(res.items[0]);
                        })
                    )
                    )
                })
                .then(() => {
                    store.dispatch({
                        type: `ADD_DATA`, data: fetchedVideos, nextPageToken: nextPageToken, currentPage: ++currentPage, maxPage: maxPage+(maxResults/4)
                    })
                }
                )
        }
        else if (action.type == "MOVE_FORWARD") {
            store.dispatch({
                type: `MOVE_NEXT`, currentPage: ++currentPage
            })
        }
        else if (action.type == "MOVE_BACK") {
            store.dispatch({
                type: `MOVE_PREV`, currentPage: --currentPage
            })
        }



        // switch (action.type) {
        //     case "FETCH": {
        //         fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${action.query}&key=AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A&type=video`).
        //             then(response => response.json()).
        //             then(data => { nextPageToken = data.nextPageToken; return data.items }).
        //             then(videos => {
        //                 return Promise.all(videos.map((element) => fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A&id=${element.id.videoId}&part=snippet,statistics`)
        //                     .then((response) => response.json())
        //                     .then(res => {
        //                         fetchedVideos.push(res.items[0]);
        //                     })
        //                 )
        //                 )
        //             })
        //             .then(() => {
        //                 store.dispatch({
        //                     type: `SUCCESS`, data: fetchedVideos, nextPageToken: nextPageToken, currentPage: 1
        //                 })
        //             }
        //             )
        //             break;
        //     }

        //     case "FETCH_MORE": {
        //         fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${action.query}&key=AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A&type=video&pageToken=${nextPageToken}`).
        //             then(response => response.json()).
        //             then(data => { nextPageToken = data.nextPageToken; return data.items }).
        //             then(videos => {
        //                 return Promise.all(videos.map((element) => fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A&id=${element.id.videoId}&part=snippet,statistics`)
        //                     .then((response) => response.json())
        //                     .then(res => {
        //                         fetchedVideos.push(res.items[0]);
        //                     })
        //                 )
        //                 )
        //             })
        //             .then(() => {
        //                 store.dispatch({
        //                     type: `ADD_DATA`, data: fetchedVideos, nextPageToken: nextPageToken, currentPage: ++currentPage
        //                 })
        //             }
        //             )
        //             break;
        //     }
        //     case "MOVE_FORWARD": {
        //         store.dispatch({
        //             type: `ADD_DATA`, data: fetchedVideos, nextPageToken: nextPageToken, currentPage: ++currentPage
        //         })
        //         break;
        //     }
        //     case "MOVE_BACK": {
        //         store.dispatch({
        //             type: `ADD_DATA`, data: fetchedVideos, nextPageToken: nextPageToken, currentPage: --currentPage
        //         })
        //         break;
        //     }
        //      default: {
        //         store.dispatch({
        //             type: `ADD_DATA`, data: fetchedVideos, nextPageToken: nextPageToken, currentPage:  currentPage
        //         })
        //      }

        // }
    }
    catch (err) {
        store.dispatch({ type: "FAILURE IN MIDDLEWARE" })
    }
    next(action);
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(videoReducer, composeEnhancer(
    applyMiddleware(myMiddleware)
))


//GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1
//`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo&id=nq4aU9gmZQk&part=snippet,statistics&type=video&q=javascript`

///youtube API: AIzaSyCJ9aanyS_NBc83zWktBEXnMJaluSJklTo
// youtube api 2: AIzaSyBmZqRz6EcOYH-tvLGtzUO3xHLP9HEa13A