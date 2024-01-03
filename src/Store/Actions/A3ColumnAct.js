import axios from "axios";

const A3ColumnReq = (val) =>{
    return {
        type : 'A3ColumnReq',
        payload : val
    }
};

const A3ColumnSuccess = (val) =>{
    return {
        type : 'A3ColumnSuccess',
        payload : val 
    }
};

const A3ColumnErr = (val) =>{
    return {
        type : 'A3ColumnErr',
        payload : val
    }
};

export const FetchA3ColumnData = (formId,area,product,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(A3ColumnReq());
        axios.get(`http://localhost:8080/VF/getColumnHeader?formId=${formId}&areaName=${area}&portfolio=${product}`,{headers})
        .then((res)=>{
            dispatch(A3ColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(A3ColumnErr(err))
        })
    }
}


