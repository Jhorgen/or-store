import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from './reducers/cartReducer.js'
import thunk from 'redux-thunk'
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';



function configureStore(initialState = {}) {
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    form: persistReducer(
      {
        key: "form", // key for localStorage key, will be: "persist:form"
        storage,
        debug: true,
        blacklist: ['foo'],
      },
      rootReducer
    ),
  });

  const store = createStore(persistReducer({
    key: "root",
    debug: true,
    storage,
    whitelist: ['auth'],
  }, reducer), initialState, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)));



console.log("initialState", store.getState());

const persistor = persistStore(store, null, () => {
  // if you want to get restoredState
  console.log("restoredState", store.getState());
});

return { store, persistor };
}

export default configureStore;
