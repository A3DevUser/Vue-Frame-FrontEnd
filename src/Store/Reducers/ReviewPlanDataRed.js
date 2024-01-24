const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const ReviewPlanDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'ReviewPlanDataReq' : return {...state,loading :true}

        case 'ReviewPlanDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'ReviewPlanDataError' : return{
            loading:true, val:[], error:action.payload
        }

        case 'ResetAct' : return {
            ...initialFieldVal
        }

        default :return state
    }

}