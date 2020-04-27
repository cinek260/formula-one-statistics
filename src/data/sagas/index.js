import { all } from "redux-saga/effects";
import api from "./api";

export default function* rootSaga(dispatch) {
  try {
    yield all([api]);
  } catch (e) {
    console.warn(e.message);
  }
}
