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
        axios.get(`http://localhost:8080/VF/getRptFilData?rptId=${id}`, {headers})
        .then((res)=>{
            dispatch(ReportTitleFilterSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportTitleFilterErr(err))
        })
    }
}


