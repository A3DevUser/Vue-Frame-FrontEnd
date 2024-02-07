export const FormIdAct = (id) =>{
    return {
        type :'FormIdAct',
        payload : id
    }
} 

export const EmdAct = (emd) =>{
    return {
        type : 'EmdAct',
        payload : emd
    }
}

export const ResetAct = ()=>{
    return {
        type : 'ResetAct'
    }
}

export const FormDataAct = (val) =>{
    return {
        type :'FormDataAct',
        payload : val
    }
}

export const DropDownVal = (val) =>{
    return {
        type :'DropDownVal',
        payload : val
    }
}

export const ExcelDataAct = (val) =>{
    return {
        type : 'ExcelDataAct',
        payload : val
    }
}

export const LogInState = (val) =>{
    return{
        type : 'LogInState',
        payload : val
    }
}

export const UserDataState = (val) =>{
    return{
        type : 'UserDataState',
        payload : val
    }
}

export const ResetFormState = (val) =>{
    return{
        type : 'ResetFormState'
    }
}

export const ResetObjId = () =>{
    return {
        type :'ResetObjId'
    }
}

export const MainObjId = (val) =>{
    return {
        type :'MainObjId',
        payload : val
    }
}

export const mainObjData = (val) =>{
    return {
        type :'mainObjData',
        payload : val
    }
}

export const AddTableMainFormData = (val) =>{
    return {
        type :'AddTableFormData',
        payload: val
    }
}

export const AddTableMultFormData = (val) =>{
    return {
        type :'AddTableMultFormData',
        payload: val
    }
}

export const PreOnboardignScoreAct = (val) =>{
    return {
        type :'PreOnboardignScoreAct',
        payload: val
    }
}