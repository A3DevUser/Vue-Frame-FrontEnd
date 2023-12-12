const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const DataSouConfSectionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'DataSouConfSectionReq' : return {...state,loading :true}

        case 'DataSouConfSectionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'DataSouConfSectionErr' : return{
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