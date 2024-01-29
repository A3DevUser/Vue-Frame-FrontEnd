import axios from "axios"

const ReviewTypeReq = (val) =>{
    return {
        type : 'ReviewTypeReq',
        payload : val
    }
}

const ReviewTypeSuccess = (val) =>{
    return {
        type : 'ReviewTypeSuccess',
        payload : val
    }
}

const ReviewTypeErr = (val) =>{
    return {
        type : 'ReviewTypeErr',
        payload : val
    }
}

const ReviewFreqReq = (val) =>{
    return {
        type : 'ReviewFreqReq',
        payload : val
    }
}

const ReviewFreqSuccess= (val) =>{
    return {
        type : 'ReviewFreqSuccess',
        payload : val
    }
}

const ReviewFreqErr= (val) =>{
    return {
        type : 'ReviewFreqErr',
        payload : val
    }
}

const ReviewSubFreqReq = (val) =>{
    return {
        type : 'ReviewSubFreqReq',
        payload : val
    }
}

const ReviewSubFreqSuccess= (val) =>{
    return {
        type : 'ReviewSubFreqSuccess',
        payload : val
    }
}

const ReviewSubFreqErr= (val) =>{
    return {
        type : 'ReviewSubFreqErr',
        payload : val
    }
}

export const FetchReviewType = (token) =>{

    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };

    return (dispatch)=>{
        dispatch(ReviewTypeReq())
        axios.get(`http://localhost:8080/VF/getReviewData`,{headers})
        .then((res)=>{
            dispatch(ReviewTypeSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReviewTypeErr(err))
        })
    }
}

export const FetchReviewFreq = (reviewType,token) =>{

    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };

    return (dispatch)=>{
        dispatch(ReviewFreqReq())
        axios.get(`http://localhost:8080/VF/getReviewFreqDd?reviewType=${reviewType}`,{headers})
        .then((res)=>{
            dispatch(ReviewFreqSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReviewFreqErr(err))
        })
    }
}

export const FetchReviewSubFreq = (reviewFreq,token) =>{

    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };

    return (dispatch)=>{
        dispatch(ReviewSubFreqReq())
        axios.get(`http://localhost:8080/VF/getReviewSubFreqDD?reviewFreq=${reviewFreq}`,{headers})
        .then((res)=>{
            dispatch(ReviewSubFreqSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReviewSubFreqErr(err))
        })
    }
}