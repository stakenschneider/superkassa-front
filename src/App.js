import React from 'react';
import  {persistor, store} from "./redux/store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import CenterButton from "./components/button/center-button";

const mapStateToProps = (state) => ({
  bttn: state.root.bttn
});

const ConnectedButton = connect(mapStateToProps)(CenterButton);

function App()  {
  return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          {<ConnectedButton/>}
        </Provider>
      </PersistGate>
  );
}

export default App;
