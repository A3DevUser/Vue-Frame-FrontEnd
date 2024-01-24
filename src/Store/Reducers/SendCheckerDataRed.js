const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const SendCheckerDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'SendCheckerDataReq' : return {...state,loading :true}
        case 'SendCheckerDataSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'SendCheckerDataErr' : return{
            loading : true, val : [] , err :action.payload
        }

        default : return {
            ...state
        }
    }
}