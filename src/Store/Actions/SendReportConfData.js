import axios from "axios"
import swal from "sweetalert"



export const ReportConfReq = (getReportConfData)=>{
    return{
        type:'ReportConfReq',
        payload : getReportConfData
    }
}

export const ReportConfSuccess = (getReportConfData)=>{
    return{
        type:'ReportConfSuccess',
        payload : getReportConfData
    }
}

export const ReportConfError = (getReportConfData)=>{
    return{
        type:'ReportConfError',
        payload : getReportConfData
    }
}


export const FormReportConfData = (api,FormReportConfInfo,token)=>{  
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return function(dispatch){
        dispatch(ReportConfReq())
        axios.post(api,FormReportConfInfo,{headers})
        .then((res)=>{
            dispatch(ReportConfSuccess(res.data))
            return swal({
                title :'Alert',
                text : 'Data Save Successfully',
                icon: "success",
            })
        })
        .catch((err)=>{
            dispatch(ReportConfError(err))
            let ErrorLog = JSON.stringify(`Error Occurred: ${err}`)
            return  swal({
                title :'Alert',
                text : ErrorLog,
                icon: "warning",
                dangerMode: true
            })
        })
    }

}