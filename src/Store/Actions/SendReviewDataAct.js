import axios from "axios";
import swal from "sweetalert";

const SendReviewDataReq = (val) =>{
    return {
        type : 'SendReviewDataReq',
        payload : val
    }
};

const SendReviewDataSuccess = (val) =>{
    return {
        type : 'SendReviewDataSuccess',
        payload : val
    }
};

const SendReviewDataErr = (val) =>{
    return {
        type : 'SendReviewDataErr',
        payload : val
    }
};

export const SendReviewData = (data,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(SendReviewDataReq());
        axios.post(`http://localhost:8080/VF/setReviewPlanData`,data,{headers})
        .then((res)=>{
            return swal({
                title:res.data,
                icon:'success'
            })
            dispatch(SendReviewDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(SendReviewDataErr(err))
        })
    }

}


