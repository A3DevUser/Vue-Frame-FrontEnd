const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReportTitleGridRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReportTitleGridReq' : return {...state,loading :true}

        case 'ReportTitleGridSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'ReportTitleGridErr' : return {
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