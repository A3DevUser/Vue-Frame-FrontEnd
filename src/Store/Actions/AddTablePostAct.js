import axios from "axios";
import swal from "sweetalert"
import { FetchGetData } from "./GetDataAct";
import { useNavigate } from "react-router";
import { batch } from "react-redux";

const AddTableReq = (val) =>{
    return {
        type : 'AddTableReq',
        payload : val
    }
};

const AddTableSuccess = (val) =>{
    return {
        type : 'AddTableSuccess',
        payload : val 
    }
};

const AddTableErr = (val) =>{
    return {
        type : 'AddTableErr',
        payload : val
    }
};

export const AddTableReset = (val) =>{
    return {
        type :'AddTableReset',
        payload : val
    }
}

export const PostAddTableData = (userId,data,token,setDisBtn) =>{

    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(AddTableReq());
        axios.post(`http://localhost:8080/VF/callWorkflowProcedure?currLoggedInUser=${userId}`,data,{headers})
        .then((res)=>{
            console.log('PostAddTableData',res.data)
            dispatch(AddTableSuccess(res.data))
            setDisBtn(false)
            if(res.data.valid=='true'){
                return swal({
                    title :res.data.message,
                    icon: "success",
                })
            }else{
                return swal({
                    title :res.data.message,
                    icon: "error",
                })
            }
        })
        .catch((err)=>{
            dispatch(AddTableErr(err))
            let ErrorLog = JSON.stringify(`Error Occurred: ${err}`)
            return swal({
                title :'Alert',
                text : ErrorLog,
                icon: "warning",
                dangerMode: true
            })
        })
    }

}


