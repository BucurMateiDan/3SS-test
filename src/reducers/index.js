import {combineReducers} from "redux";
import PopularReducer from "./reducer_popular";

const rootReducer = combineReducers ({
    popular: PopularReducer
})

export default rootReducer;

