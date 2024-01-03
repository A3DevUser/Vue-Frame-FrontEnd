import axios from "axios";

const A3HomeDataReq = (val) =>{
    return {
        type : 'A3HomeDataReq',
        payload : val
    }
};

const A3HomeDataSuccess = (val) =>{
    return {
        type : 'A3HomeDataSuccess',
        payload : val 
    }
};

const A3HomeDataErr = (val) =>{
    return {
        type : 'A3HomeDataErr',
        payload : val
    }
};

export const FetchA3HomeDataData = (product,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(A3HomeDataReq());
        axios.get(`http://localhost:8080/VF/fetchAccountData?schemeCode=${product}`,{headers})
        .then((res)=>{
            dispatch(A3HomeDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(A3HomeDataErr(err))
        })
    }
}


