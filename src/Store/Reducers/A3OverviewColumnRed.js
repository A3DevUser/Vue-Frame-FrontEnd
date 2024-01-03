const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const A3OverviewColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3OverviewColumnReq' : return {...state,loading :true}

        case 'A3OverviewColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3OverviewColumnErr' : return {
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