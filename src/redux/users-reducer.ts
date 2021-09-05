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
    isFetching: boolean
    followingInProgress: boolean
}

export type UsersFollowActionTypes = follow | unfollow | setUsers | setCurrentPage | setTotalUsersCount | toggleIsFetching | togglefollowingProgress


export const unitialStateUsersPage: UsersPageStateType = {
    users: [  ],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
}

const usersReducer = (state: UsersPageStateType = unitialStateUsersPage, action: UsersFollowActionTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
    ...state,
    users: state.users.map(u => u.id === action.userId?{...u, followed:true}:u)
}
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId?{...u, followed:false}:u)
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
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching:action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress:action.followingInProgress
            }
        default:
            return state
    }
}

export type follow = ReturnType<typeof follow>
export type unfollow = ReturnType<typeof unfollow>
export type setUsers = ReturnType<typeof setUsers>
export type setCurrentPage = ReturnType<typeof setCurrentPage>
export type setTotalUsersCount = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetching = ReturnType<typeof toggleIsFetching>
export type togglefollowingProgress = ReturnType<typeof togglefollowingProgress>


export const follow = (userId: number) => {
    return (
        {
            type: 'FOLLOW',
            userId: userId
        } as const
    )
}
export const unfollow = (userId: number) => {
    return (
        {
            type: 'UNFOLLOW',
            userId: userId
        } as const
    )
}

export const setUsers = (users: UsersType[]) => {
    return (
        {
            type: 'SET-USERS',
            users: users
        } as const
    )
}

export const setCurrentPage = (currentPage: number) => {
    return (
        {
            type: 'SET-CURRENT-PAGE',
            currentPage: currentPage
        } as const
    )
}

export const setTotalUsersCount = (totalCount: number) => {
    return (
        {
            type: 'SET-TOTAL-USERS-COUNT',
            count: totalCount
        } as const
    )
}

export const toggleIsFetching = (isFetching: boolean) => {
    return (
        {
            type: 'TOGGLE-IS-FETCHING',
            isFetching: isFetching
        } as const
    )
}

export const togglefollowingProgress = (followingInProgress: boolean) => {

    return (
        {
            type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
            followingInProgress: followingInProgress
        } as const
    )
}
export default usersReducer;