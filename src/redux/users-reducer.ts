export type UsersType = {
    id: number
    photo:string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}

type UsersPageStateType = {
    users: UsersType[]
}

export type UsersFollowActionTypes = follow | unfollow | setUsers


export const unitialStateUsersPage: UsersPageStateType = {
    users: [  ]
}

const usersReducer = (state: UsersPageStateType = unitialStateUsersPage, action: UsersFollowActionTypes) => {
    switch (action.type) {
        case 'FOLLOW':
return {
    ...state,
    users: state.users.map(u => u.id === action.userId?{...u, followed:false}:u)
}
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId?{...u, followed:true}:u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export type follow = ReturnType<typeof followAC>
export type unfollow = ReturnType<typeof unfollowAC>
export type setUsers = ReturnType<typeof setUsersAC>


export const followAC = (userId: number) => {
    return (
        {
            type: 'FOLLOW',
            userId: userId
        } as const
    )
}
export const unfollowAC = (userId: number) => {
    return (
        {
            type: 'UNFOLLOW',
            userId: userId
        } as const
    )
}

export const setUsersAC = (users: UsersType[]) => {
    return (
        {
            type: 'SET-USERS',
            users: users
        } as const
    )
}

export default usersReducer;