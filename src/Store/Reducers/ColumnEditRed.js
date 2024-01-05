const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ColumnEditActRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ColumnEditActReq' : return {...state,loading :true}

        case 'ColumnEditActSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'ColumnEditActErr' : return {
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