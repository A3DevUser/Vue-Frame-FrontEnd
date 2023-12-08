import { Tab, Tabs } from "react-bootstrap"
import { MainObject } from "./Elements/commonFun"
import './CSS/Tabs.css'
import { useSelector } from "react-redux"
import { useEffect } from "react"

function TabsBar({accordionVal,gridData,columnData,data,defaultVal,setdefaultVal,handleSave}) {

    const FormDatRed = useSelector((state) => state.FormDatRed)
    const MainObjIdRed = useSelector((state)=>state.MainObjIdRed)

    const handleChangeSec = (e) =>{
        // console.log(e)
        setdefaultVal([e.secId])
    }
    // console.log('columnData',columnData)


    return <Tabs activeKey={defaultVal ? defaultVal[0] : ''} id="fill-tab-example" className="mb-3 m-2 bg-gray" fill>
        
    {
        accordionVal.map((res,i)=>{
            return <Tab eventKey={res.secId} title={<span onClick={()=>{handleChangeSec(res)}} className="tabTitle">{res.secName}</span>} key={i} >
                            <div style={{height:'79vh',maxHeight:'79vh', overflowY:'scroll'}} className='tabDiv'>{
            gridData.filter((fil)=>{
                return fil.secId == res.secId
            }).map((subRes)=>{
                let dataObj ={}
                // columnData.filter((fil)=>{return fil.gridId == subRes.gridId}).
                columnData.forEach((fe)=>{
                    if(fe.gridId==subRes.gridId){
                        dataObj[fe.accessor]=''
                    }
                    })
                    // console.log('RowDataNew',dataObj)
                return (<>
                <div style={{maxWidth : subRes.width}}>
                    {/* {console.log('MainObjIdRedNew',FormDatRed[subRes.gridId].filter((fil) => {
                            return fil.VF_MAIN_OBJ_ID == MainObjIdRed
                           }))} */}
                    {
                    columnData&&data&&
                    MainObject.table(columnData,
                        window.location.pathname.includes('addTable') ?

                        Object.keys(FormDatRed).includes(subRes.gridId) ?
                        Object.keys(FormDatRed[subRes.gridId]).includes(MainObjIdRed) ?

                        FormDatRed[subRes.gridId][MainObjIdRed]
                        : []
                        // .filter((fil) => {
                        //     return fil.VF_MAIN_OBJ_ID == MainObjIdRed
                        //    })
                           : []

                           :

                        (data.filter((fil)=>{return fil.GRID_ID == subRes.gridId}).length == 1) ? data.filter((fil)=>{return fil.GRID_ID==subRes.gridId})[0].DATA : [dataObj],
                        subRes,handleSave)
                }
                  <span className='mx-5 my-2' style={{float:'right',display:window.location.pathname.includes('confform') ? 'block' : 'none'}}>
{/* {
MainObject.button({classNameVal:'btn btn-success', widthVal:'', heightVal:'',btnName:'Save'},()=>{handleSave(subRes)},i)
} */}
</span>
<br/><br/><br/><br/>
</div></>)
            })
        }</div>
            </Tab>
        })
    }
    </Tabs>

}
export default TabsBar;