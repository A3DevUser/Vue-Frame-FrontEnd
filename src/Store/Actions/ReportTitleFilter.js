import axios from "axios";

const ReportTitleFilterReq = (val) =>{
    return {
        type : 'ReportTitleFilterReq',
        payload : val
    }
};

const ReportTitleFilterSuccess = (val) =>{
    return {
        type : 'ReportTitleFilterSuccess',
        payload : val 
    }
};

const ReportTitleFilterErr = (val) =>{
    return {
        type : 'ReportTitleFilterErr',
        payload : val
    }
};

export const FetchReportTitleFilterData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ReportTitleFilterReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getRptFilData?rptId=${id}`, {headers})
        .then((res)=>{
            dispatch(ReportTitleFilterSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportTitleFilterErr(err))
        })
    }
}


