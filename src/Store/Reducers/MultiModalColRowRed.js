const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const MultiModalColRowRed = (state = initialState, action) =>{
    switch(action.type){
        case 'MultiModalColRowReq' : return {...state,loading :true}

        case 'MultiModalColRowSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'MultiModalColRowErr' : return {
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