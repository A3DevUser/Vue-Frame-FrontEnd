const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const EditableCellGidFidDBRed = (state = initialState, action) =>{
    switch(action.type){
        case 'EditableCellGidFidDBvalReq' : return {...state,loading :true}

        case 'EditableCellGidFidDBvalSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        } 

        case 'EditableCellGidFidDBvalErr' : return {
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