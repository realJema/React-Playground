export const initialState = {
    loading: true,
    posts: [],
    errorMessage: null
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
          posts: action.payload
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