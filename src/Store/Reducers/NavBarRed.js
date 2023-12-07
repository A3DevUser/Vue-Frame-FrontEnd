const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const NavBarRed = (state = initialState, action) =>{
    switch(action.type){
        case 'NavbarReq' : return {...state,loading :true}

        case 'NavbarSuccess' : return {
            loading : false,
            val : action.payload,
            err : ''
        }

        case 'NavbarErr' : return {
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