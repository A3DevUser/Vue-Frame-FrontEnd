const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ConfGridRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ConfGridReq' : return {...state,loading :true}

        case 'ConfGridSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'ConfGridErr' : return {
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