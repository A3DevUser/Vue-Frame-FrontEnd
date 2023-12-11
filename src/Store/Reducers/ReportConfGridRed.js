const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReportConfGridRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReportConfGridReq' : return {...state,loading :true}

        case 'ReportConfGridSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'ReportConfGridErr' : return {
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