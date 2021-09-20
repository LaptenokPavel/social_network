import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': '0003a184-30c1-478f-8924-d6e12f2c3af7'}
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
    follow(userId: string) {
        return (
        instance.post(`follow/${userId}`)
        )

    },
    unfollow(userId: string) {
        return (
            instance.delete(`follow/${userId}`)
        )},
    getProfile(userId: string) {
       return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
       getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string) {
        return instance.put(`profile/status`, {status:status})
    }
}


export const authAPI = {
    me() {
       return instance.get(`auth/me`)
    }
}