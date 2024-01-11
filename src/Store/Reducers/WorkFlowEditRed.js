const initialState ={
    loading : true,
    val : [],
    err : ''
}

export const WorkFlowEditRed =(state = initialState, action) =>{
    switch(action.type){
        case 'WorkFlowEditReq' : return{...state,loading:true}

        case 'WorkFlowEditSuccess' : return{
            loading:false,
            val : action.payload,
            err : ''
        }
        case 'WorkFlowEditError' : return{
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