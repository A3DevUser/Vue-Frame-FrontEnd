const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const A3TestRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3TestReq' : return {...state,loading :true}

        case 'A3TestSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3TestErr' : return {
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