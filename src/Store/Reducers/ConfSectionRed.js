const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ConfSectionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ConfSectionReq' : return {...state,loading :true}

        case 'ConfSectionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ConfSectionErr' : return{
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