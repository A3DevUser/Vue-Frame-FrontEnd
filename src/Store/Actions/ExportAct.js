const { default: axios } = require("axios")

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

const PostExportData = () =>{
    return(dispatch)=>{
        dispatch(ExportReq())
        axios.post('')
        .then((res)=>{
            dispatch(ExportSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ExportError(err))
        })
    }
}