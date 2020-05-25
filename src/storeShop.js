import { createStore } from "redux";

import reducer from "./Reducers/shopReducer";

const store = createStore(reducer);

export default store;
