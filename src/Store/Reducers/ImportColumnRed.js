const initialState ={
    loading : true,
    val : [],
    err : ''
}

export const ImportColumnRed =(state = initialState, action) =>{
    switch(action.type){
        case 'ImportColumnReq' : return{...state,loading:true}

        case 'ImportColumnSuccess' : return{
            loading:false,
            val : action.payload,
            err : ''
        }
        case 'ImportColumnError' : return{
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