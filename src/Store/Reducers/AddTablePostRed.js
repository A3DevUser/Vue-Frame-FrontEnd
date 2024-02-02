const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const AddTablePostRed = (state = initialState, action) =>{
    switch(action.type){
        case 'AddTableReq' : return {...state,loading :true}

        case 'AddTableSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'AddTableErr' : return {
            loading : true,
            val : [],
            err : action.payload
        }

        case 'AddTableReset' : return {...initialState}

        default : return {...state}
    }
}