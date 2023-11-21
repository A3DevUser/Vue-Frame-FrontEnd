const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const WFCommonRed = (state = initialState, action) =>{
    switch(action.type){
        case 'WFCommonReq' : return {
            ...state
        }
        case 'WFCommonSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'WFCommonErr' : return{
            loading : true, val : [] , err :action.payload
        }

        default : return {
            ...state
        }
    }
}