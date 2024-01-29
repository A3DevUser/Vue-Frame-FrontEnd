import axios from "axios";

const A3AreaDataReq = (val) =>{
    return {
        type : 'A3AreaDataReq',
        payload : val
    }
};

const A3AreaDataSuccess = (val) =>{
    return {
        type : 'A3AreaDataSuccess',
        payload : val 
    }
};

const A3AreaDataErr = (val) =>{
    return {
        type : 'A3AreaDataErr',
        payload : val
    }
};

export const FetchA3AreaDataData = (id,emd,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(A3AreaDataReq());
        axios.get(`http://localhost:8080/VF/fetchArea?branchName=Universal branch`,{headers})
        .then((res)=>{
            dispatch(A3AreaDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(A3AreaDataErr(err))
        })
    }
}


