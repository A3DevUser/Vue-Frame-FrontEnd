const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const SubSectionRed = (state = initialState, action) =>{
    switch(action.type){
        case 'SubSectionReq' : return {
            ...state
        }
        case 'SubSectionSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'SubSectionErr' : return{
            loading : true, val : [] , err :action.payload
        }
        case 'ResetAct' : return {...state}

        default : return {
            ...state
        }
    }
}