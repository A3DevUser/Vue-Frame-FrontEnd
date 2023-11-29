import { Tab, Tabs } from "react-bootstrap"
import { MainObject } from "./Elements/commonFun"
import './CSS/Tabs.css'

function ConfTabsBar({accordionVal,gridData,columnData,data,defaultVal,setdefaultVal,handleSave}) {

    const handleChangeSec = (e) =>{
        // console.log(e)
        setdefaultVal([e.secId])
    }
    // console.log('columnData',columnData)
    console.log('Confdata',data)


    return <Tabs activeKey={defaultVal ? defaultVal[0] : ''} id="fill-tab-example" className="mb-3 m-2 bg-gray" fill>
        
        {
            accordionVal.map((res,i)=>{
                return <Tab eventKey={res.secId} title={<span onClick={()=>{handleChangeSec(res)}} className="tabTitle">{res.secName}</span>} key={i} >
                                <div style={{height:'79vh',maxHeight:'79vh', overflowY:'scroll'}} className='tabDiv'>{
                gridData.filter((fil)=>{
                    return fil.secId == res.secId
                }).map((subRes)=>{
                    console.log('confdata24',subRes.gridId, data.filter((fil)=>{return fil.GRID_ID == subRes.gridId}))
                    let dataObj ={}
                    // columnData.filter((fil)=>{return fil.gridId == subRes.gridId}).
                    columnData.forEach((fe)=>{
                        if(fe.gridId==subRes.gridId){
                            dataObj[fe.accessor]=''
                        }
                        })
                        // console.log(dataObj)
                    return (<>
                    <div style={{maxWidth : subRes.width}}>
                        {
                        columnData&&data&&
                        MainObject.table(columnData,
                            (data.filter((fil)=>{return fil.GRID_ID == subRes.gridId}).length == 1) ? data.filter((fil)=>{return fil.GRID_ID==subRes.gridId})[0].DATA :
                            [dataObj]
                            ,subRes,handleSave)
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
export default ConfTabsBar;