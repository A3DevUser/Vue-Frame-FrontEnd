import axios from "axios"
import swal from "sweetalert"


const ExportReq = (val) =>{
    return{
        type:'ExportReq',
        payload:val
    }
}
const ExportSuccess = (val) =>{
    return{
        type:'ExportSuccess',
        payload:val
    }
}

const ExportError = (val) =>{
    return{
        type:'ExportError',
        payload:val
    }
}

export const PostExportData = (data,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(ExportReq())
        axios.post(`http://localhost:8080/VF/importExportAddData`,data,{headers})
        .then((res)=>{
            dispatch(ExportSuccess(res.data))
            return swal({
                title :'Alert',
                text : 'Data Save Successfully',
                icon: "success",
            })
        })
        .catch((err)=>{
            dispatch(ExportError(err))
            return swal({
                title :'Alert',
                text : err,
                icon: "warning",
                dangerMode: true
            })
        })
    }
}