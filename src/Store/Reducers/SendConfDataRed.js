const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const SendConfDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'ConfReq' : return {...state,loading :true}

        case 'ConfSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'ConfError' : return{
            loading:true, val:[], error:action.payload
        }

        case 'ResetAct' : return {
            ...initialFieldVal
        }

        default :return state
    }

}