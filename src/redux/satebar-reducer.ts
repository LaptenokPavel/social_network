export type SateBarPage = {
    id: number
    avatar: string
    name: string
}

type SateBarActionsTypes =  any

export const unitialStateSateBarPage:SateBarPage[] =
    [
        {id: 1, avatar: "picture", name: "Dimych"},
        {id: 2, avatar: "picture", name: "Victor"},
        {id: 3, avatar: "picture", name: "Valera"},
    ]


const sateBarReducer = (state:SateBarPage[] = unitialStateSateBarPage , action: SateBarActionsTypes) => {


    return state
}


export default sateBarReducer;