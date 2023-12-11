const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReportConfColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReportConfColumnReq' : return {...state,loading :true}

        case 'ReportConfColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'ReportConfColumnErr' : return {
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