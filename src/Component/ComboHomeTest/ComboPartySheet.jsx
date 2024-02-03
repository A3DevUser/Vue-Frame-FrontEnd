import React, { useEffect } from 'react'
import ComboPartySheetTable from './ComboPartySheetTable'
import { Columns, Group_Columns, Group_columns_Name } from '../ReportTable/Columns'
import Mock_data from './MOCK_DATA_TAB.json'
import DummyData from './DummyDataTest.json'
import { dummy_column_data, group_dummy_col_data } from './DummyColumn'

const ComboPartySheet = () => {

  const groupArray = ["testDetails", "Vishal", "Nitin", "Tej"]

  const HeaderGroup = (dummyColumn, userArray) => {
    return userArray.map((res, i) => {
      if (i == 0) {
        return {
          Header: res,
          columns: dummyColumn.filter((fil) => {
            return fil.parentCell == 'test'
          })
        }
      } else {
        return {
          Header: res,
          columns: dummyColumn.filter((fil) => {
            return fil.parentCell != 'test'
          }).map((ress) => {
            return {
              Header: ress.Header,
              accessor: ress.Header + res
            }
          })
        }
      }
    })
  }

  return (
    <>
      <ComboPartySheetTable columnData={HeaderGroup(dummy_column_data, groupArray)} tableData={DummyData} />
    </>
  )
}

export default ComboPartySheet