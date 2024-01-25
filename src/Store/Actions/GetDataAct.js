import axios from "axios";

const GetDataReq = (val) =>{
    return {
        type : 'GetDataReq',
        payload : val
    }
};

const GetDataSuccess = (val) =>{
    return {
        type : 'GetDataSuccess',
        payload : val
    }
};

const GetDataErr = (val) =>{
    return {
        type : 'GetDataErr',
        payload : val
    }
};

export const FetchGetData = (formId,token,userId,flagData) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(GetDataReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getTableData?formId=${formId}&VF_CURRENT_USER=${userId}&daysFlag=${flagData}`, {headers})
        .then((res)=>{
            dispatch(GetDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(GetDataErr(err))
        })
    }

}


