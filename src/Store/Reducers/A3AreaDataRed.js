const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const A3AreaDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3AreaDataReq' : return {...state,loading :true}

        case 'A3AreaDataSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3AreaDataErr' : return {
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