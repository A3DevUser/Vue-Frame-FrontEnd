const initialState = {
    loading : false,
    val : [],
    err : ''
}

export const FormExcelPostRed = (state = initialState, action) =>{
    switch(action.type){
        case 'FormExcelReq' : return {...state,loading :true}

        case 'FormExcelSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'FormExcelErr' : return {
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