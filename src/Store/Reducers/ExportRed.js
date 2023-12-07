const initialState ={
    loading : true,
    val : [],
    err : ''
}

export const ExportRed =(state = initialState, action) =>{
    switch(action.type){
        case 'ExportReq' : return{...state,loading:true}

        case 'ExportSuccess' : return{
            loading:false,
            val : action.payload,
            err : ''
        }
        case 'ExportError' : return{
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