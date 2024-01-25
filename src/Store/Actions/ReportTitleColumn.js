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
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getRptColData?rptId=${id}`, {headers})
        .then((res)=>{
            dispatch(ReportTitleColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportTitleColumnErr(err))
        })
    }
}


