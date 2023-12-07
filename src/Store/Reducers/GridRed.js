const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const GridRed = (state = initialState, action) =>{
    switch(action.type){
        case 'GridReq' : return {...state,loading :true}

        case 'GridSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'GridErr' : return {
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