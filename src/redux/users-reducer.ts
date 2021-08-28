export type UsersType = {
    id: number
    photos:{small:string}
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}

type UsersPageStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type UsersFollowActionTypes = follow | unfollow | setUsers | setCurrentPage | setTotalUsersCount


export const unitialStateUsersPage: UsersPageStateType = {
    users: [  ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 3
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
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage:action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount:action.count
            }
        default:
            return state
    }
}

export type follow = ReturnType<typeof followAC>
export type unfollow = ReturnType<typeof unfollowAC>
export type setUsers = ReturnType<typeof setUsersAC>
export type setCurrentPage = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCount = ReturnType<typeof setTotalUsersCountAC>


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

export const setCurrentPageAC = (currentPage: number) => {
    return (
        {
            type: 'SET-CURRENT-PAGE',
            currentPage: currentPage
        } as const
    )
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return (
        {
            type: 'SET-TOTAL-USERS-COUNT',
            count: totalUsersCount
        } as const
    )
}
export default usersReducer;