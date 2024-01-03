const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const A3PartyColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3PartyColumnReq' : return {...state,loading :true}

        case 'A3PartyColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3PartyColumnErr' : return {
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