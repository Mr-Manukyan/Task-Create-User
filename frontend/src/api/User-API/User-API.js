import { instance } from "../axios_instance"

export const userAPI = {

    getAllUsers() {
        return instance.get('users/').then((res) => res.data)
    },

    searchUserByName(userName) {
        return instance.get(`users/search?name=${userName}`).then((res) => res.data)
    },

    createOneUser(newUser) {
        return instance.post(`users/create`, newUser).then(res => res.data)
    },

    removeOneUser(userID) {
        return instance.delete(`users/delete/${userID}`).then((res) => res.data)
    },

    updateOneUserData(updatedUserData) {
        return instance.patch(`users/update/data`, updatedUserData).then((res) => res.data)
    },





}