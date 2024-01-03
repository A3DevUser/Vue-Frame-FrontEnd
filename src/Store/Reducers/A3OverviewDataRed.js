const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const A3OverviewDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3OverviewDataReq' : return {...state,loading :true}

        case 'A3OverviewDataSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3OverviewDataErr' : return {
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