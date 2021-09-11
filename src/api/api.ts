import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': 'dc569a26-a91b-4790-8229-be2e51017394'}
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`,
            )
                .then(response => {
                    return response.data
                })
        )
    },
    follow(userId: number) {
        return (
        instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
        )

    },
    unfollow(userId: number) {
        return (
            instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
        )}
}
