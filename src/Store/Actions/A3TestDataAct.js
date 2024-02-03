import axios from "axios";

const A3TestReq = (val) =>{
    return {
        type : 'A3TestReq',
        payload : val
    }
};

const A3TestSuccess = (val) =>{
    return {
        type : 'A3TestSuccess',
        payload : val 
    }
};

const A3TestErr = (val) =>{
    return {
        type : 'A3TestErr',
        payload : val
    }
};

export const FetchA3TestData = (questionType,vendorType,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };

    return (dispatch)=>{
        dispatch(A3TestReq());
        // axios.get(`http://localhost:8080/VF/getQuestionData?pQueType=${questionType}&pVenType=${vendorType}`,{headers})
        axios.get(`http://localhost:8080/VF/getQuestionData2?category=${questionType}&assessType=${vendorType}`,{headers})
        .then((res)=>{
            dispatch(A3TestSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(A3TestErr(err))
        })
    }
}


