import axios from "axios";

const ReviewPlanDataReq = (val) =>{
    return {
        type : 'ReviewPlanDataReq',
        payload : val
    }
};

const ReviewPlanDataSuccess = (val) =>{
    return {
        type : 'ReviewPlanDataSuccess',
        payload : val
    }
};

const ReviewPlanDataErr = (val) =>{
    return {
        type : 'ReviewPlanDataErr',
        payload : val
    }
};


export const FetchReviewPlanDataData = (reviewId,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ReviewPlanDataReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getOutputReviewPlan?reviewId=${reviewId}`,{headers})
        .then((res)=>{
            dispatch(ReviewPlanDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReviewPlanDataErr(err))
        })
    }

}


