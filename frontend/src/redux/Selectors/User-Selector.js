export const getAllUsers = (state) => {
    return state.usersPage.users
}

export const getUsersPageIsLoading = (state) => {
    return state.usersPage.isLoading
}

export const getSearchName = (state) => {
    return state.usersPage.searchName
}