import styled from 'styled-components';

export const Styles = styled.div`
.tableCont::-webkit-scrollbar{
  width: .5vw !important;
  height : 1vh !important;
}

.tableCont::-webkit-scrollbar-thumb {
  background-color: #888 !important;
  border-radius : 20px !important;
}

  .table {
    border: 1px solid #ddd !important;
 
    .tr {
      :last-child {
        .td {
          border-bottom: 0 !important;
        }
      }
    }

    .resizer {
      display: inline-block !important;
      width: 10px !important;
      height: 100% !important;
      position: absolute !important;
      right: 0 !important;
      top: 0 !important;
      transform: translateX(50%) !important;
      z-index: 1 !important;
      /* prevent scroll on touch devices */
      touch-action: none !important;
    }
    
    

 
    .th{
      padding: 5px !important;
      border-bottom: 1px solid #ddd !important;
      border-right: 1px solid #ddd !important;
      background-color: #60b3b3fa !important;
      color: white !important;
      
      text-align: center !important;
      overflow: hidden !important;
 
      :last-child {
        border-right: 0 !important;
      }
    }

    .td {
        padding: 5px !important;
        border-bottom: 1px solid #ddd !important;
        border-right: 1px solid #ddd !important;
        background-color: white !important;
        color: black !important;
        text-align: left !important;
        overflow: hidden !important;
   
        :last-child {
          border-right: 0 !important;
        }
      }
 
    &.sticky {
      overflow: scroll !important;
      .header,
      .footer {
        position: sticky !important;
        z-index: 1 !important;
        width: fit-content !important;
      }
 
      .header {
        top: 0 !important;
        box-shadow: 0px 3px 3px #ccc !important;
      }

      .header1 {
        position: sticky !important;
        width: fit-content !important;
        top: 60px !important;
        box-shadow: 0px 3px 3px #ccc !important;
        z-index: 2 !important;
      }
 
      .footer {
        bottom: 0 !important;
        box-shadow: 0px -3px 3px #ccc !important;
      }
 
      .body {
        position: relative !important;
        z-index: 0 !important;
      }
 
      [data-sticky-td] {
        position: sticky !important;
      }
 
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc !important;
      }
 
      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc !important;
      }
    }
  }
` ;