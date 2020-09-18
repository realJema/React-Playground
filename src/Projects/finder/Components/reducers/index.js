export const initialState = {
    loading: true,
    posts: [],
    post: 111,
    errorMessage: null,
    limit: 10,
    last_value: 0
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          loading: true,
          errorMessage: null
        };
      case "LOAD_POSTS":
        return {
          ...state,
          loading: false,
          posts: state.posts.concat(action.payload),
          last_value: action.last_value
        };
      case "POST_DETAIL":
        return {
          ...state,
          post: action.post
        };
      case "LOAD_FAILURE":
        return {
          ...state,
          loading: false,
          errorMessage: action.error
        };
      default:
        return state;
    }
  };
