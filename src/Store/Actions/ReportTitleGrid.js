import axios from "axios";

const ReportTitleGridReq = (val) =>{
    return {
        type : 'ReportTitleGridReq',
        payload : val
    }
};

const ReportTitleGridSuccess = (val) =>{
    return {
        type : 'ReportTitleGridSuccess',
        payload : val
    }
};

const ReportTitleGridErr = (val) =>{
    return {
        type : 'ReportTitleGridErr',
        payload : val
    }
};

export const FetchReportTitleGridData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    //   console.log(id)
    //   console.log(headers)
    return (dispatch)=>{
        dispatch(ReportTitleGridReq());
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getRptData?rptId=${id}`,{headers})
        .then((res)=>{
            dispatch(ReportTitleGridSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ReportTitleGridErr(err))
        })
    }

}


