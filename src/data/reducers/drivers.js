import {
  GET_DRIVERS_REQUEST,
  GET_DRIVERS_SUCCESS,
  GET_DRIVERS_FAIL,
} from "../types";

const initialState = [];

const driversReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DRIVERS_REQUEST: {
      return initialState;
    }
    case GET_DRIVERS_SUCCESS: {
      return [...payload.DriverTable.Drivers];
    }
    case GET_DRIVERS_FAIL: {
      return state;
    }
    default:
      return state;
  }
};

export default driversReducer;
