const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const SendUserDataInfoRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'UserDataReq' : return {...state,loading :true}

        case 'UserDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'UserDataError' : return{
            loading:true, val:[], error:action.payload
        }

        case 'ResetAct' : return {
            ...initialFieldVal
        }

        default :return state
    }

}