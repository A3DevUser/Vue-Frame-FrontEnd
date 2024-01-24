const initialState = {
    loading : true,
    val : [],
    err : ''
}

export const ReviewTypeFilterRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReviewTypeReq' : return {...state,loading :true}
        case 'ReviewTypeSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ReviewTypeErr' : return{
            loading : true, val : [] , err :action.payload
        }

        default : return {
            ...state
        }
    }
}


export const ReviewFreqFilterRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReviewFreqReq' : return {...state,loading :true}
        case 'ReviewFreqSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ReviewFreqErr' : return{
            loading : true, val : [] , err :action.payload
        }

        default : return {
            ...state
        }
    }
}

export const ReviewSubFreqFilterRed = (state = initialState, action) =>{
    switch(action.type){
        case 'ReviewSubFreqReq' : return {...state,loading :true}
        case 'ReviewSubFreqSuccess' : return {
            loading :false, val : action.payload , err : ''
        }
        case 'ReviewSubFreqErr' : return{
            loading : true, val : [] , err :action.payload
        }

        default : return {
            ...state
        }
    }
}