import axios from "axios"

const EditReportReq = (val) =>{
    return{
        type : 'EditReportReq',
        payload : val
    }
}

const EditReportSuccess = (val)=>{
    return{
        type :'EditReportSuccess',
        payload:val,
    }
}

const EditReportError = (val) =>{
    return {
        type :'EditReportError',
        payload:val
    }
}

export const FetchEditReportData = (id,token)=>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(EditReportReq())
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getRptEditData?rptId=${id}`,{headers})
        .then((res)=>{
            dispatch(EditReportSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(EditReportError(err))
        })
    }
   
}