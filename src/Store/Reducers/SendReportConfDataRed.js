const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const SendReportConfDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'ReportConfReq' : return {...state,loading :true}

        case 'ReportConfSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'ReportConfError' : return{
            loading:true, val:[], error:action.payload
        }

        case 'ResetAct' : return {
            ...initialFieldVal
        }

        default :return state
    }

}