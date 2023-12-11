const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReportConfSectionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReportConfSectionReq' : return {...state,loading :true}

        case 'ReportConfSectionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ReportConfSectionErr' : return{
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