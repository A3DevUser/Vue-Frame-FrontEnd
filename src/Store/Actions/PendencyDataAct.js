import axios from "axios";

const PendencyDataReq = (val) =>{
    return {
        type : 'PendencyDataReq',
        payload : val
    }
};

const PendencyDataSuccess = (val) =>{
    return {
        type : 'PendencyDataSuccess',
        payload : val 
    }
};

const PendencyDataErr = (val) =>{
    return {
        type : 'PendencyDataErr',
        payload : val
    }
};

export const FetchPendencyData = (userName,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(PendencyDataReq());
        axios.get(`http://localhost:8080/VF/getTasksByUser?currUser=${userName}`, {headers})
        .then((res)=>{
            dispatch(PendencyDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(PendencyDataErr(err))
        })
    }
}


