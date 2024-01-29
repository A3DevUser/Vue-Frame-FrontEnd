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
        axios.get(`http://localhost:8080/VF/getConfColumn?formId=${id}`, {headers})
        .then((res)=>{
            dispatch(ConfColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ConfColumnErr(err))
        })
    }

}


