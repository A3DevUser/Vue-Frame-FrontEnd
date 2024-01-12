import axios from "axios";
import swal from "sweetalert"
import { FetchGetData } from "./GetDataAct";
import { useNavigate } from "react-router";

const FormExcelReq = (val) =>{
    return {
        type : 'FormExcelReq',
        payload : val
    }
};

const FormExcelSuccess = (val) =>{
    return {
        type : 'FormExcelSuccess',
        payload : val 
    }
};

const FormExcelErr = (val) =>{
    return {
        type : 'FormExcelErr',
        payload : val
    }
};

export const PostFormExcelData = (userId,data,token,setdata,setDisBtn,formId,daysFlag,navigate) =>{

    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(FormExcelReq());
        axios.post(`http://localhost:8080/VF/callWorkflowProcedure?currLoggedInUser=${userId}`,data,{headers})
        .then((res)=>{
            dispatch(FormExcelSuccess(res.data))
            if(window.location.pathname == '/addTable'){
                setdata([])
                setDisBtn(false)
            }else if(window.location.pathname == '/editTable'){
                // dispatch(FetchGetData(formId,token,userId,daysFlag))
                // setdata([])
                navigate('/pendencyDashboard')
                setDisBtn(false)
            }
            return swal({
                title :'Alert',
                text : 'Data Save Successfully',
                icon: "success",
            })
        })
        .catch((err)=>{
            dispatch(FormExcelErr(err))
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


