import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sateBarReducer from "./satebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

export type AppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sateBar:sateBarReducer,
    usersPage:usersReducer,
    auth: authReducer
});

let store: Store<AppStateType> = createStore(rootReducer);
export default store;