const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const WFCommonRed = (state = initialState, action) =>{
    switch(action.type){
        case 'WFCommonReq' : return {...state,loading :true}
        case 'WFCommonSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'WFCommonErr' : return{
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