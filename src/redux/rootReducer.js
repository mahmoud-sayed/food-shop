import { combineReducers } from "redux";

import cartReducer from './cartReducer/cartReducer';

const rootReducer = combineReducers({ cartReducer });

export default rootReducer;