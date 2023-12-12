import axios from "axios";

const DataSouConfColumnReq = (val) =>{
    return {
        type : 'DataSouConfColumnReq',
        payload : val
    }
};

const DataSouConfColumnSuccess = (val) =>{
    return {
        type : 'DataSouConfColumnSuccess',
        payload : val
    }
};

const DataSouConfColumnErr = (val) =>{
    return {
        type : 'DataSouConfColumnErr',
        payload : val
    }
};

export const FetchDataSouConfColumnData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(DataSouConfColumnReq());
        axios.get(`http://localhost:8080/VF/getRptConfCol?formId=${id}`, {headers})
        .then((res)=>{
            dispatch(DataSouConfColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(DataSouConfColumnErr(err))
        })
    }

}


