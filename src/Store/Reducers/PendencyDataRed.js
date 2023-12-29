const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const PendencyDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'PendencyDataReq' : return {...state,loading :true}

        case 'PendencyDataSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'PendencyDataErr' : return {
            loading : true,
            val : [],
            err : action.payload
        }
        
        case 'ResetAct' : return {
            ...initialState
        }

        default : return {...state}
    }
}