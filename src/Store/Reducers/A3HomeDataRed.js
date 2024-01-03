const initialState = {
    loading : false,
    val : [],
    err : ''
}

export const A3HomeDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3HomeDataReq' : return {...state,loading :true}

        case 'A3HomeDataSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3HomeDataErr' : return {
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