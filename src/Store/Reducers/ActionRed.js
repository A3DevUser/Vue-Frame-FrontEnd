const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ActionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ActionReq' : return {
            ...state
        }
        case 'ActionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ActionErr' : return{
            loading : true, val : [] , err :action.payload
        }

        default : return {
            ...state
        }
    }
}