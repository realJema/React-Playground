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
		<div className="col-md-12">
			<img className="finder-details-image" src={post.img} alt="photos" />
			<div className="finder-details">
				<h6 className="finder-details-category">{post.category}</h6>
				<h1 className="finder-details-title">{post.title}</h1>
				<div className="container">
					<h5s className="finder-details-author">author: {post.author}</h5s>
					<h5s className="finder-details-location">location: {post.location}</h5s>
				</div>
				<p className="finder-details-sub_title">{post.sub_title}</p>
				<p className="finder-details-description">{post.description}</p>
				<div className="container row finder-details-like">
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-heart"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
						/>
					</svg>
						<p className="finder-details-likes">{post.likes}</p>
				</div>
			</div>
		</div>
	);
};
export default Details;

