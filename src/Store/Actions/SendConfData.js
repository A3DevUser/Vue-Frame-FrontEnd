import axios from "axios"
import swal from "sweetalert"



export const ConfReq = (getConfData)=>{
    return{
        type:'ConfReq',
        payload : getConfData
    }
}

export const ConfSuccess = (getConfData)=>{
    return{
        type:'ConfSuccess',
        payload : getConfData
    }
}

export const ConfError = (getConfData)=>{
    return{
        type:'ConfError',
        payload : getConfData
    }
}


export const FormConfData = (api,FormConfInfo,token)=>{  
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return function(dispatch){
        dispatch(ConfReq())
        axios.post(api,FormConfInfo,{headers})
        .then((res)=>{
            dispatch(ConfSuccess(res.data))
            return swal({
                title :'Alert',
                text : 'Data Save Successfully',
                icon: "success",
            })
        })
        .catch((err)=>{
            dispatch(ConfError(err))
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