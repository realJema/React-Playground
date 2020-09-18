import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from '../reducers/index';
import axios from 'axios';

const BACKEND_API = 'http://localhost:5000/native/api/finder/';
const Details = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { post } = state;
	useEffect(() => {
		// fetch the information of the post
		axios
			.post(BACKEND_API + 'details', {
				postId: localStorage.getItem('postId'),
			})
			.then((res) => {
				dispatch({
					type: 'POST_DETAIL',
					post: res.data,
				});
			})
			.catch((error) => {
				// Error
				dispatch({
					type: 'LOAD_FAILURE',
					error: error.message,
				});
      });
	}, []);
	return (
		<div className="row">
			<h1>{post.title}</h1>
			<h6>{post.author}</h6>
			<h6>{post.category}</h6>
			<p>{post.description}</p>
			<h5>{post.likes}</h5>
			<h5>{post.location}</h5>
			<span>{post.sub_title}</span>
		</div>
	);
};
export default Details;
