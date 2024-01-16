const initialState ={
    loading : true,
    val : [],
    err : ''
}

export const EditReportRed =(state = initialState, action) =>{
    switch(action.type){
        case 'EditReportReq' : return{...state,loading:true}

        case 'EditReportSuccess' : return{
            loading:false,
            val : action.payload,
            err : ''
        }
        case 'EditReportError' : return{
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