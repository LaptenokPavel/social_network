import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/withoutAvatar.jpg";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';



type UsersPropsType = {
    valueUsers: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    followThunk:(userId:number) => void
    unfollowThunk:(userId:number) => void
}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => <span className={props.currentPage === p ? s.selectedPage : ''}
                                      onClick={() => {
                                          props.onPageChanged(p)
                                      }}>{p}</span>
                )
                }
            </div>
            {
                props.valueUsers.map(v =>
                    <div key={v.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + v.id}>
                                <img className={s.icon}
                                     src={v.photos.small !== null ? v.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {v.followed
                                ? <button disabled={props.followingInProgress.some(id => id === v.id)}
                                          onClick={() => {
                                              props.unfollowThunk(v.id)
                                               }}>UnFollow</button>


                                : <button disabled={props.followingInProgress.some(id => id === v.id)}
                                          onClick={() => {
                                              props.followThunk(v.id)                                          }}>Follow</button>
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
                                </div>
                                )
                                }
                                </div>
                                )
                            }