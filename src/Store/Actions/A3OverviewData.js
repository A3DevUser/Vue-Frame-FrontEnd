import axios from "axios";

const A3OverviewDataReq = (val) =>{
    return {
        type : 'A3OverviewDataReq',
        payload : val
    }
};

const A3OverviewDataSuccess = (val) =>{
    return {
        type : 'A3OverviewDataSuccess',
        payload : val 
    }
};

const A3OverviewDataErr = (val) =>{
    return {
        type : 'A3OverviewDataErr',
        payload : val
    }
};

export const FetchA3OverviewDataData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(A3OverviewDataReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/fetchDataId`,{headers})
        .then((res)=>{
            dispatch(A3OverviewDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(A3OverviewDataErr(err))
        })
    }
}


