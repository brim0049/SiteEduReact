
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import registerReducer from "./Reducers/registerReducer";
import loginReducer from "./Reducers/loginReducer";
const store = createStore(
    combineReducers(
        {
        registre: registerReducer
        ,login: loginReducer
    }
        ),
        
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;
 