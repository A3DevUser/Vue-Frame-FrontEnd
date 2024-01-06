const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const A3PsOpDataRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3PsOpDataReq' : return {...state,loading :true}

        case 'A3PsOpDataSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3PsOpDataErr' : return {
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