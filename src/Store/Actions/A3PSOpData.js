import axios from "axios";

const A3PsOpDataReq = (val) =>{
    return {
        type : 'A3PsOpDataReq',
        payload : val
    }
};

const A3PsOpDataSuccess = (val) =>{
    return {
        type : 'A3PsOpDataSuccess',
        payload : val 
    }
};

const A3PsOpDataErr = (val) =>{
    return {
        type : 'A3PsOpDataErr',
        payload : val
    }
};

export const FetchA3PsOpDataData = (opId,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(A3PsOpDataReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getOBOutpuByIds?id=${opId}`,{headers})
        .then((res)=>{
            dispatch(A3PsOpDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(A3PsOpDataErr(err))
        })
    }
}


