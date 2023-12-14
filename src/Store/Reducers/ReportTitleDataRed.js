const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReportTitleDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReportTitleDataReq' : return {...state,loading :true}

        case 'ReportTitleDataSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'ReportTitleDataErr' : return {
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