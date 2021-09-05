import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/withoutAvatar.jpg";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";


type UsersPropsType = {
    valueUsers: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    togglefollowingProgress: (followingInProgress: boolean) => void
    followingInProgress: boolean
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
                                ? <button disabled={props.followingInProgress}
                                          onClick={() => {
                                              props.togglefollowingProgress(true)
                                              axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${v.id}`, {
                                                  withCredentials: true,
                                                  headers: {'API-KEY': 'dc569a26-a91b-4790-8229-be2e51017394'}
                                              }).then(response => {
                                                  if (response.data.resultCode == 0) {
                                                      props.unfollow(v.id)
                                                  }
                                                  props.togglefollowingProgress(false)
                                              })

                                          }}>UnFollow</button>


                                : <button disabled={props.followingInProgress}
                                          onClick={() => {
                                              props.togglefollowingProgress(true)
                                              axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${v.id}`, {}, {
                                                      withCredentials: true,
                                                      headers: {'API-KEY': 'dc569a26-a91b-4790-8229-be2e51017394'}
                                                  },
                                              ).then(response => {
                                                  if (response.data.resultCode == 0) {
                                                      props.follow(v.id)
                                                  }
                                                  props.togglefollowingProgress(false)
                                              })

                                          }}>Follow</button>
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