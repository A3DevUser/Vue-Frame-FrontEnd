const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const SendReviewDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'SendReviewDataReq' : return {...state,loading :true}
        case 'SendReviewDataSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'SendReviewDataErr' : return{
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