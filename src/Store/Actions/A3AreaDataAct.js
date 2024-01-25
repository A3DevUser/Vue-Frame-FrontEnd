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
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/fetchArea?branchName=Universal branch`,{headers})
        .then((res)=>{
            dispatch(A3AreaDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(A3AreaDataErr(err))
        })
    }
}


