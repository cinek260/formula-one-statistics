import React from "react";
import { Drivers, Results } from "./sections";
import { Provider } from "react-redux";
import configureStore from "./data/store";
import MainLayout from "./layouts/MainLayout";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Results />
        <Drivers />
      </MainLayout>
    </Provider>
  );
}

export default App;
