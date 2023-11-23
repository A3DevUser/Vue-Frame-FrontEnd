const initialState = {
    loading : true,
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
        

        default : return {...state}
    }
}