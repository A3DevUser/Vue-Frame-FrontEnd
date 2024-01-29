import axios from "axios";
import swal from "sweetalert";

const A3SaveReq = (val) =>{
    return {
        type : 'A3SaveReq',
        payload : val
    }
};

const A3SaveSuccess = (val) =>{
    return {
        type : 'A3SaveSuccess',
        payload : val 
    }
};

const A3SaveErr = (val) =>{
    return {
        type : 'A3SaveErr',
        payload : val
    }
};

export const PostA3SaveData = (data,token,navigate) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(A3SaveReq());
        axios.post(`http://localhost:8080/VF/SubmitOnBoardingData`,data,{headers})
        .then((res)=>{
            dispatch(A3SaveSuccess(res.data))
            return swal({
              title :  'Data Saved successfull !!!',
              icon:'success'
            }).then(()=>{
                navigate('/addTable')
            })
        })
        .catch((err)=>{
            dispatch(A3SaveErr(err))
        })
    }
}


