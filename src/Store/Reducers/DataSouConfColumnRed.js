const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const DataSouConfColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'DataSouConfColumnReq' : return {...state,loading :true}

        case 'DataSouConfColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'DataSouConfColumnErr' : return {
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