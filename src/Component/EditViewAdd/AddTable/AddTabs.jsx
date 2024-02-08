import { MainObject } from '../../../Component/Elements/commonFun'
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import AddTab from './AddTab'
import { useSelector } from 'react-redux'

const AddTabs = ({sectionData,gridData,columnData}) => {

    const MainObjIdRed = useSelector((state)=>state.MainObjIdRed)
    const AddTableMultFormDataRed = useSelector((state)=>state.AddTableMultFormDataRed)


  return (
    <>
    <Tabs>
        {
            sectionData.map((res,i)=>{
                return  <Tab eventKey={res.secId} title={res.secName} key={i} >
                    {
                        gridData.filter((fil)=>{return fil.secId == res.secId}).map((gres)=>{
                            const gridColumn = columnData.filter((fil)=>{return fil.gridId == gres.gridId})
                            // console.log(gres,gridColumn)
                           return <AddTab columnData={gridColumn} gridData={gres} reportData={
                            AddTableMultFormDataRed.hasOwnProperty(MainObjIdRed) ? 
                            AddTableMultFormDataRed[MainObjIdRed].hasOwnProperty(gres.gridId) ?
                            AddTableMultFormDataRed[MainObjIdRed][gres.gridId] : [] :[]
                           } />
                        })
                    }
                </Tab>
            })
        }

    </Tabs>
    </>
  )
}

export default AddTabs