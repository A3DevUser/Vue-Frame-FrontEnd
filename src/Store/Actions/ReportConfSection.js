import axios from "axios";

const ReportConfSectionReq = (val) =>{
    return {
        type : 'ReportConfSectionReq',
        payload : val
    }
};

const ReportConfSectionSuccess = (val) =>{
    return {
        type : 'ReportConfSectionSuccess',
        payload : val
    }
};

const ReportConfSectionErr = (val) =>{
    return {
        type : 'ReportConfSectionErr',
        payload : val
    }
};


export const FetchReportConfSectionData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(ReportConfSectionReq());
        axios.get(`http://localhost:8080/VF/getConSection?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(ReportConfSectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportConfSectionErr(err))
        })
    }

}


