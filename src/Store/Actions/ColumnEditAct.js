import axios from "axios";

const ColumnEditActReq = (val) =>{
    return {
        type : 'ColumnEditActReq',
        payload : val
    }
};

const ColumnEditActSuccess = (val) =>{
    return {
        type : 'ColumnEditActSuccess',
        payload : val 
    }
};

const ColumnEditActErr = (val) =>{
    return {
        type : 'ColumnEditActErr',
        payload : val
    }
};

export const FetchColumnEditActData = (formId,userID,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ColumnEditActReq());
        axios.get(`http://localhost:8080/VF/getcol2?formId=${formId}&pUserName=${userID}`, {headers})
        .then((res)=>{
            dispatch(ColumnEditActSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ColumnEditActErr(err))
        })
    }
}


