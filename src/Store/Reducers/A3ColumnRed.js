const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const A3ColumnRed = (state = initialState, action) =>{
    switch(action.type){
        case 'A3ColumnReq' : return {...state,loading :true}

        case 'A3ColumnSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'A3ColumnErr' : return {
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