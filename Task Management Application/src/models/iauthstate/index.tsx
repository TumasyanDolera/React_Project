export interface IAuthState {
    success?: boolean,
    loading: boolean,
    userInfo: null,
    accessToken?: string | null
    error?: null | string,
}