import { createStore } from 'redux';
import rootReducer from "./reducer";
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function configureStore(initialState) {
    const config = {
        key: 'root',
        storage
    }

    const reducer = persistCombineReducers(config, {root: rootReducer});

    const store = createStore(reducer, initialState);

    console.log(store.getState())
    let persistor = persistStore(store, null, () => {
        store.getState()
    });

    return { store, persistor };
}

const { store, persistor } = configureStore({
    root: {
        bttn: false
    }
});

export {store, persistor}
