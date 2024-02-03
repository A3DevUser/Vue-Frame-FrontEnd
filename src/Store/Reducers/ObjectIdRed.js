const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const SendObjectIdRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'ObjectIdReq' : return {...state,val:[],loading :true}

        case 'ObjectIdSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'ObjectIdErr' : return{
            loading:true, val:[], error:action.payload
        }


        default :return state
    }

}