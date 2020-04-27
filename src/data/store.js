import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { middleware as thunkMiddleware } from "redux-saga-thunk";
import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...[...middleware]));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState) {
  const rootReducer = combineReducers({
    ...reducers,
  });

  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([thunkMiddleware, sagaMiddleware])
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
