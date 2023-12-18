
export interface IMolecul {

    type: string
    placeholder: string
    value?: string | number | object | null
    text: string
    register: object
    size: string
}

export interface IUser{
    user: []
    loading: boolean
    error?: string | undefined | null
}
