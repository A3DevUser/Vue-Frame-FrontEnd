const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReportTitleColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReportTitleColumnReq' : return {...state,loading :true}

        case 'ReportTitleColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'ReportTitleColumnErr' : return {
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