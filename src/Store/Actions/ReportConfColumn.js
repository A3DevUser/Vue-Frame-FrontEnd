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
        axios.get(`http://localhost:8080/VF/getConfColumn?formId=${id}`, {headers})
        .then((res)=>{
            dispatch(ReportConfColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportConfColumnErr(err))
        })
    }

}


