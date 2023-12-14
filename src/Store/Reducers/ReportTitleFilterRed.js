const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReportTitleFilterRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReportTitleFilterReq' : return {...state,loading :true}

        case 'ReportTitleFilterSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'ReportTitleFilterErr' : return {
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