const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ActionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ActionReq' : return {...state,loading :true}
        case 'ActionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ActionErr' : return{
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