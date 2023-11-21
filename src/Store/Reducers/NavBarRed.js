const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const NavBarRed = (state = initialState, action) =>{
    switch(action.type){
        case 'NavbarReq' : return {...state}

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
        
        default : return {...state}
    }
}