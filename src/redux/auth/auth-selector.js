export const selectLogin = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;

export const selectIsRefresh = state => state.auth.isRefreshing;