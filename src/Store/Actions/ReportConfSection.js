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
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getConSection?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(ReportConfSectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportConfSectionErr(err))
        })
    }

}


