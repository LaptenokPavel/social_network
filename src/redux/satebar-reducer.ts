import {ActionsTypes,  SateBarPage} from "./store";

export const unitialStateSateBarPage:SateBarPage[] =
     [
        {id: 1, avatar: "picture", name: "Dimych"},
        {id: 2, avatar: "picture", name: "Victor"},
        {id: 3, avatar: "picture", name: "Valera"},
    ]


const sateBarReducer = (state:SateBarPage[] = unitialStateSateBarPage , action: ActionsTypes) => {


    return state
}

export default sateBarReducer;