import React from 'react';
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import Users from "./Users";

type MapStateToPropsType = {
    valueUsers: UsersType[]
}

type MapDispatchToPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users: UsersType[]) => void
}

let mapStateToProps = (state: AppStateType):
    MapStateToPropsType => {
    return {
        valueUsers: state.usersPage.users
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;