export const FormIdRed = (state=null,action) =>{
    switch(action.type){
        case 'FormIdAct' : return action.payload
        default : return state
    }
}

export const FormDatRed = (state=[],action) =>{
    switch(action.type){
        case 'FormDataAct' : return action.payload
        default : return state
    }
}

export const EmdRed = (state=null,action) =>{
    switch(action.type){
        case 'EmdAct' : return action.payload
        default : return state
    }
}


export const DropDownValRed = (state=null,action) =>{
    switch(action.type){
        case 'DropDownVal' : return action.payload
        default : return state
    }
}

export const ExcelDataRed = (state=null,action) =>{
    switch(action.type){
        case 'ExcelDataAct' : return action.payload
        default : return state
    }
}


export const LogInStateRed = (state=false, action) =>{
    switch (action.type) {
        case 'LogInState' : return action.payload
        default : return state
    }
}


export const UserDataStateRed = (state=false, action) =>{
    switch (action.type) {
        case 'UserDataState' : return action.payload
        default : return state
    }
}

export const ResetFormRed = (state=false, action) =>{
    switch (action.type) {
        case 'ResetFormState' : return !state
        default : return state
    }
}

export const MainObjIdRed = (state=false, action) =>{
    switch (action.type) {
        case 'MainObjId' : return action.payload
        default : return state
    }
}

export const mainObjDataRed = (state=false, action) =>{
    switch (action.type) {
        case 'mainObjData' : return action.payload
        default : return state
    }
}

export const AddTableFormDataRed = (state=false, action) =>{
    switch (action.type) {
        case 'AddTableFormData' : return action.payload
        default : return state
    }
}

export const AddTableMultFormDataRed = (state=false, action) =>{
    switch (action.type) {
        case 'AddTableMultFormData' : return action.payload
        default : return state
    }
}

export const PreOnboardignScoreRed = (state=false, action) =>{
    switch (action.type) {
        case 'PreOnboardignScoreAct' : return action.payload
        default : return state
    }
}