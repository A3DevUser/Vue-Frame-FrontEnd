import axios from "axios"
import swal from "sweetalert"



export const TestScoreDataReq = (getTestScoreDataData)=>{
    return{
        type:'TestScoreDataReq',
        payload : getTestScoreDataData
    }
}

export const TestScoreDataSuccess = (getTestScoreDataData)=>{
    return{
        type:'TestScoreDataSuccess',
        payload : getTestScoreDataData
    }
}

export const TestScoreDataError = (getTestScoreDataData)=>{
    return{
        type:'TestScoreDataError',
        payload : getTestScoreDataData
    }
}


export const FormTestScoreData = (scoreData,token)=>{  
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return function(dispatch){
        dispatch(TestScoreDataReq())
        axios.post(`http://localhost:8080/VF/setVRMRatingData`,scoreData,{headers})
        .then((res)=>{
            dispatch(TestScoreDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(TestScoreDataError(err))
            let ErrorLog = JSON.stringify(`Error Occurred: ${err}`)
        })
    }

}