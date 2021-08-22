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
}


class Users extends React.Component<UsersPageType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }
    render() {
        return (
            <div>
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