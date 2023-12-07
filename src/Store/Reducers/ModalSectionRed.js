const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ModalSectionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ModalSectionReq' : return {...state,loading :true}
        case 'ModalSectionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ModalSectionErr' : return{
            loading : true, val : [] , err :action.payload
        }
        case 'ResetAct' : return {
            ...initialState
        }
        default : return {
            ...state
        }
    }
}