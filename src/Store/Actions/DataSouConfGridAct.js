import axios from "axios";

const DataSouConfGridActReq = (val) =>{
    return {
        type : 'DataSouConfGridActReq',
        payload : val
    }
};

const DataSouConfGridActSuccess = (val) =>{
    return {
        type : 'DataSouConfGridActSuccess',
        payload : val
    }
};

const DataSouConfGridActErr = (val) =>{
    return {
        type : 'DataSouConfGridActErr',
        payload : val
    }
};

export const FetchDataSouConfGridActData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(DataSouConfGridActReq());
        axios.get(`http://localhost:8080/VF/getRptConfGrid?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(DataSouConfGridActSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(DataSouConfGridActErr(err))
        })
    }

}


