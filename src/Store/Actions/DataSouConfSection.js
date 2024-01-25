import axios from "axios";

const DataSouConfSectionReq = (val) =>{
    return {
        type : 'DataSouConfSectionReq',
        payload : val
    }
};

const DataSouConfSectionSuccess = (val) =>{
    return {
        type : 'DataSouConfSectionSuccess',
        payload : val
    }
};

const DataSouConfSectionErr = (val) =>{
    return {
        type : 'DataSouConfSectionErr',
        payload : val
    }
};


export const FetchDataSouConfSectionData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(DataSouConfSectionReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getRptConfSec?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(DataSouConfSectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(DataSouConfSectionErr(err))
        })
    }

}


