import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sateBarReducer from "./satebar-reducer";
import {storeType} from "./state";



let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    sateBarReducer
})

let store:storeType = createStore(reducers)
export default store