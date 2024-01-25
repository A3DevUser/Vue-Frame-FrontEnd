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
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getTasksByUser?currUser=${userName}`, {headers})
        .then((res)=>{
            dispatch(PendencyDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(PendencyDataErr(err))
        })
    }
}


