const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ModalGridRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ModalGridReq' : return {...state,loading :true}

        case 'ModalGridSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'ModalGridErr' : return {
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