import { createStore } from "redux";
import thunk from "redux-thunk";
import reducer from './CocktailReducer';
import { applyMiddleware } from "redux";


export const store = createStore(reducer,applyMiddleware(thunk));
