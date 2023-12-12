const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const DataSouConfGridRed = (state = initialState, action) =>{
    switch(action.type){
        case 'DataSouConfGridActReq' : return {...state,loading :true}

        case 'DataSouConfGridActSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'DataSouConfGridActErr' : return {
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