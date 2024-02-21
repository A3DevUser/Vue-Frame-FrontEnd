const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const EditableCellPathDBRed = (state = initialState, action) =>{
    switch(action.type){
        case 'EditableCellPathDBvalReq' : return {...state,loading :true}

        case 'EditableCellPathDBvalSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'EditableCellPathDBvalErr' : return {
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