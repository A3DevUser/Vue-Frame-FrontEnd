import rootReducers from "./Store/Reducers";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";


const store = createStore(rootReducers,applyMiddleware(thunk));

export default store