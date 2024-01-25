import axios from "axios";

const PendencyColReq = (val) =>{
    return {
        type : 'PendencyColReq',
        payload : val
    }
};

const PendencyColSuccess = (val) =>{
    return {
        type : 'PendencyColSuccess',
        payload : val
    }
};

const PendencyColErr = (val) =>{
    return {
        type : 'PendencyColErr',
        payload : val
    }
};

export const FetchPendencyColData = (token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(PendencyColReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getTaskConfColumn`, {headers})
        .then((res)=>{
            dispatch(PendencyColSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(PendencyColErr(err))
        })
    }

}


