const initialState ={
    loading : true,
    val : [],
    err : ''
}

export const DataSourceEditRed =(state = initialState, action) =>{
    switch(action.type){
        case 'DataSourceEditReq' : return{...state,loading:true}

        case 'DataSourceEditSuccess' : return{
            loading:false,
            val : action.payload,
            err : ''
        }
        case 'DataSourceEditError' : return{
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