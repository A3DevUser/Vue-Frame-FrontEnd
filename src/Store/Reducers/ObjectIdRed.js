const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const SendObjectIdRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'ObjectIdReq' : return {...state,loading :true}

        case 'ObjectIdSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'ObjectIdErr' : return{
            loading:true, val:[], error:action.payload
        }

        case 'ResetAct' : return {
            ...initialFieldVal
        }

        default :return state
    }

}