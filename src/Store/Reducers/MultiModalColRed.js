const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const MultiModalColRed = (state = initialState, action) =>{
    switch(action.type){
        case 'MultiModalColReq' : return {...state,loading :true}

        case 'MultiModalColSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'MultiModalColErr' : return {
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