import axios from "axios";

const ReportTitleDataReq = (val) =>{
    return {
        type : 'ReportTitleDataReq',
        payload : val
    }
};

const ReportTitleDataSuccess = (val) =>{
    return {
        type : 'ReportTitleDataSuccess',
        payload : val 
    }
};

const ReportTitleDataErr = (val) =>{
    return {
        type : 'ReportTitleDataErr',
        payload : val
    }
};

export const FetchReportTitleFilData = (id,rData,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ReportTitleDataReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getRptQueryWithFilter?rptId=${id}&pjson=${rData}`, {headers})
        .then((res)=>{
            dispatch(ReportTitleDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportTitleDataErr(err))
        })
    }
}


