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
            loading:false,
            val: [],
            err : action.payload
        }
        default : return{...state}
    }
}