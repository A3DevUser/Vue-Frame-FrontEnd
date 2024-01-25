import axios from "axios";

const ReportConfColumnReq = (val) =>{
    return {
        type : 'ReportConfColumnReq',
        payload : val
    }
};

const ReportConfColumnSuccess = (val) =>{
    return {
        type : 'ReportConfColumnSuccess',
        payload : val
    }
};

const ReportConfColumnErr = (val) =>{
    return {
        type : 'ReportConfColumnErr',
        payload : val
    }
};

export const FetchReportConfColumnData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ReportConfColumnReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getConfColumn?formId=${id}`, {headers})
        .then((res)=>{
            dispatch(ReportConfColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportConfColumnErr(err))
        })
    }

}


