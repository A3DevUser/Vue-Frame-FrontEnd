const IntialValue = {
    loading: true,
    val: {},
    error: ""
}


export const AuthRed = (state = IntialValue, action) => {
    switch (action.type) {
        case "AuthReq": return {...state,loading :true}
        case "AuthSucess": return { loading: false, val: action.payload, error: '' }
        case "AuthError": return { loading: true, val: {}, error: action.payload }
        case 'ResetAct' : return {
            ...IntialValue
        }
        default: return state
    }
}