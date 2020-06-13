import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Post from "./Components/layout/post";
import {reducer, initialState} from "./Components/reducers/index";

const BACKEND_API = "http://127.0.0.1:5000//playground/api/finder/";

const Finder = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const { posts, errorMessage, loading, limit, last_value} = state;

  // get data before component mounts
  useEffect(() => {
   loadMore();
  }, []);

  // search for a specific post 
  const search = (value) => {
    dispatch({
      type: "LOADING"
    });
    axios.post(BACKEND_API + 'search',{
      params: {
        values: value,
      }
    })
      .then((res) => {
        dispatch({
            type: "LOAD_POSTS",
            payload: res.data
        });
      })
      .catch((error) => {
        // Error
        dispatch({
          type: "LOAD_FAILURE",
          error: error.message
        });
      });
  };
  // load more
  const loadMore = () => {
    axios.post(BACKEND_API + 'data',{
      params: {
        limit: limit,
        last_value: last_value
      }
    })
      .then((res) => {
        dispatch({
            type: "LOAD_POSTS",
            payload: res.data,
            last_value: last_value + 10
        });
      })
      .catch((error) => {
        // Error
        dispatch({
          type: "LOAD_FAILURE",
          error: error.message
        });
      });
  };
  /* const goToDetails = (e) => {
    var data =  e.currentTarget.id; // this is the id of post clicked
    console.log(data)
    dispatch({
      type: 'POST_DETAIL',
      postId: data
    })
  } */
  // search bar input
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        //   console.log('enter button pressed');
        search(e.target.value)
    }
  }
  return (
      <div className="main_finder">
        <div className="col-md-12 container">
          <div className="d-flex justify-content-center">
            <div className="searchbar">
              <input
                className="search_input"
                type="text"
                name=""
                placeholder="Search..."
                onKeyDown={_handleKeyDown}
              />
            </div>
          </div>
          <div className="col-md-12 container justify-content-center">
            <div id="main_container" className="col-md-12 row">
              {/* conditional in case db is inaccesible */}
            {loading && !errorMessage ? (
              <span>loading... </span>
            ) : errorMessage ? (
              <span>Couldn't get data: {errorMessage}</span>
            ) : (
              posts.map((post, index) => (
                <Post data={post} key={index}/>
              ))
            )}
            </div>
            <div className="btn btn-primary"
            onClick={loadMore}
            >Load more</div>
          </div>
        </div>
      </div>
    );
}
export default Finder;
