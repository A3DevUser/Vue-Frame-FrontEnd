import axios from "axios";

const WFCommonReq = (val) =>{
    return {
        type : 'WFCommonReq',
        payload : val
    }
};

const WFCommonSuccess = (val) =>{
    return {
        type : 'WFCommonSuccess',
        payload : val
    }
};

const WFCommonErr = (val) =>{
    return {
        type : 'WFCommonErr',
        payload : val
    }
};

export const FetchWFCommonData = (id) =>{
    return (dispatch)=>{
        dispatch(WFCommonReq());
        axios.post(`http://localhost:8080/VF/setWorkFlowGridData?gridId=${id}`)
        .then((res)=>{
            dispatch(WFCommonSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(WFCommonErr(err))
        })
    }

}


