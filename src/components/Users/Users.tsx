import React, {useState} from 'react';
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
    followingInProgress: string[]
    followThunk:(userId:string) => void
    unfollowThunk:(userId:string) => void
}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize )
    let[portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageMumber = (portionNumber - 1 ) * portionSize + 1
    let rightPortionPageMumber = portionNumber * portionSize


    return (
        <div>
            <div className={s.paginator}>
                {portionNumber > 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>Press down</button>}
                {pages
                    .filter(p=>p >= leftPortionPageMumber && p<=rightPortionPageMumber)
                    .map(p => <span className={props.currentPage === p ? s.selectedPage : s.pages}
                                      onClick={() => {
                                          props.onPageChanged(p)
                                      }}>{p}</span>
                )
                }
                {portionCount > portionNumber  &&
                <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>Press up</button>}
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