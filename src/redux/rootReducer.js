import { combineReducers } from "@reduxjs/toolkit";

import langReducer from "redux/features/lang";
import catalogReducer from "redux/features/catalog";

export const rootReducer = combineReducers({
    lang: langReducer,
    catalog: catalogReducer,
});
