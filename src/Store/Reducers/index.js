import { combineReducers } from "redux";
import { SectionRed } from "./SectionRed";
import { ColumnRed } from "./ColumnRed";
import { SubSectionRed } from "./SubSectionRed";
import {NavBarRed}  from "./NavBarRed"
import { FormIdRed,FormDatRed,EmdRed,DropDownValRed,ExcelDataRed,MainObjIdRed, mainObjDataRed,AddTableFormDataRed, AddTableMultFormDataRed, PreOnboardignScoreRed } from "./GeneralStatesRed";
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
import { SendReportConfDataRed } from "./SendReportConfDataRed";
import { ReportTitleColumnRed } from "./ReportTitleColumnRed";
import { ReportTitleGridRed } from "./ReportTitleGridRed";
import { ReportTitleFilterRed } from "./ReportTitleFilterRed";
import { ReportTitleDataRed } from "./ReportTitleDataRed";
import { PendencyColRed } from "./PendencyColRed";
import { PendencyDataRed } from "./PendencyDataRed";
import { A3ColumnRed } from "./A3ColumnRed";
import { A3PartyColumnRed } from "./A3PartyColumnRed"; 
import { A3TestRed } from "./A3TestRed";
import { A3SaveRed } from "./A3DataSaveRed";
import { A3OverviewColumnRed } from "./A3OverviewColumnRed";
import { A3OverviewDataRed } from "./A3OverviewDataRed";
import { A3AreaDataRed } from "./A3AreaDataRed";
import { A3ProductDataRed } from "./A3ProductDataRed";
import { A3HomeDataRed } from "./A3HomeDataRed";
import { A3PsOpDataRed } from "./A3PsOpDataRed";
import { ColumnEditActRed } from "./ColumnEditRed";
import { WorkFlowEditRed } from "./WorkFlowEditRed";
import { DataSourceEditRed } from "./DataSourceEditRed";
import { EditReportRed } from "./EditReportRed";
import { MultiModalColRed } from "./MultiModalColRed";
import { MultiModalColRowRed } from "./MultiModalColRowRed";
import { ReviewTypeFilterRed,ReviewFreqFilterRed,ReviewSubFreqFilterRed } from "./ReviewFilterRed";
import { ReviewDataRed } from "./ReviewDataRed";
import { SendReviewDataRed } from "./SendReviewDataRed";
import { ReviewPlanDataRed } from "./ReviewPlanDataRed";
import { SendCheckerDataRed } from "./SendCheckerDataRed";
import { A3GetPartySheetDataRed } from "./A3GetPartySheetDataRed"; 
import { SendTestScoreDataRed } from "./TestScoreDataRed"; 
import { AddTablePostRed } from "./AddTablePostRed";


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
    SendReportConfDataRed,
    ReportTitleColumnRed,
    ReportTitleGridRed,
    ReportTitleFilterRed,
    ReportTitleDataRed,
    PendencyColRed,
    PendencyDataRed,
    A3ColumnRed,
    A3PartyColumnRed,
    A3TestRed,
    mainObjDataRed,
    A3SaveRed,
    A3OverviewColumnRed,
    A3OverviewDataRed,
    A3AreaDataRed,
    A3ProductDataRed,
    A3HomeDataRed,
    A3PsOpDataRed,
    ColumnEditActRed,
    WorkFlowEditRed,
    DataSourceEditRed,
    EditReportRed,
    MultiModalColRed,
    MultiModalColRowRed,
    ReviewTypeFilterRed,
    ReviewFreqFilterRed,
    ReviewSubFreqFilterRed,
    ReviewDataRed,
    SendReviewDataRed,
    ReviewPlanDataRed,
    SendCheckerDataRed,
    A3GetPartySheetDataRed,
    SendTestScoreDataRed,
    AddTableFormDataRed,
    AddTableMultFormDataRed,
    AddTablePostRed,
    PreOnboardignScoreRed
    });

export default rootReducers