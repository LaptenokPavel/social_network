import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sateBarReducer from "./satebar-reducer";


export type AppStateType = ReturnType<typeof rootReducer>




let rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sateBar:sateBarReducer
})

let store:AppStateType = createStore(rootReducer)
export default store