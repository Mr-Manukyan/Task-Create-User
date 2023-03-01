import { userAPI } from "../../api/User-API/User-API"

const SET_USERS = "APP/SET_USERS"
const SET_USER = "APP/SET_USER"
const SET_SEARCH_NAME = "APP/SET_SEARCH_NAME"
const SET_IS_LOADING = "APP/SET_IS_LOADING"


let initialState = {
    users: [],
    isLoading: false,
    searchName: ''
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }

        case SET_USER:
            return {
                ...state,
                users: [...state.users, action.user],
            }


        case SET_SEARCH_NAME:
            return {
                ...state,
                searchName: action.name
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default:
            return state
    }
}

// ActionCreator

export const userActions = {

    setUsers: (users) =>
    ({
        type: SET_USERS,
        users,
    }),

    setUser: (user) =>
    ({
        type: SET_USER,
        user,
    }),

    setSearchName: (name) =>
    ({
        type: SET_SEARCH_NAME,
        name,
    }),

    setIsLoading: (isLoading) =>
    ({
        type: SET_IS_LOADING,
        isLoading
    }),

}

// Thunk

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(userActions.setIsLoading(true))
            const data = await userAPI.getAllUsers()
            if (data.resultCode === 200) {
                dispatch(userActions.setUsers(data.users))
            }
            dispatch(userActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(userActions.setIsLoading(false))
        }
    }
}

export const createOneNewUser = (newUser) => {
    return async (dispatch) => {
        try {
            dispatch(userActions.setIsLoading(true))
            const data = await userAPI.createOneUser(newUser)
            if (data.resultCode === 201) {
                console.log(data)
                dispatch(userActions.setUser(data.user))
            }
            dispatch(userActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(userActions.setIsLoading(false))
        }
    }
}

export const deleteOneUser = (userID) => {

    return async (dispatch) => {
        try {
            dispatch(userActions.setIsLoading(true))
            const data = await userAPI.removeOneUser(userID)
            if (data.resultCode === 200) {
                dispatch(userActions.setUsers(data.users))
            }
            dispatch(userActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(userActions.setIsLoading(false))
        }
    }
}


export const updateOneUserData = (updatedUserData) => {
    return async (dispatch) => {
        try {
            dispatch(userActions.setIsLoading(true))
            const data = await userAPI.updateOneUserData(updatedUserData)
            if (data.resultCode === 200) {
                dispatch(userActions.setUsers(data.users))
            }
            dispatch(userActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(userActions.setIsLoading(false))
        }
    }
}

// export const searchUserByName = (userName) => {
//     return async (dispatch) => {
//         try {
//             dispatch(userActions.setIsLoading(true))
//             const data = await userAPI.searchUserByName(userName)
//             if (data.resultCode === 200) {
//                 dispatch(userActions.setUsers(data.users))
//             }
//             dispatch(userActions.setIsLoading(false))
//         } catch (err) {
//             console.error(err)
//             dispatch(userActions.setIsLoading(false))
//         }
//     }
// }










