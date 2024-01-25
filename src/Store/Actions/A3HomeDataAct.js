import axios from "axios";

const A3HomeDataReq = (val) =>{
    return {
        type : 'A3HomeDataReq',
        payload : val
    }
};

const A3HomeDataSuccess = (val) =>{
    return {
        type : 'A3HomeDataSuccess',
        payload : val 
    }
};

const A3HomeDataErr = (val) =>{
    return {
        type : 'A3HomeDataErr',
        payload : val
    }
};

export const FetchA3HomeDataData = (reviewId,vendorType,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(A3HomeDataReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getOutputReviewPlan2?reviewId=${reviewId}&vendorType=${vendorType}`,{headers})
        .then((res)=>{
            dispatch(A3HomeDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(A3HomeDataErr(err))
        })
    }
}


