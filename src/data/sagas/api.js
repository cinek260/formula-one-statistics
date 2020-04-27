import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";

export const client = axios.create({
  method: "GET",
  baseURL: "http://ergast.com/api/f1",
});

function* makeApiCall({ type, payload: { endpoint, ...options } = {}, meta }) {
  const [HEAD] = type.split("_REQUEST");
  try {
    const response = yield call(client, endpoint, options);
    yield put({
      type: `${HEAD}_SUCCESS`,
      payload: response.data.MRData,
      meta,
    });
  } catch (error) {
    yield put({
      type: `${HEAD}_FAIL`,
      payload: error,
      meta,
      error: true,
    });
  }
}

export default takeEvery(
  (action) => /\s*_REQUEST$/.test(action.type),
  makeApiCall
);
