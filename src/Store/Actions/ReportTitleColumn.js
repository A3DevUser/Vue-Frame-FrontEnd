import axios from "axios";

const ReportTitleColumnReq = (val) =>{
    return {
        type : 'ReportTitleColumnReq',
        payload : val
    }
};

const ReportTitleColumnSuccess = (val) =>{
    return {
        type : 'ReportTitleColumnSuccess',
        payload : val 
    }
};

const ReportTitleColumnErr = (val) =>{
    return {
        type : 'ReportTitleColumnErr',
        payload : val
    }
};

export const FetchReportTitleColumnData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ReportTitleColumnReq());
        axios.get(`http://localhost:8080/VF/getRptColData?rptId=${id}`, {headers})
        .then((res)=>{
            dispatch(ReportTitleColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportTitleColumnErr(err))
        })
    }
}


