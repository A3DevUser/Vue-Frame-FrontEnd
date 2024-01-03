const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const A3SaveRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3SaveReq' : return {...state,loading :true}

        case 'A3SaveSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3SaveErr' : return {
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