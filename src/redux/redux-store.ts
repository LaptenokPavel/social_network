import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sateBarReducer from "./satebar-reducer";
import {storeType} from "./store";



let reducers = combineReducers({
    dialogsReducer:dialogsReducer,
    profileReducer:profileReducer,
    sateBarReducer:sateBarReducer
})

let store:storeType = createStore(reducers)
export default store