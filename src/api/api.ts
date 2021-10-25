import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': '4bf3a3d9-0db4-4b71-80a6-6c3cd93f4f1e'}
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
    },
    savePhoto(file:any) {
           const formData = new FormData()
        formData.append('image', file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}


export const authAPI = {
    me() {
       return instance.get(`auth/me`)
    },
    login(email:string, password:string, rememberMe:boolean = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}