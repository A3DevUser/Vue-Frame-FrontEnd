const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ConfColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ConfColumnReq' : return {...state,loading :true}

        case 'ConfColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'ConfColumnErr' : return {
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