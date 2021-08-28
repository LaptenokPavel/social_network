import React from 'react';
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPage,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import Users from "./Users";

type MapStateToPropsType = {
    valueUsers: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

type MapDispatchToPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage:(pageNumber:number) => void
    setTotalUsersCount:(totalCount:number) => void

}

let mapStateToProps = (state: AppStateType):
    MapStateToPropsType => {
    return {
        valueUsers: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;