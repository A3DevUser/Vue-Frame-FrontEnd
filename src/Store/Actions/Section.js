import axios from "axios";

const SectionReq = (val) =>{
    return {
        type : 'SectionReq',
        payload : val
    }
};

const SectionSuccess = (val) =>{
    return {
        type : 'SectionSuccess',
        payload : val
    }
};

const SectionErr = (val) =>{
    return {
        type : 'SectionErr',
        payload : val
    }
};


export const FetchSectionData = (id,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return (dispatch)=>{
        dispatch(SectionReq());
        axios.get(`http://localhost:8080/VF/getSection?formId=${id}`,{headers})
        .then((res)=>{
            dispatch(SectionSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(SectionErr(err))
        })
    }

}


