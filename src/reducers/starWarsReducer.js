import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL
} from "../actions";
const initialState = {
  loading: false,
  characters: [],
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  // Fill me in with the important reducers
  // action types should be FETCHING, SUCCESS and FAILURE
  // your switch statement should handle all of these cases.
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        characters: action.payload
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };


    default:
      return state;
  }
};
