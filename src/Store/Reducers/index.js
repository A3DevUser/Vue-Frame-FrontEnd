import { combineReducers } from "redux";
import { SectionRed } from "./SectionRed";
import { ColumnRed } from "./ColumnRed";
import { SubSectionRed } from "./SubSectionRed";
import {NavBarRed}  from "./NavBarRed"
import { FormIdRed,FormDatRed,EmdRed,DropDownValRed,ExcelDataRed,MainObjIdRed } from "./GeneralStatesRed";
import { GridRed } from "./GridRed";
import { ConfSectionRed } from "./ConfSectionRed";
import { ConfColumnRed } from "./ConfColumnRed";
import { ConfGridRed } from "./ConfGridRed";
import { ModalSectionRed } from "./ModalSectionRed";
import { ModalGridRed } from "./ModalGridRed";
import { ModalColumnRed } from "./ModalColumnRed";
import { SendConfDataRed } from "./SendConfDataRed";
import { DropValRed } from "./DropValRed";
import { DropValSecRed } from "./DropValSecRed";
import { FormExcelPostRed } from "./FormExcelPostRed";
import { AuthRed } from "./AuthenticationRed";
import { LogInStateRed } from "./GeneralStatesRed";
import { WFCommonRed } from "./WorkFlowCommRed";
import { ActionRed } from "./ActionRed";
import { UserDataStateRed, ResetFormRed } from "./GeneralStatesRed";
import { GetDataRed } from "./GetDataRed";
import { ExportRed } from "./ExportRed";
import { ImportGridRed } from "./ImportGridRed";
import { ImportColumnRed } from "./ImportColumnRed";
import { SendObjectIdRed } from "./ObjectIdRed";
import { FormEditRed } from "./FormEditRed";
import { ReportConfSectionRed } from "./ReportConfSectionRed";
import { ReportConfGridRed } from "./ReportConfGridRed";
import { ReportConfColumnRed } from "./ReportConfColumnRed";
import { DataSouConfColumnRed } from "./DataSouConfColumnRed";
import { DataSouConfGridRed } from "./DataSouConfGridRed";
import { DataSouConfSectionRed } from "./DataSouConfSectionRed";
import { SendUserDataInfoRed } from "./UserDataRed";


const rootReducers = combineReducers({
    SectionRed,  
    ColumnRed,
    SubSectionRed,
    NavBarRed,
    FormIdRed,
    FormDatRed,
    GridRed,
    ConfSectionRed,
    ConfColumnRed,
    ConfGridRed,
    ModalSectionRed,
    ModalGridRed,
    ModalColumnRed,
    SendConfDataRed,
    DropValRed,
    EmdRed,
    DropValSecRed,
    DropDownValRed,
    ExcelDataRed,
    FormExcelPostRed,
    AuthRed,
    LogInStateRed,
    WFCommonRed,
    ActionRed,
    UserDataStateRed,
    GetDataRed,
    ResetFormRed,
    ExportRed,
    ImportGridRed,
    ImportColumnRed,
    SendObjectIdRed,
    FormEditRed,
    MainObjIdRed,
    ReportConfSectionRed,
    ReportConfGridRed,
    ReportConfColumnRed,
    DataSouConfSectionRed,
    DataSouConfGridRed,
    DataSouConfColumnRed,
    SendUserDataInfoRed,
    });

export default rootReducers