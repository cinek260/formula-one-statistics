import {
  GET_RESULTS_REQUEST,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_FAIL,
} from "../types";

const initialState = [];

const resultsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RESULTS_REQUEST: {
      return initialState;
    }
    case GET_RESULTS_SUCCESS: {
      return [...payload.RaceTable.Races];
    }
    case GET_RESULTS_FAIL: {
      return state;
    }
    default:
      return state;
  }
};

export default resultsReducer;
