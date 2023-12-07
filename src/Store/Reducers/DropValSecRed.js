const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const DropValSecRed = (state = initialState, action) =>{
    switch(action.type){
        case 'DropValSecReq' : return {...state,loading :true}
        case 'DropValSecSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'DropValSecErr' : return{
            loading : true, val : [] , err :action.payload
        }
        case 'ResetAct' : return {
            ...initialState
        }
        default : return {
            ...state
        }
    }
}