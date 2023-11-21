const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const DropValRed = (state = initialState, action) =>{
    switch(action.type){
        case 'DropValReq' : return {
            ...state
        }
        case 'DropValSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'DropValErr' : return{
            loading : true, val : [] , err :action.payload
        }
        default : return {
            ...state
        }
    }
}