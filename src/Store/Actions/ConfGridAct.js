import axios from "axios";

const ConfGridReq = (val) =>{
    return {
        type : 'ConfGridReq',
        payload : val
    }
};

const ConfGridSuccess = (val) =>{
    return {
        type : 'ConfGridSuccess',
        payload : val
    }
};

const ConfGridErr = (val) =>{
    return {
        type : 'ConfGridErr',
        payload : val
    }
};

export const FetchConfGridData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ConfGridReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getConfSGrid?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(ConfGridSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ConfGridErr(err))
        })
    }

}


