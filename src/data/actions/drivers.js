import { GET_DRIVERS_REQUEST } from "../types";

export const getDrivers = () => ({
  type: GET_DRIVERS_REQUEST,
  payload: {
    endpoint: "/drivers.json?limit=1000",
  },
  meta: { thunk: true },
});
