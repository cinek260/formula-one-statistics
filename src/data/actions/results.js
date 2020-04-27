import { GET_RESULTS_REQUEST } from "../types";

export const getResults = (year = 2019) => ({
  type: GET_RESULTS_REQUEST,
  payload: {
    endpoint: `${year}/results.json?limit=1000`,
  },
  meta: { thunk: true },
});
