import { FETCH_POSTS, NEW_POSTS, INCREMENT, DECREMENT, AUTH } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts 
    }))
}

export const incrementing = (val) => dispatch => {
    dispatch({
        type: INCREMENT,
        payload: val
    })
}

export const decrementing = () => dispatch => {
    dispatch({
        type: DECREMENT,
        payload: 1
    })
}

export const auth = () => dispatch => {
    dispatch({
        type: AUTH,
    })
}
