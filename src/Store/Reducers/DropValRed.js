const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const DropValRed = (state = initialState, action) =>{
    switch(action.type){
        case 'DropValReq' : return {...state,loading :true}
        case 'DropValSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'DropValErr' : return{
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