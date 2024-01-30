const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const SendTestScoreDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'TestScoreDataReq' : return {...state,loading :true}

        case 'TestScoreDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'TestScoreDataError' : return{
            loading:true, val:[], error:action.payload
        }

        case 'ResetAct' : return {
            ...initialFieldVal
        }

        default :return state
    }

}