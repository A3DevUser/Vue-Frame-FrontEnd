import axios from "axios";

const ReportConfGridReq = (val) =>{
    return {
        type : 'ReportConfGridReq',
        payload : val
    }
};

const ReportConfGridSuccess = (val) =>{
    return {
        type : 'ReportConfGridSuccess',
        payload : val
    }
};

const ReportConfGridErr = (val) =>{
    return {
        type : 'ReportConfGridErr',
        payload : val
    }
};

export const FetchReportConfGridData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ReportConfGridReq());
        axios.get(`http://localhost:8080/VF/getConfSGrid?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(ReportConfGridSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportConfGridErr(err))
        })
    }

}


