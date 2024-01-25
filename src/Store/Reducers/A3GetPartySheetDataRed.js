const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const A3GetPartySheetDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'A3GetPartySheetDataReq' : return {...state,loading :true}

        case 'A3GetPartySheetDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'A3GetPartySheetDataError' : return{
            loading:true, val:[], error:action.payload
        }

        case 'ResetAct' : return {
            ...initialFieldVal
        }

        default :return state
    }

}