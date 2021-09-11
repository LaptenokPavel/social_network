import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, followThunk, getUsersThunkCreator,
    setCurrentPage,
    togglefollowingProgress,
    unfollow, unfollowThunk,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";



type MapStateToPropsType = {
    valueUsers: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsersThunkCreator:(currentPage: number, pageSize:number)=>void
    followThunk:(userId:number) => void
    unfollowThunk:(userId:number) => void
}

export type UsersPageType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPageType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
     }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
           }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                valueUsers={this.props.valueUsers}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType):
    MapStateToPropsType => {

    return {
        valueUsers: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
            }
}

const Container = connect(mapStateToProps, {
    setCurrentPage,
    getUsersThunkCreator,
    followThunk,
    unfollowThunk
})(UsersContainer)

export default Container;