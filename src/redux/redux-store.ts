import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sateBarReducer from "./satebar-reducer";
import {storeType} from "./store";

export type AppStateType = ReturnType<typeof reducers>



let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sateBar:sateBarReducer
})

let store:storeType = createStore(reducers)
export default store