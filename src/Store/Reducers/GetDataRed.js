const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const GetDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'GetDataReq' : return {...state}

        case 'GetDataSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'GetDataErr' : return {
            loading : true,
            val : [],
            err : action.payload
        }

        default : return {...state}
    }
}