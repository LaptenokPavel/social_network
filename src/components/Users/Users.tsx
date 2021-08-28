import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/withoutAvatar.jpg'

type UsersPageType = {
    valueUsers: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount:number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


class Users extends React.Component<UsersPageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                          onClick={() => {
                                              this.onPageChanged(p)
                                          }}>{p}</span>
                    )}
                </div>
                {
                    this.props.valueUsers.map(v =>
                        <div key={v.id}>
                    <span>
                        <div><img className={s.icon} src={v.photos.small !== null ? v.photos.small : userPhoto}/></div>
                        <div>
                            {v.followed
                                ? <button onClick={() => {
                                    this.props.follow(v.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.unfollow(v.id)
                                }}>UnFollow</button>
                            }
                        </div>
                    </span>
                            <span>
                            <span>
                                <div>{v.name}</div>
                                <div>{v.status}</div>
                            </span>
                        <span>
                            <div>{'v.location.country'}</div>
                            <div>{'v.location.city'}</div>
                        </span>
                    </span>
                        </div>)
                }
            </div>
        )
    }
}


export default Users;