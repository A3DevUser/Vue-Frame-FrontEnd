const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReviewDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReviewDataReq' : return {...state,loading :true}
        case 'ReviewDataSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ReviewDataErr' : return{
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