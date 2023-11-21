import axios from "axios";

const ColumnReq = (val) =>{
    return {
        type : 'ColumnReq',
        payload : val
    }
};

const ColumnSuccess = (val) =>{
    return {
        type : 'ColumnSuccess',
        payload : val 
    }
};

const ColumnErr = (val) =>{
    return {
        type : 'ColumnErr',
        payload : val
    }
};

export const FetchColumnData = (id,emd,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ColumnReq());
        axios.get(`http://localhost:8080/VF/getcol?formId=${id}&emd=${emd}`, {headers})
        .then((res)=>{
            dispatch(ColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ColumnErr(err))
        })
    }
}


