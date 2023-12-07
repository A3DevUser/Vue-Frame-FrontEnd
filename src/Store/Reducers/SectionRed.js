const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const SectionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'SectionReq' : return {...state,loading :true}
        case 'SectionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'SectionErr' : return{
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