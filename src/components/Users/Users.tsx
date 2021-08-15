import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import s from './Users.module.css';

type UsersPageType = {
    valueUsers: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}




const Users = (props: UsersPageType) => {
if (props.valueUsers.length === 0) {
    props.setUsers([
        {
            id: 1,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUChMGlP-keUWH_P8DKHQQ4R1SNOK5CdMULg&usqp=CAU',
            followed: false,
            fullName: 'Pavel',
            status: 'I am a student',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU',
            followed: true,
            fullName: 'Dima',
            status: 'I am developer',
            location: {city: 'Moskow', country: 'Russia'}
        },
        {
            id: 3,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU',
            followed: false,
            fullName: 'Yra',
            status: 'I am a teacher',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ])
}
    return (
        <div>
            {
                props.valueUsers.map(v =>
                    <div key={v.id}>
                    <span>
                        <div><img className={s.icon} src={v.photo}/></div>
                        <div>
                            {v.followed
                                ? <button onClick={()=>{props.follow(v.id)}}>Follow</button>
                                : <button onClick={()=>{props.unfollow(v.id)}}>UnFollow</button>
                            }
                        </div>
                    </span>
                        <span>
                            <span>
                                <div>{v.fullName}</div>
                                <div>{v.status}</div>
                            </span>
                        <span>
                            <div>{v.location.country}</div>
                            <div>{v.location.city}</div>
                        </span>
                    </span>
                    </div>)
            }

        </div>
    )
}


export default Users;