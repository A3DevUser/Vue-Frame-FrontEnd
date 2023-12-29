const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const PendencyColRed = (state = initialState, action) =>{
    switch(action.type){
        case 'PendencyColReq' : return {...state,loading :true}

        case 'PendencyColSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'PendencyColErr' : return {
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