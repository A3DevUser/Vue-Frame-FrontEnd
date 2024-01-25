import axios from "axios";
import swal from "sweetalert";

const A3GetPartySheetDataReq = (val) =>{
    return {
        type : 'A3GetPartySheetDataReq',
        payload : val
    }
};

const A3GetPartySheetDataSuccess = (val) =>{
    return {
        type : 'A3GetPartySheetDataSuccess',
        payload : val
    }
};

const A3GetPartySheetDataErr = (val) =>{
    return {
        type : 'A3GetPartySheetDataErr',
        payload : val
    }
};

export const A3GetPartySheetData = (data,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(A3GetPartySheetDataReq());
        axios.post(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/setAssessTpreData`,data,{headers})
        .then((res)=>{
            dispatch(A3GetPartySheetDataSuccess(res))
            return swal({
                title:'Data Saved Successfully',
                icon:'success'
            })
        })
        .catch((err)=>{
            dispatch(A3GetPartySheetDataErr(err))
        })
    }

}


