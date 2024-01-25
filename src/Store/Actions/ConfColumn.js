import axios from "axios";

const ConfColumnReq = (val) =>{
    return {
        type : 'ConfColumnReq',
        payload : val
    }
};

const ConfColumnSuccess = (val) =>{
    return {
        type : 'ConfColumnSuccess',
        payload : val
    }
};

const ConfColumnErr = (val) =>{
    return {
        type : 'ConfColumnErr',
        payload : val
    }
};

export const FetchConfColumnData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ConfColumnReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getConfColumn?formId=${id}`, {headers})
        .then((res)=>{
            dispatch(ConfColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ConfColumnErr(err))
        })
    }

}


