const initialState ={
    loading : true,
    val : [],
    err : ''
}

export const FormEditRed =(state = initialState, action) =>{
    switch(action.type){
        case 'FormEditReq' : return{...state,loading:true}

        case 'FormEditSuccess' : return{
            loading:false,
            val : action.payload,
            err : ''
        }
        case 'FormEditError' : return{
            loading:true,
            val: [],
            err : action.payload
        }
        case 'ResetAct' : return {
            ...initialState
        }
        default : return{...state}
    }
}